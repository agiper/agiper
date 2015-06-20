FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://repo.percona.com/apt trusty main" && \
	apt-key adv --keyserver keys.gnupg.net --recv-keys 1C4CBDCDCD2EFD2A && \
	apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	add-apt-repository "deb http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.0/ubuntu trusty main" && \
	apt-get update && \
	apt-get install mariadb-server percona-xtrabackup -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

EXPOSE 3306
