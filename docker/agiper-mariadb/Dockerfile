FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	add-apt-repository "deb http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.0/ubuntu trusty main" && \
	apt-get update && \
	apt-get install mariadb-server -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

EXPOSE 3306