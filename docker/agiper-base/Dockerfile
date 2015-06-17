FROM phusion/baseimage
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN groupadd -g 500 core && \
	useradd -ms /bin/bash -u 500 -g 500 core
	
RUN apt-get update && \
	apt-get install software-properties-common git wget nano htop curl haveged supervisor -y && \
	cd /usr/local/bin && \
	curl -L https://github.com/kelseyhightower/confd/releases/download/v0.9.0/confd-0.9.0-linux-amd64 -o confd && \
	chmod +x confd && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*