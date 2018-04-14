FROM agiper/base

ENV DOTNET_VERSION=2.1.300-preview2-008530

WORKDIR /var/lib/dotnet

RUN curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > microsoft.gpg && \
	mv microsoft.gpg /etc/apt/trusted.gpg.d/microsoft.gpg && \
	add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" && \
	apt-get update && \
	apt-get install jq dotnet-sdk-${DOTNET_VERSION} -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
