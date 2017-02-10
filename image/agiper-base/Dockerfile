FROM phusion/baseimage:0.9.19
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install -y --no-install-recommends \
		git \
		wget\
		nano \
		htop \
		curl \
		telnet \
		net-tools \
		iputils-ping &&\
	apt-get clean && \
	mv /sbin/my_init /start && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

CMD ["/start"]