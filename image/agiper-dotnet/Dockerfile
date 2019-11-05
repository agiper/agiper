FROM agiper/base

ENV DOTNET_RUNTIME_VERSION=3.0

WORKDIR /var/lib/dotnet

RUN wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  apt-get update && \
  apt-get install -y dotnet-runtime-${DOTNET_RUNTIME_VERSION} aspnetcore-runtime-${DOTNET_RUNTIME_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# 3.1.0-preview2 (remove this when 3.1.0 RTM is released)
RUN curl https://download.visualstudio.microsoft.com/download/pr/19c96f8a-ffd4-4ccb-8782-593a554a9e27/76af54284b02822f3a51dcb00ce047ef/dotnet-runtime-3.1.0-preview2.19525.6-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
  curl https://download.visualstudio.microsoft.com/download/pr/476a6956-9b31-43f6-bc06-e43e090c1d29/2ffe100cd8c6f4a8793745fbd0fdeb20/aspnetcore-runtime-3.1.0-preview2.19528.8-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet
  
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
