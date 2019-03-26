FROM agiper/base

ENV DOTNET_RUNTIME_VERSION=2.2
ENV DOTNET_RUNTIME_MINOR_VERSION=2.2.3-1

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get update && \
	apt-get install -y dotnet-runtime-${DOTNET_RUNTIME_VERSION}=${DOTNET_RUNTIME_MINOR_VERSION} && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
