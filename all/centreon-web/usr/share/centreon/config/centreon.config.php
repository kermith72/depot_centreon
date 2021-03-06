<?php
/*
 * Global include for all files
 */

// Define constants
$constants = array(
    '_CENTREON_PATH_' => realpath(__DIR__ . '/..') . '/',
    '_CENTREON_ETC_' => '/etc/centreon',
    '_CENTREON_LOG_' => '/var/log/centreon',
    '_CENTREON_CACHEDIR_' => '/var/cache/centreon',
    '_CENTREON_VARLIB_' => '/var/lib/centreon'
);

foreach ($constants as $name => $value) {
    if (!defined($name)) {
        define($name, $value);
    }
}

if (file_exists(_CENTREON_ETC_ . '/centreon.conf.php')) {
    require _CENTREON_ETC_ . '/centreon.conf.php';

    if (!defined('hostCentreon')) {
        define('hostCentreon', $conf_centreon['hostCentreon']);
    }

    if (!defined('hostCentstorage')) {
        define('hostCentstorage', $conf_centreon['hostCentstorage']);
    }

    if (!defined('user')) {
        define('user', $conf_centreon['user']);
    }

    if (!defined('password')) {
        define('password', $conf_centreon['password']);
    }

    if (!defined('db')) {
        define('db', $conf_centreon['db']);
    }

    if (!defined('dbcstg')) {
        define('dbcstg', $conf_centreon['dbcstg']);
    }

    if (!defined('port')) {
        define('port', $conf_centreon['port']);
    }
}

$classdir = _CENTREON_PATH_ . '/www/class';

if (!isset($centreon_path) || !$centreon_path) {
    $centreon_path = _CENTREON_PATH_;
}
