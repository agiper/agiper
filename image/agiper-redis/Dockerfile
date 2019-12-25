FROM redis:6.0-rc-alpine
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN mkdir -p /var/lib/redis

COPY redis.conf /var/lib/redis/
COPY sentinel.conf /var/lib/redis/

CMD ["redis-server", "/var/lib/redis/redis.conf"]
