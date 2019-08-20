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

# 3.0.0-preview8-28405-07 (remove this when 3.0.0 RTM is released)
RUN curl https://download.visualstudio.microsoft.com/download/pr/3873ce54-438c-43bd-871b-0472e4d5462b/01353d2e8c4289bb344d935c4bf4de3e/dotnet-runtime-3.0.0-preview8-28405-07-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet && \
  curl https://download.visualstudio.microsoft.com/download/pr/0bff102b-7983-4947-be67-be740e168ec1/d4b2a3818f2849501710b6ee16a1e2be/aspnetcore-runtime-3.0.0-preview8.19405.7-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet
  
ENV NUGET_XMLDOC_MODE=skip
ENV DOTNET_HOME=/usr/share/dotnet
