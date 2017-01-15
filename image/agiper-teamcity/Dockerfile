FROM agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" && \
	apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893 && \
	apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install nodejs dotnet-dev-1.0.0-preview4-004233 -y --no-install-recommends && \
	npm install -g bower && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-10.0.4.tar.gz | tar -xzC /opt && \
	mv /opt/TeamCity /opt/teamcity && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY supervisord.conf /etc/supervisor/conf.d/

ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111

CMD /usr/bin/supervisord
