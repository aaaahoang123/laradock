if [ -z "$1" ]
	then docker-compose up nginx mariadb workspace phpmyadmin redis php-fpm elasticsearch php-worker adminer
	else docker-compose up -$1 nginx mariadb workspace phpmyadmin redis php-fpm mssql elasticsearch php-worker adminer
fi
