FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get install software-properties-common
	apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	add-apt-repository "deb [arch=amd64,i386,ppc64el] http://mirror.fibergrid.in/mariadbrepo/10.1/ubuntu trusty main" && \
	apt-get update && \
	export TERM=dumb && \
	apt-get install mariadb-server -y && \
	export TERM=xterm && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN sed -i 's/^\(bind-address\s.*\)/# \1/' /etc/mysql/my.cnf

ADD backup /
RUN chmod 755 backup && /backup && rm /backup
ADD supervisord.conf /etc/supervisor/

CMD /usr/bin/supervisord

EXPOSE 3306
