FROM agiper/base

WORKDIR /var/lib/dotnet

ENV NUGET_XMLDOC_MODE skip

RUN add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/microsoft-ubuntu-xenial-prod xenial main" && \
	apt-get update && \
	apt-get install jq dotnet-sdk-2.0.0 -y --no-install-recommends && \
	dotnet run || true && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
