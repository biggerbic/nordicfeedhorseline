<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit488eb597453343a2d90ad224fdc9c089
{
    public static $files = array (
        'd05ecc14ff93fd612a81ec7e8ab4c2c9' => __DIR__ . '/..' . '/yahnis-elsts/plugin-update-checker/load-v5p4.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'Wlac\\' => 5,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Wlac\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit488eb597453343a2d90ad224fdc9c089::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit488eb597453343a2d90ad224fdc9c089::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit488eb597453343a2d90ad224fdc9c089::$classMap;

        }, null, ClassLoader::class);
    }
}
