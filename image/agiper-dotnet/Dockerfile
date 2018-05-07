FROM agiper/base

ENV DOTNET_VERSION=2.0.7

WORKDIR /var/lib/dotnet

RUN wget -q packages-microsoft-prod.deb https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get install apt-transport-https && \
	apt-get update && \
	apt-get install dotnet-runtime-${DOTNET_VERSION} -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
