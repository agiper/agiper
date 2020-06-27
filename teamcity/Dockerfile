FROM phusion/baseimage:focal-1.0.0alpha1-amd64

ENV DOTNET_SDK_VERSION=3.1
ENV TEAMCITY_VERSION=2020.1.1
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

RUN pip3 install tbears && \
  mkdir -p /opt/teamcity && \
  wget -qO- https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties && \
  curl https://download.visualstudio.microsoft.com/download/pr/ec4bba83-4586-4705-a6ae-c648861ca284/d9470c2f68161e3c2b8a0785fe7b3329/dotnet-sdk-5.0.100-preview.6.20318.15-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom

COPY 20_teamcity_start_all.sh /etc/my_init.d/
