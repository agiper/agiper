FROM agiper/base

ENV DOTNET_VERSION=3.0

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  apt-get update && \
  apt-get install -y dotnet-runtime-${DOTNET_VERSION} aspnetcore-runtime-${DOTNET_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
