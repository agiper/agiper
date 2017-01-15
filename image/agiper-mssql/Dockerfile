FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
	curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server.list > /etc/apt/sources.list.d/mssql-server.list && \
	apt-get update && \
	apt-get install mssql-server -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

#RUN /opt/mssql/bin/sqlservr-setup

EXPOSE 1433

CMD /usr/bin/supervisord
