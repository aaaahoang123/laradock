FROM ethereum/client-go:v1.10.26

COPY --from=node:16-alpine /usr/local/bin /usr/local/bin
COPY --from=node:16-alpine /usr/local/lib/node_modules /usr/local/lib/node_modules

RUN apk upgrade --no-cache && \
    apk add --no-cache postgresql-client git bash openssl libgcc libstdc++ ncurses-libs

WORKDIR /var/www

COPY ./frontend/ .

RUN npm install

ENTRYPOINT npm start
