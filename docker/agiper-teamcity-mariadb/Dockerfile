FROM quay.io/agiper/teamcity
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	add-apt-repository "deb http://ftp.osuosl.org/pub/mariadb/repo/10.0/ubuntu trusty main" && \
	apt-get update && \
	export TERM=dumb && \
	apt-get install mariadb-server -y && \
	export TERM=xterm && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
	
ADD backup /
ADD my.cnf /etc/mysql/
ADD supervisord.conf /etc/supervisor/conf.d/

RUN /backup && rm /backup
RUN sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf

EXPOSE 3306

CMD /usr/bin/supervisord
