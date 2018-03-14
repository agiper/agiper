FROM agiper/java

ENV DOTNET_VERSION=2.1.4
ENV TEAMCITY_VERSION=2017.2.3

RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
	mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && \
	apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D && \
	apt-add-repository "deb https://apt.dockerproject.org/repo ubuntu-xenial main" && \
	add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" && \
	apt-get update && \
	curl -sL https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y --no-install-recommends \
		nodejs \
		docker-engine \
		dotnet-sdk-${DOTNET_VERSION} && \
	npm install -g bower && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/teamcity && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY start /etc/my_init.d/

EXPOSE 8111
