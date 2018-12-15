FROM agiper/base

ENV RAVENDB_VERSION=4.1.3

RUN apt-get update && \
	apt-get install -y jq && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/ravendb && \
#	curl -L https://github.com/ravendb/ravendb/archive/${RAVENDB_VERSION}.tar.gz | tar -xzC /opt/ravendb --strip-components=1
	curl -L https://hibernatingrhinos.com/downloads/RavenDB%20for%20Linux%20x64/41007 | tar -xzC /opt/ravendb --strip-components=1

ENV RAVEN_ARGS='' RAVEN_SETTINGS='' RAVEN_Setup_Mode='Initial' RAVEN_DataDir='RavenData' RAVEN_ServerUrl_Tcp='38888' RAVEN_AUTO_INSTALL_CA='true' RAVEN_IN_DOCKER='true'

COPY start /etc/my_init.d/
