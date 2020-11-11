FROM phusion/baseimage:bionic-1.0.0

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
	apt install curl wget htop nano telnet iputils-ping -y --no-install-recommends && \
	apt autoremove -y && \
	apt  && \
	/usr/sbin/enable_insecure_key && \
	mv /sbin/my_init /entrypoint.sh && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

ENTRYPOINT ["/entrypoint.sh", "--"]
