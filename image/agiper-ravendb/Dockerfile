#FROM agiper/dotnet
FROM ravendb/ravendb:4.1.3-ubuntu.18.04-x64

ENV RAVENDB_VERSION=4.1.3

RUN apt-get update && \
	apt-get install -y jq curl && \ #remove curl when switching to agiper/dotnet
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/ravendb && \
	curl -L https://daily-builds.s3.amazonaws.com/RavenDB-${RAVENDB_VERSION}-linux-x64.tar.bz2 | tar -xjC /opt/ravendb --strip-components=1

ENV RAVEN_IN_DOCKER=true
ENV RAVEN_Setup_Mode=None

COPY start /etc/my_init.d/
