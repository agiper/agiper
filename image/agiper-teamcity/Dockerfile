FROM agiper/base

ENV DOTNET_SDK_VERSION=2.2
ENV TEAMCITY_VERSION=2019.1.1
ENV DOTNET_SDK_MINOR_VERSION=2.2.300-1

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
	add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" && \
	wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get update && \
	apt-get install -y \
		docker-ce \
		dotnet-sdk-${DOTNET_SDK_VERSION}=${DOTNET_SDK_MINOR_VERSION} && \
	curl https://download.visualstudio.microsoft.com/download/pr/c624c5d6-0e9c-4dd9-9506-6b197ef44dc8/ad61b332f3abcc7dec3a49434e4766e1/dotnet-sdk-3.0.100-preview7-012821-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm /packages-microsoft-prod.deb && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

RUN mkdir -p /opt/teamcity && \
	curl -L https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
	sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY start /etc/my_init.d/
