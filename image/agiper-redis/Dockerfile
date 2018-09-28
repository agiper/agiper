FROM agiper/base

ENV REDIS_VERSION=5.0-rc5

RUN apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y --no-install-recommends \
		tcl \
		build-essential && \
	cd /tmp && \
	wget https://github.com/antirez/redis/archive/${REDIS_VERSION}.tar.gz && \
	tar xvzf ${REDIS_VERSION}.tar.gz && \
	cd redis-${REDIS_VERSION} && \
	make && \
	make install && \
	apt-get purge tcl build-essential -y && \
	apt-get autoremove -y && \
	apt-get clean && \
	mkdir -p /var/lib/redis && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

CMD ["redis-server", "/etc/redis/redis.conf"]
