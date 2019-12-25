FROM redis:6.0-rc-alpine
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN mkdir -p /var/lib/redis

COPY redis.conf /usr/local/etc/redis/
COPY sentinel.conf /usr/local/etc/redis/

CMD ["redis-server", "/usr/local/etc/redis/redis.conf"]
