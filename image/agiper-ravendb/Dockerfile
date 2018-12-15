FROM agiper/dotnet

ENV RAVENDB_VERSION=4.1.3

RUN apt-get update && \
	apt-get install -y jq && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN mkdir -p /opt/ravendb && \
	curl -L https://daily-builds.s3.amazonaws.com/RavenDB-${RAVENDB_VERSION}-linux-x64.tar.bz2 | tar -xjC /opt/ravendb --strip-components=1

ENV RAVEN_IN_DOCKER=true

WORKDIR /opt/ravendb/Server

COPY settings.json /opt/ravendb/Server

CMD ["dotnet", "Raven.Server.dll"]
