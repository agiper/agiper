FROM phusion/baseimage:0.11
MAINTAINER Tom Nuen <tomnuen@agiper.com>

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
	apt-get install -y --no-install-recommends \
		wget \
		sudo \
		nano \
		curl \
		iputils-ping &&\
	apt-get autoremove -y && \
	apt-get clean && \
	/usr/sbin/enable_insecure_key && \
	mv /sbin/my_init /entrypoint.sh && \
	rm -rf /var/cache/ /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENTRYPOINT ["/entrypoint.sh", "--"]
