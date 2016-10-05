FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get install software-properties-common && \
	apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8 && \
	add-apt-repository "deb [arch=amd64,i386,ppc64el] http://mariadb.biz.net.id/repo/10.1/ubuntu xenial main" && \
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
