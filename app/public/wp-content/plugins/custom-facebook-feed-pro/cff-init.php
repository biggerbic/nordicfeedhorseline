<?php

use CustomFacebookFeed\CFF_Display_Elements_Pro;
use CustomFacebookFeed\CFF_GDPR_Integrations;
use CustomFacebookFeed\CFF_Autolink;
use CustomFacebookFeed\CFF_Utils;
use CustomFacebookFeed\CFF_FB_Settings;
use CustomFacebookFeed\SB_Facebook_Data_Manager;

function cff_stripos_arr($haystack, $needle)
{
	if (!is_array($needle)) {
		$needle = array($needle);
	}
	foreach ($needle as $what) {
		if (($pos = stripos($haystack, ltrim($what))) !== false) {
			return $pos;
		}
	}
	return false;
}

// Include admin
include_once dirname(__FILE__) . '/custom-facebook-feed-admin.php';
include_once ABSPATH . 'wp-admin/includes/plugin.php' ;
if (is_plugin_active('social-wall/social-wall.php')) {
	include_once 'admin/sw-function.php';
}
function cff_to_slug($string)
{
	return strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $string)));
}
// ***********************************//
// *********CACHING FUNCTION**********//
// ***********************************//
function cff_do_query()
{
	if (isset($_POST['post_id'])) {
		global $wpdb;
		include_once trailingslashit(CFF_PLUGIN_DIR) . 'query.php';
	}
	die();
}
add_action('wp_ajax_cff_query', 'cff_do_query');
add_action('wp_ajax_nopriv_cff_query', 'cff_do_query');

function cff_do_comments()
{
	if (isset($_POST['id'])) {
		global $wpdb;
		include_once trailingslashit(CFF_PLUGIN_DIR) . 'comments.php';
	}
	die();
}
add_action('wp_ajax_cff_comments', 'cff_do_comments');
add_action('wp_ajax_nopriv_cff_comments', 'cff_do_comments');

function cff_do_thumbs()
{
	if (isset($_POST['id'])) {
		global $wpdb;
		include_once trailingslashit(CFF_PLUGIN_DIR) . 'thumbs.php';
	}
	die();
}
add_action('wp_ajax_cff_thumbs', 'cff_do_thumbs');
add_action('wp_ajax_nopriv_cff_thumbs', 'cff_do_thumbs');



// Allows shortcodes in theme
add_filter('widget_text', 'do_shortcode');

add_action('init', 'cff_group_photos_notice_dismiss');
function cff_group_photos_notice_dismiss()
{
	global $current_user;

	$cap = current_user_can('manage_custom_facebook_feed_options') ? 'manage_custom_facebook_feed_options' : 'manage_options';
	$cap = apply_filters('cff_settings_pages_capability', $cap);
	if (!current_user_can($cap)) {
		return;
	}
		$user_id = $current_user->ID;
	if (isset($_GET['cff_group_photos_notice_dismiss']) && '0' == $_GET['cff_group_photos_notice_dismiss']) {
		 add_user_meta($user_id, 'cff_group_photos_notice_dismiss', 'true', true);
	}
}

add_action('init', 'cff_ppca_check_notice_dismiss');
function cff_ppca_check_notice_dismiss()
{
	global $current_user;
	$cap = current_user_can('manage_custom_facebook_feed_options') ? 'manage_custom_facebook_feed_options' : 'manage_options';
	$cap = apply_filters('cff_settings_pages_capability', $cap);
	if (!current_user_can($cap)) {
		return;
	}

	$user_id = $current_user->ID;
	if (isset($_GET['cff_ppca_check_notice_dismiss']) && '0' == $_GET['cff_ppca_check_notice_dismiss']) {
		 add_user_meta($user_id, 'cff_ppca_check_notice_dismiss', 'true', true);
	}
}



// Remove masonry extension
remove_filter('shortcode_atts_custom_facebook_feed', 'cff_masonry_filter_custom_facebook_feed_shortcode', 10);
remove_filter('cff_feed_class', 'cff_masonry_add_class', 10);



function cff_doing_openssl()
{
	return extension_loaded('openssl');
}

function cff_delete_all_platform_data()
{
	$manager = new SB_Facebook_Data_Manager();
	$manager->delete_caches();
	\cff_main_pro()->cff_error_reporter->add_action_log('Deleted all platform data.');
	\cff_main_pro()->cff_error_reporter->reset_api_errors();
}
