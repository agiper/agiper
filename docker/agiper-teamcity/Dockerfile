FROM quay.io/agiper/dotnet
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
	add-apt-repository ppa:webupd8team/java && \
	apt-get update && \
	apt-get install npm oracle-java8-installer -y && \
	npm install -g bower && \
	ln -s /usr/bin/nodejs /usr/bin/node && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-10.0.2.tar.gz | tar -xzC /opt && \
	mv /opt/TeamCity /opt/teamcity && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/cache/oracle-jdk8-installer /var/tmp/* /tmp/*

ADD supervisord.conf /etc/supervisor/conf.d/

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111

CMD /usr/bin/supervisord
