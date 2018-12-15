FROM agiper/base

ENV RAVENDB_VERSION=4.1.3

RUN apt-get update && \
	apt-get install -y jq bzip2 && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/ravendb && \
	curl -L https://daily-builds.s3.amazonaws.com/RavenDB-4.1.3-linux-x64.tar.bz2 | tar -xzC /opt/ravendb --strip-components=1

ENV RAVEN_ARGS='' RAVEN_SETTINGS='' RAVEN_Setup_Mode='Initial' RAVEN_DataDir='RavenData' RAVEN_ServerUrl_Tcp='38888' RAVEN_AUTO_INSTALL_CA='true' RAVEN_IN_DOCKER='true'

COPY start /etc/my_init.d/
