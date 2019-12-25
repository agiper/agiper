FROM redis:5.0.7
MAINTAINER Tom Nuen <tomnuen@agiper.com>

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

CMD ["redis-server", "/etc/redis/redis.conf"]
