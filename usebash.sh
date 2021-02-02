if [ -z "$1" ]
	then docker-compose exec --user=laradock workspace bash
	else docker-compose exec --user=laradock $1 bash
fi