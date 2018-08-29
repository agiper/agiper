FROM agiper/java

ENV TEAMCITY_VERSION=2018.1.1
ENV DOTNET_SDK_VERSION=2.1
ENV DOTNET_SDK_MINOR_VERSION=2.1.401-1

RUN apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D && \
	apt-add-repository "deb https://apt.dockerproject.org/repo ubuntu-xenial main" && \
	wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get clean && \
	apt-get update && \
	apt-get install -y --no-install-recommends \
		docker-engine \
		dotnet-sdk-${DOTNET_SDK_VERSION}=${DOTNET_SDK_MINOR_VERSION} && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/teamcity && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY start /etc/my_init.d/
