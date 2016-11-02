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

RUN echo "vm.overcommit_memory = 1" >> /etc/sysctl.conf && \
	echo "net.core.somaxconn = 65535" >> /etc/sysctl.conf && \
	echo "echo never > /sys/kernel/mm/transparent_hugepage/enabled" >> /etc/rc.local

ADD redis.conf /etc/redis/
ADD sentinel.conf /etc/redis/
ADD supervisord.conf /etc/supervisor/

CMD /usr/bin/supervisord

EXPOSE 6379	
