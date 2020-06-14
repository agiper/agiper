FROM phusion/baseimage:focal-1.0.0-pre1

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
	apt-get install curl wget htop nano telnet iputils-ping -y --no-install-recommends && \
	apt-get autoremove -y && \
	apt-get clean && \
	/usr/sbin/enable_insecure_key && \
	mv /sbin/my_init /entrypoint.sh && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

ENTRYPOINT ["/entrypoint.sh", "--"]
