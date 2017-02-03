FROM phusion/baseimage
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install -y --no-install-recommends \
		git \
		wget\
		nano \
		htop \
		curl \
		nmap \
		haveged \
		supervisor \
		iputils-ping \
		software-properties-common && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
