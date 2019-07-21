FROM agiper/base

ENV DOTNET_RUNTIME_VERSION=2.2
ENV DOTNET_RUNTIME_MINOR_VERSION=2.2.5-1

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get update && \
	apt-get install -y dotnet-runtime-${DOTNET_RUNTIME_VERSION}=${DOTNET_RUNTIME_MINOR_VERSION} && \
	wget -q https://download.visualstudio.microsoft.com/download/pr/fa0cd01b-c71c-40ed-bb78-1ff9acbfb8b2/e6510b76b6272bc7ce3f85e3a96ff9e1/dotnet-runtime-3.0.0-preview6-27804-01-linux-x64.tar.gz -O - | tar -xz -C /usr/share/dotnet && \
	wget -q https://download.visualstudio.microsoft.com/download/pr/ea4b23b0-d7dc-4d39-8de4-d4c89e1f9551/bfe628fcb8f19d4c97c75d1217af1a8b/aspnetcore-runtime-3.0.0-preview6.19307.2-linux-x64.tar.gz -O - | tar -xz -C /usr/share/dotnet && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
