FROM agiper/base

ENV REDIS_VERSION=5.0.5

RUN apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y \
		tcl \
		build-essential && \
	cd /tmp && \
	wget http://download.redis.io/releases/redis-${REDIS_VERSION}.tar.gz && \
	tar xvzf redis-${REDIS_VERSION}.tar.gz && \
	cd redis-${REDIS_VERSION} && \
	make && \
	make install && \
	apt-get purge tcl build-essential -y && \
	apt-get autoremove -y && \
	apt-get clean && \
	mkdir -p /var/lib/redis && \
	rm -rf /tmp/* /var/tmp/* /var/cache/ /var/lib/apt/lists/*

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

CMD ["redis-server", "/etc/redis/redis.conf"]
