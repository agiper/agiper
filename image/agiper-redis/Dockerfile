FROM redis:6.0-rc-alpine

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

CMD ["redis-server", "/etc/redis/redis.conf"]
