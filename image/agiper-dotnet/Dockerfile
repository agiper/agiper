FROM agiper/base

WORKDIR /var/lib/dotnet

ENV NUGET_XMLDOC_MODE skip

RUN add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" && \
	apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 417A0893 && \
	apt-get update && \
	apt-get install jq dotnet-dev-2.0.0-preview1-005977 -y --no-install-recommends && \
	dotnet run || true && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
