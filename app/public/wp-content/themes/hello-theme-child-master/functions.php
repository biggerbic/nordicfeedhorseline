<?php
/**
 * Theme functions and definitions
 *
 * @package HelloElementorChild
 */

/**
 * Load child theme css and optional scripts
 *
 * @return void
 */
function hello_elementor_child_enqueue_scripts() {
	wp_enqueue_style(
		'hello-elementor-child-style',
		get_stylesheet_directory_uri() . '/style.css',
		[
			'hello-elementor-theme-style',
		],
		'1.0.0'
	);
}
add_action( 'wp_enqueue_scripts', 'hello_elementor_child_enqueue_scripts', 20 );


// Hide with css
add_action( 'wp_enqueue_scripts', 'wholesale_customer_logo' );
function wholesale_customer_logo(){
	if( in_array( 'shop_manager', (array) wp_get_current_user()->roles ) ){
		echo '<style>
			#wp-admin-bar-customize, #wp-admin-bar-edit, #wp-admin-bar-elementor_edit_page, #wp-admin-bar-search {
				display: none;
			}
		</style>';
	}
}
/**
 * Hide shipping rates when free shipping is available, but keep "Local pickup" 
 * Updated to support WooCommerce 2.6 Shipping Zones
 */

function hide_shipping_when_free_is_available( $rates, $package ) {
	$new_rates = array();
	foreach ( $rates as $rate_id => $rate ) {
		// Only modify rates if free_shipping is present.
		if ( 'free_shipping' === $rate->method_id ) {
			$new_rates[ $rate_id ] = $rate;
			break;
		}
	}

	if ( ! empty( $new_rates ) ) {
		//Save local pickup if it's present.
		foreach ( $rates as $rate_id => $rate ) {
			if ('local_pickup' === $rate->method_id ) {
				$new_rates[ $rate_id ] = $rate;
				break;
			}
		}
		return $new_rates;
	}

	return $rates;
}

add_filter( 'woocommerce_package_rates', 'hide_shipping_when_free_is_available', 10, 2 );

/* Disable Back to WordPress Editor button */
add_action('admin_head', 'remove_editor_button'); // admin_head is a hook my_custom_fonts is a function we are adding it to the hook
 
function remove_editor_button() {
  echo '<style>
	#elementor-switch-mode .elementor-switch-mode-on{
		display: none;    
	}
	body.elementor-editor-active #elementor-switch-mode-button{
	visibility: hidden;
	}
	body.elementor-editor-active #elementor-switch-mode-button:hover{
	visibility: hidden;
	}
  </style>';
}

// Change placeholder text for title
function wibergmedia_change_title_text( $title ){
	 $screen = get_current_screen();
   
	 if  ( 'kundrecensioner' == $screen->post_type ) {
		  $title = 'Titel för kundrecensionen';
	 } elseif ( 'salonger' == $screen->post_type ) {
		  $title = 'Salongens namn';
	 } elseif ( 'hub-spaces' == $screen->post_type ) {
		  $title = 'Företagets namn';
	 } elseif ( 'slider' == $screen->post_type ) {
		  $title = 'Ge slidern ett namn så man hittar den i listan';
	 }
   
   
	 return $title;
}
   
add_filter( 'enter_title_here', 'wibergmedia_change_title_text' );