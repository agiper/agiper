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

# 3.0.0-preview1 (remove this when 3.1.0 RTM is released)
RUN curl https://download.visualstudio.microsoft.com/download/pr/2ceb8e42-f900-4500-9de0-9b159ed81b26/c1bc099d2bd35c76bf38e694df4a9226/dotnet-runtime-3.1.0-preview1.19506.1-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
  curl https://download.visualstudio.microsoft.com/download/pr/66d6edaf-6183-4ecb-a536-7483b92b6047/6e7f38d9c03a4b786040db7b23a8fed4/aspnetcore-runtime-3.1.0-preview1.19508.20-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet
  
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
