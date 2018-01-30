FROM phusion/baseimage:0.10.0
MAINTAINER Tom Nuen <tomnuen@agiper.com>

ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && \
	apt-get install -y --no-install-recommends \
		git \
		wget\
		sudo \
		nano \
		htop \
		curl \
		telnet \
		net-tools \
		iputils-ping &&\
	apt-get clean && \
	mv /sbin/my_init /entrypoint.sh && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENTRYPOINT ["/entrypoint.sh", "--"]
