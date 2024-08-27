FROM ethereum/client-go:v1.10.26

COPY --from=node:16-alpine /usr/local/bin /usr/local/bin
COPY --from=node:16-alpine /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN apk upgrade --no-cache && \
    apk add --no-cache git zsh openssl libgcc libstdc++ ncurses-libs

WORKDIR /var/www

COPY ./frontend/ .

RUN mkdir node1 node2 && npm install

COPY ./genesis.json node1/
COPY ./genesis.json node2/

RUN geth init --datadir /var/www/node1 /var/www/node1/genesis.json && geth init --datadir /var/www/node2 /var/www/node2/genesis.json

ENTRYPOINT npm start
