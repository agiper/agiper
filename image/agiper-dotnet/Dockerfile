FROM agiper/base

WORKDIR /var/lib/dotnet

RUN add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" && \
	apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893 && \
	apt-get update && \
	apt-get install jq dotnet-dev-1.0.0-rc4-004771 -y --no-install-recommends && \
	dotnet run || true && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*