FROM agiper/base

RUN apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y --no-install-recommends \
		tcl \
		build-essential && \
	cd /tmp && \
	wget http://download.redis.io/releases/redis-4.0.8.tar.gz && \
	tar xvzf redis-4.0.8.tar.gz && \
	cd redis && \
	make && \
	make install && \
	apt-get purge tcl build-essential -y && \
	apt-get autoremove -y && \
	apt-get clean && \
	mkdir -p /var/lib/redis && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

EXPOSE 6379

CMD ["redis-server", "/etc/redis/redis.conf"]
