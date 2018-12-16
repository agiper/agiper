FROM agiper/dotnet

ENV RAVENDB_VERSION=4.1.3

RUN mkdir -p /opt/ravendb && \
	curl -L https://daily-builds.s3.amazonaws.com/RavenDB-${RAVENDB_VERSION}-linux-x64.tar.bz2 | tar -xjC /opt/RavenDB --strip-components=1

ENV RAVEN_IN_DOCKER=true
ENV RAVEN_Setup_Mode=None
ENV RAVEN_DataDir=RavenData
ENV RAVEN_ServerUrl_Tcp=38888
ENV RAVEN_AUTO_INSTALL_CA=true

WORKDIR /opt/RavenDB/Server

COPY settings.json /opt/RavenDB/Server

CMD ["dotnet", "Raven.Server.dll"]
