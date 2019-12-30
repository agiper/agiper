FROM redis:6.0-rc-alpine
MAINTAINER Tom Nuen <tomnuen@agiper.com>

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

RUN mkdir -p /var/lib/redis && \
        chmod 755 /var/lib/redis

CMD ["redis-server", "/etc/redis/redis.conf"]
