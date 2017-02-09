FROM agiper/base

RUN add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ xenial main" && \
	apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893 && \
	apt-get update && \
	apt-get install dotnet-dev-1.0.0-rc4-004771 -y --no-install-recommends && \
	mkdir -p /var/lib/dotnet && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY run /etc/service/dotnet/

ENTRYPOINT ["/usr/bin/dotnet"]