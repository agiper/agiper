FROM quay.io/agiper/teamcity
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.1/ubuntu trusty main" && \
	apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	apt-get update && \
	export TERM=dumb && \
	apt-get install mariadb-server -y && \
	export TERM=xterm && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
ADD backup /
RUN /backup && rm /backup
ADD my.cnf /etc/mysql/
RUN sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf
ADD supervisord.conf /etc/supervisor/conf.d/

EXPOSE 3306

CMD /usr/bin/supervisord
