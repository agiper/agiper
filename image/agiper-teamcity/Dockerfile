FROM agiper/base

RUN apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893 && \
	apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D && \
	add-apt-repository ppa:webupd8team/java && \
	apt-add-repository 'deb https://apt.dockerproject.org/repo ubuntu-xenial main' && \
	add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" && \
	apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
	apt-get install -y --no-install-recommends \
		nodejs \
		docker-engine \
		oracle-java8-installer \
		dotnet-dev-1.0.0-rc3-004530 && \
	npm install -g bower && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-10.0.4.tar.gz | tar -xzC /opt && \
	mv /opt/TeamCity /opt/teamcity && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
	echo "networkaddress.cache.ttl=60" >> /usr/lib/jvm/java-8-oracle/jre/lib/security/java.security && \
	apt-get clean && \
	rm -rf /var/cache/oracle-jdk8-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY run /etc/my_init.d/

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle
ENV TEAMCITY_DATA_PATH /var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

EXPOSE 8111
