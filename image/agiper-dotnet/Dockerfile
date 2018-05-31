FROM agiper/base

ENV DOTNET_VERSION=2.1.0

WORKDIR /var/lib/dotnet

RUN wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.asc.gpg && \
	mv microsoft.asc.gpg /etc/apt/trusted.gpg.d/ && \
	wget -q https://packages.microsoft.com/config/ubuntu/16.04/prod.list && \
	mv prod.list /etc/apt/sources.list.d/microsoft-prod.list &&\
	apt-get update && \
	apt-get install dotnet-hosting-${DOTNET_VERSION} -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
