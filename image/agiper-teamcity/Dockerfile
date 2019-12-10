FROM agiper/base

ENV DOTNET_SDK_VERSION=3.1
ENV TEAMCITY_VERSION=2019.2
ENV DOTNET_SDK_MINOR_VERSION=3.1.100-1

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
  wget -qO - https://adoptopenjdk.jfrog.io/adoptopenjdk/api/gpg/key/public | apt-key add - && \
  wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  add-apt-repository --yes https://adoptopenjdk.jfrog.io/adoptopenjdk/deb && \
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" && \
  apt-get update && \
  apt-get install -y docker-ce adoptopenjdk-8-hotspot dotnet-sdk-${DOTNET_SDK_VERSION}=${DOTNET_SDK_MINOR_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm /packages-microsoft-prod.deb && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# RUN curl https://download.visualstudio.microsoft.com/download/pr/941853c3-98c6-44ff-b11f-3892e4f91814/14e8f22c7a1d95dd6fe9a53296d19073/dotnet-sdk-3.1.100-preview3-014645-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

RUN mkdir -p /opt/teamcity && \
 wget -qO- https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

COPY start /etc/my_init.d/

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom
