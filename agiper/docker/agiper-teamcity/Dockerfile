FROM quay.io/agiper/mono-java
MAINTAINER To Nuen <tomnuen@agiper.com>

RUN curl http://download.jetbrains.com/teamcity/TeamCity-9.1.7.tar.gz | tar -xzC /opt && \
	mv /opt/TeamCity /opt/teamcity && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
	ln -s /usr/lib/mono/4.5/Microsoft.Build.Utilities.v4.0.dll /usr/lib/mono/4.5/Microsoft.Build.Utilities.dll

ADD supervisord.conf /etc/supervisor/conf.d/

ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111

CMD /usr/bin/supervisord
