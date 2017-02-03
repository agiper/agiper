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
		iputils-ping \
		software-properties-common && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mv /sbin/my_init /sbin/run

CMD ["/sbin/run"]