FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install nodejs npm -y --no-install-recommends && \
	apt-get update && \
	apt-get install tcl build-essential -y --no-install-recommends && \
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
COPY supervisord.conf /etc/supervisor/

EXPOSE 6379

CMD /usr/bin/supervisord
