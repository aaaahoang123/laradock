if [ -z "$1" ]
	then docker-compose up nginx mariadb workspace phpmyadmin redis php-fpm mssql elasticsearch zeebe operate php-worker adminer
	else docker-compose up -$1 nginx mariadb workspace phpmyadmin redis php-fpm mssql elasticsearch zeebe operate php-worker adminer
fi
