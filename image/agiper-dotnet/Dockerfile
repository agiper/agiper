FROM agiper/base

ENV DOTNET_RUNTIME_VERSION=2.2
ENV DOTNET_RUNTIME_MINOR_VERSION=2.2.5-1

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
	dpkg -i packages-microsoft-prod.deb && \
	apt-get update && \
	apt-get install -y dotnet-runtime-${DOTNET_RUNTIME_VERSION}=${DOTNET_RUNTIME_MINOR_VERSION} && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# remove this when .NET Core 3.0 is released
RUN curl https://download.visualstudio.microsoft.com/download/pr/8ac39a59-0f01-4f2d-8a3b-41b7b6d01f21/e2db10c3498c7344aa6847721a8cb832/dotnet-runtime-3.0.0-preview7-27912-14-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
	curl https://download.visualstudio.microsoft.com/download/pr/02241c22-f7c1-4eb9-a599-02c3b27461f0/00725bf30e6deadc0facc9a1757d0eea/aspnetcore-runtime-3.0.0-preview7.19365.7-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet &
	
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
