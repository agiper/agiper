FROM quay.io/agiper/mono-java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://sfo1.mirrors.digitalocean.com/mariadb/repo/10.1/ubuntu trusty main" && \
	apt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xcbcb082a1bb943db && \
	apt-get update && \
	export TERM=dumb && \
	apt-get install mariadb-server -y && \
	export TERM=xterm && \
	curl http://download-ln.jetbrains.com/teamcity/TeamCity-9.1.4.tar.gz | tar -xzC /opt && \
	sed -i -e 's/Default/Local/g' /opt/TeamCity/buildAgent/conf/buildAgent.properties

RUN rm -rf /usr/lib/mono/4.0 && \
	ln -s /usr/lib/mono/4.5 /usr/lib/mono/4.0

ADD backup /
RUN /backup && rm /backup
ADD my.cnf /etc/mysql/
ADD supervisord.conf /etc/supervisor/conf.d/

ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111

CMD /usr/bin/supervisord
