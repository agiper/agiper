FROM phusion/baseimage
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install software-properties-common git wget nano htop curl nmap haveged supervisor -y --no-install-recommends && \
	cd /usr/local/bin && \
	curl -L https://github.com/kelseyhightower/confd/releases/download/v0.11.0/confd-0.11.0-linux-amd64 -o confd && \
	chmod +x confd && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV TERM xterm	

CMD ["/sbin/my_init"]
