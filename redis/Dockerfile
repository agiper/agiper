FROM redis:6.2.4-alpine

RUN mkdir -p /var/lib/redis && \
        chown redis:redis /var/lib/redis

VOLUME /var/lib/redis
WORKDIR /var/lib/redis

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

CMD ["redis-server", "/etc/redis/redis.conf"]
