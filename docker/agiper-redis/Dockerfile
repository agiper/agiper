FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install build-essential tcl -y && \
	wget http://download.redis.io/redis-stable.tar.gz && \
	tar xvzf redis-stable.tar.gz && \
	cd redis-stable && \
	make && \
	make install && \
	apt-get purge build-essential tcl -y && \
	apt-get autoremove -y && \
	apt-get clean && \
	mkdir /var/lib/redis && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY redis.conf /etc/redis/
COPY sentinel.conf /etc/redis/
COPY supervisord.conf /etc/supervisor/

EXPOSE 6379

CMD /usr/bin/supervisord
