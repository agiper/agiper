FROM agiper/base

ENV JAVA_SDK_VERSION=8
ENV DOTNET_SDK_VERSION=3.0
ENV TEAMCITY_VERSION=2019.1.4

RUN curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add - && \
  add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu xenial stable" && \
  wget -q https://packages.microsoft.com/config/ubuntu/18.04/packages-microsoft-prod.deb && \
  dpkg -i packages-microsoft-prod.deb && \
  apt-get update && \
  apt-get install -y docker-ce \
    dotnet-sdk-2.2 \
    openjdk-${JAVA_SDK_VERSION}-jdk \
    dotnet-sdk-${DOTNET_SDK_VERSION} && \
  apt-get autoremove -y && \
  apt-get clean && \
  rm /packages-microsoft-prod.deb && \
  rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# 3.1.100-preview1-014459 (remove this when 3.1 RTM is released)	
RUN curl https://download.visualstudio.microsoft.com/download/pr/a3cc3d8a-226d-4306-a61b-a5446fdb72ef/604e029047aec0229545e8c397a14ddb/dotnet-sdk-3.1.100-preview1-014459-linux-x64.tar.gz | tar -xz -C /usr/share/dotnet

RUN mkdir -p /opt/teamcity && \
  curl -L https://download.jetbrains.com/teamcity/TeamCity-${TEAMCITY_VERSION}.tar.gz | tar -xzC /opt/teamcity --strip-components=1 && \
  sed -i -e 's/Default/Local/g' /opt/teamcity/buildAgent/conf/buildAgent.properties

COPY start /etc/my_init.d/

ENV DOTNET_HOME=/usr/share/dotnet
ENV TEAMCITY_DATA_PATH=/var/lib/teamcity
ENV TEAMCITY_SERVER_OPTS=-Djava.security.egd=file:/dev/./urandom
ENV JAVA_HOME=/usr/lib/jvm/java-${JAVA_SDK_VERSION}-openjdk-amd64/bin
