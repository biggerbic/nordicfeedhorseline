<?php
/**
 * @author      Wployalty (Alagesan)
 * @license     http://www.gnu.org/licenses/gpl-2.0.html
 * @link        https://www.wployalty.net
 * */

namespace Wlr\App\Controllers\Admin;

use Wlr\App\Helpers\EarnCampaign;
use Wlr\App\Helpers\Input;
use Wlr\App\Helpers\Util;

defined( 'ABSPATH' ) or die();

class Apps {
	/**
	 * Retrieves the list of apps
	 *
	 * @return void
	 */
	public static function getApps() {
		if ( ! Util::isBasicSecurityValid( 'wlr_apps_nonce' ) ) {
			wp_send_json_error( [ 'message' => __( 'You do not have access to the add-ons page', 'wp-loyalty-rules' ) ] );
		}
		$add_ons         = [];
		$is_pro          = EarnCampaign::getInstance()->isPro();
		$install_plugins = get_plugins();
		$plugin_root     = WP_PLUGIN_DIR;

		$input  = new Input();
		$search = (string) $input->post_get( 'search', '' );
		foreach ( $install_plugins as $plugin_path => $plugin_detail ) {
			$plugin_detail = get_plugin_data( "$plugin_root/$plugin_path", false, false );
			$plugin_detail = apply_filters( 'wlr_before_process_plugin_data', $plugin_detail, $plugin_path );
			if ( empty( $plugin_detail['WPLoyalty'] ) || ! version_compare( WLR_PLUGIN_VERSION, $plugin_detail['WPLoyalty'], ">=" ) ) {
				continue;
			}
			$page_link = ! empty( $plugin_detail['WPLoyalty Page Link'] ) ? admin_url( 'admin.php?' . http_build_query( [ 'page' => $plugin_detail['WPLoyalty Page Link'] ] ) ) : '';
			if ( ! $is_pro && empty( $page_link ) ) {
				continue;
			}
			$add_ons[] = [
				'icon'          => ! empty( $plugin_detail['WPLoyalty Icon'] ) ? $plugin_detail['WPLoyalty Icon'] : '',
				'title'         => ! empty( $plugin_detail['Title'] ) ? $plugin_detail['Title'] : '',
				'version'       => ! empty( $plugin_detail['Version'] ) ? $plugin_detail['Version'] : '',
				'author'        => ! empty( $plugin_detail['Author'] ) ? $plugin_detail['Author'] : '',
				'description'   => ! empty( $plugin_detail['Description'] ) ? $plugin_detail['Description'] : '',
				'document_link' => ! empty( $plugin_detail['WPLoyalty Document Link'] ) ? $plugin_detail['WPLoyalty Document Link'] : '',
				'is_active'     => Util::isPluginActive( $plugin_path ),
				'plugin'        => $plugin_path,
				'page_url'      => $page_link
			];
		}

		$add_ons = apply_filters( 'wlr_loyalty_apps', $add_ons );
		if ( ! empty( $search ) && preg_match_all( '/".*?("|$)|((?<=[\t ",+])|^)[^\t ",+]+/', strtolower( $search ), $matches ) ) {
			$search_terms = Util::getValidSearchWords( $matches[0] );
			foreach ( $add_ons as $key => $add_on ) {
				if ( ! Util::isSearchAvailable( $search_terms, strtolower( $add_on['title'] ) ) ) {
					unset( $add_ons[ $key ] );
				}
			}
		}
		wp_send_json_success( [ 'items' => $add_ons ] );
	}

	/**
	 * Activates a specific app
	 *
	 * @return void
	 */
	public static function activateApp() {
		if ( ! Util::isBasicSecurityValid( 'wlr_apps_nonce' ) ) {
			wp_send_json_error( [ 'message' => __( 'Basic validation failed', 'wp-loyalty-rules' ) ] );
		}
		$input  = new Input();
		$plugin = (string) $input->post_get( 'plugin', '' );
		if ( $plugin == 'wlr_app_launcher' ) {
			update_option( 'wlr_launcher_active', 'yes' );
			wp_send_json_success( [ 'message' => __( 'App activated successfully', 'wp-loyalty-rules' ) ] );
		}
		if ( $plugin == 'wlr_app_point_expire' ) {
			update_option( 'wlr_expire_point_active', 'yes' );
			wp_send_json_success( [ 'message' => __( 'App activated successfully', 'wp-loyalty-rules' ) ] );
		}
		if ( ! current_user_can( 'activate_plugin', $plugin ) ) {
			wp_send_json_error( [ 'message' => __( 'Sorry, you are not allowed to activate this add-on.', 'wp-loyalty-rules' ) ] );
		}

		if ( is_multisite() && ! is_network_admin() && is_network_only_plugin( $plugin ) ) {
			wp_send_json_error( [ 'message' => __( 'Sorry, you are not allowed to activate this add-on.', 'wp-loyalty-rules' ) ] );
		}
		$result = activate_plugin( $plugin, '', is_network_admin() );
		if ( is_wp_error( $result ) ) {
			wp_send_json_error( [ 'message' => __( 'App activation failed', 'wp-loyalty-rules' ) ] );
		}

		if ( ! is_network_admin() ) {
			$recent = (array) get_option( 'recently_activated' );
			unset( $recent[ $plugin ] );
			update_option( 'recently_activated', $recent );
		} else {
			$recent = (array) get_site_option( 'recently_activated' );
			unset( $recent[ $plugin ] );
			update_site_option( 'recently_activated', $recent );
		}
		wp_send_json_success( [ 'message' => __( 'App activated successfully', 'wp-loyalty-rules' ) ] );
	}

	/**
	 * Deactivates an app.
	 *
	 * @return void
	 */
	public static function deActivateApp() {
		if ( ! Util::isBasicSecurityValid( 'wlr_apps_nonce' ) ) {
			wp_send_json_error( [ 'message' => __( 'Basic validation failed', 'wp-loyalty-rules' ) ] );
		}
		$input  = new Input();
		$plugin = (string) $input->post_get( 'plugin', '' );
		if ( $plugin == 'wlr_app_launcher' ) {
			update_option( 'wlr_launcher_active', 'no' );
			wp_send_json_success( [ 'message' => __( 'App deactivated successfully', 'wp-loyalty-rules' ) ] );
		}
		if ( $plugin == 'wlr_app_point_expire' ) {
			update_option( 'wlr_expire_point_active', 'no' );
			wp_send_json_success( [ 'message' => __( 'App deactivated successfully', 'wp-loyalty-rules' ) ] );
		}
		if ( ! current_user_can( 'deactivate_plugin', $plugin ) ) {
			wp_send_json_error( [ 'message' => __( 'Sorry, you are not allowed to deactivate this add-on.', 'wp-loyalty-rules' ) ] );
		}

		if ( ! is_network_admin() && is_plugin_active_for_network( $plugin ) ) {
			wp_send_json_error( [ 'message' => __( 'Sorry, you are not allowed to deactivate this add-on.', 'wp-loyalty-rules' ) ] );
		}

		deactivate_plugins( $plugin, false, is_network_admin() );

		if ( ! is_network_admin() ) {
			update_option( 'recently_activated', [ $plugin => time() ] + (array) get_option( 'recently_activated' ) );
		} else {
			update_site_option( 'recently_activated', [ $plugin => time() ] + (array) get_site_option( 'recently_activated' ) );
		}
		wp_send_json_success( [ 'message' => __( 'App deactivated successfully', 'wp-loyalty-rules' ) ] );
	}
}