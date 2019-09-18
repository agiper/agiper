FROM agiper/base

ENV DOTNET_RUNTIME_VERSION=2.2
ENV DOTNET_RUNTIME_MINOR_VERSION=2.2.6-1

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  apt-get update && \
  apt-get install -y dotnet-runtime-${DOTNET_RUNTIME_VERSION}=${DOTNET_RUNTIME_MINOR_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# 3.0.0-rc1-014190 (remove this when 3.0.0 RTM is released)
RUN curl https://download.visualstudio.microsoft.com/download/pr/f31ff1f4-2d1f-4904-aaec-1e6da1e20390/9da05fe5c414307ef0bf95b1ae330924/dotnet-runtime-3.0.0-rc1-19456-20-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
  curl https://download.visualstudio.microsoft.com/download/pr/32664ecb-9181-4b09-8543-e85abae5805e/227658f498f42e5d278f1e41d8f2bcba/aspnetcore-runtime-3.0.0-rc1.19457.4-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet
  
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
