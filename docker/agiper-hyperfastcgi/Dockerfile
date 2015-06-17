FROM quay.io/agiper/mono
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install gcc make automake autoconf libtool libglib2.0-dev libevent-dev -y && \
	cd /tmp && \
	git clone http://github.com/xplicit/HyperFastCgi.git && \
	cd HyperFastCgi &&\
	./autogen.sh --prefix=/usr && \
	make && \
	make install && \
	apt-get purge gcc make automake autoconf libtool libglib2.0-dev libevent-dev -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*