FROM agiper/base

RUN apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install tcl nodejs build-essential -y --no-install-recommends && \
	cd /tmp && \
	wget http://download.redis.io/redis-stable.tar.gz && \
	tar xvzf redis-stable.tar.gz && \
	cd redis-stable && \
	make && \
	make install && \
	apt-get purge tcl build-essential -y && \
	apt-get autoremove -y && \
	apt-get clean && \
	mkdir /var/lib/redis && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/

EXPOSE 6379

ENTRYPOINT redis-server /etc/redis/redis.conf
