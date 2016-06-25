FROM quay.io/agiper/mono-java
MAINTAINER To Nuen <tomnuen@agiper.com>

RUN curl -LO http://download.jetbrains.com/teamcity/TeamCity-9.1.7.tar.gz && \
	tar xf TeamCity-9.1.7.tar.gz -C /opt && \
	mv /opt/TeamCity /opt/teamcity && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

ADD supervisord.conf /etc/supervisor/conf.d/

ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111

CMD /usr/bin/supervisord
