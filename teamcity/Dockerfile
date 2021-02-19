FROM phusion/baseimage:master-arm64

ENV DOTNET_SDK_VERSION=5.0
ENV TEAMCITY_VERSION=2020.2.2
ENV DEBIAN_FRONTEND=noninteractive

RUN apt update && \
  apt install wget && \
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
  wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
  wget -q https://packages.microsoft.com/config/ubuntu/16.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb && \
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" && \
  apt update && \
  apt upgrade -y && \
  apt install -y docker-ce \
                 pkg-config \
                 python3-pip \
                 libleveldb1d \
                 libleveldb-dev \
                 libsecp256k1-dev \
                 adoptopenjdk-11-hotspot \
                 dotnet-sdk-${DOTNET_SDK_VERSION} && \
  apt autoremove -y && \
  apt clean && \
  rm /packages-microsoft-prod.deb && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

RUN mkdir -p /opt/teamcity && \
  wget -qO- https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
  curl https://download.visualstudio.microsoft.com/download/pr/579aac9e-53dd-404e-9452-9910bc9be422/1c47683215dd54a3837fc4b338ddb6a6/dotnet-sdk-6.0.100-preview.1.21103.13-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY 20_teamcity_start_all.sh /etc/my_init.d/
