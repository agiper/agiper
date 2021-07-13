FROM phusion/baseimage:focal-1.0.0-amd64

ENV DOTNET_SDK_VERSION=5.0
ENV TEAMCITY_VERSION=2021.1.1
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
  apt install wget && \
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
  wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
  wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb && \
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable" && \
  apt update && \
  apt upgrade -y && \
  apt install -y docker-ce \
                 adoptopenjdk-11-hotspot \
                 dotnet-sdk-${DOTNET_SDK_VERSION} && \
  apt autoremove -y && \
  apt clean && \
  rm /packages-microsoft-prod.deb && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

RUN mkdir -p /opt/teamcity && \
  wget -qO- https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
  curl https://download.visualstudio.microsoft.com/download/pr/919880af-ab5a-4b58-8058-7baaea4a09d1/4fe186d747cf416cbdc83fd8354e15ea/dotnet-sdk-6.0.100-preview.5.21302.13-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY 20_teamcity_start_all.sh /etc/my_init.d/
