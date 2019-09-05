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

# 3.0.0-preview9-014004 (remove this when 3.0.0 RTM is released)
RUN curl https://download.visualstudio.microsoft.com/download/pr/daf57b64-36b6-405e-9e12-0a8627b46951/07c100dd9aed24440e9147daf79f2aa2/dotnet-runtime-3.0.0-preview9-19423-09-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
  curl https://download.visualstudio.microsoft.com/download/pr/d881776c-82d7-4d50-b13c-9a848da46001/d55ce79c2b3a61b303cb826b7c460d20/aspnetcore-runtime-3.0.0-preview9.19424.4-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet
  
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
