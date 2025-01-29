<?php

/**
* The base configuration for WordPress
*
* The wp-config.php creation script uses this file during the installation.
* You don't have to use the web site, you can copy this file to "wp-config.php"
* and fill in the values.
*
* This file contains the following configurations:
*
* * Database settings
* * Secret keys
* * Database table prefix
* * ABSPATH
*
* @link https://wordpress.org/support/article/editing-wp-config-php/
*
* @package WordPress
*/

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
* Authentication unique keys and salts.
*
* Change these to different unique phrases! You can generate these using
* the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
*
* You can change these at any point in time to invalidate all existing cookies.
* This will force all users to have to log in again.
*
* @since 2.6.0
*/
define('AUTH_KEY',         '#X3]fKdWW>+YLGg@|Hv-{A1);3JAK~?bkIpkO]oUkNjiG6n<.|r/:H#2=A,z!tO=');
define('SECURE_AUTH_KEY',  'gfEd SQ8pLoF71S6@$qTLt4cibYh=u(0E0V>|!M(#}eIkX>H-L/Ai}z{av;ex8 V');
define('LOGGED_IN_KEY',    'ub3^uIOoh_Yw^T2oA#co#JU@_d}yi`L*h3E+^G!Fj|||BMqQ#Z;{P&M)t|Hzeg7A');
define('NONCE_KEY',        'p*)|!OR^5^6:%LU9+;WFeW(pm;DD;vd7-ATL~3(LuC4*$URPCq&U2 8$10oqz5+N');
define('AUTH_SALT',        'Qo.j4BJ&wKGskf4}|`6bv(jFC<yL+^36S:*dSvDZLHDE1eB<]SP[|A:;HdmEvMB<');
define('SECURE_AUTH_SALT', 'bN!+Q0%QUHvF-l1sPc;YK.YK~]V_v`!Q;N6~V=al|}O*b1/ZVm8(N$,r|**{.Xm(');
define('LOGGED_IN_SALT',   '+Dsfq]g.FpCU_ 2WpoWAP[gug(|1J1twlkf81:[9=58o2.ZVi$}YVdM-!+VYcQ)f');
define('NONCE_SALT',       '1B`A9Ze%-|P]5rFt=+;zYg*6k]bbUbjQYU0|6FZrw)t ;eV`Bs65F;Rt>pINzm?<');

/**#@-*/

/**
* WordPress database table prefix.
*
* You can have multiple installations in one database if you give each
* a unique prefix. Only numbers, letters, and underscores please!
*/
define( 'DISALLOW_FILE_EDIT', true ); // Added by Defender
$table_prefix = 'wpqs_';

/**
* For developers: WordPress debugging mode.
*
* Change this to true to enable the display of notices during development.
* It is strongly recommended that plugin and theme developers use WP_DEBUG
* in their development environments.
*
* For information on other constants that can be used for debugging,
* visit the documentation.
*
* @link https://wordpress.org/support/article/debugging-in-wordpress/
*/
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */

define('WP_MEMORY_LIMIT', '512M');


define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
