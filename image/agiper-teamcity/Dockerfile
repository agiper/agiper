FROM agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

ENV DOTNET_SDK_VERSION=3.1
ENV TEAMCITY_VERSION=2019.2.2
ENV DOTNET_SDK_MINOR_VERSION=3.1.200-1

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
  wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
  wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb && \
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" && \
  apt-get update && \
  apt-get install -y docker-ce adoptopenjdk-11-hotspot dotnet-sdk-${DOTNET_SDK_VERSION}=${DOTNET_SDK_MINOR_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm /packages-microsoft-prod.deb && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

RUN curl https://download.visualstudio.microsoft.com/download/pr/c3d1886b-6846-4328-9692-a0adcdf30959/f0bd5e15b1825fc8f5b0a8166008e08a/dotnet-sdk-5.0.100-preview.1.20155.7-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

RUN mkdir -p /opt/teamcity && \
 wget -qO- https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

COPY start /etc/my_init.d/

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom
