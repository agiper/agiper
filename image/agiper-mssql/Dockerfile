 	FROM agiper/base

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
	curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server.list > /etc/apt/sources.list.d/mssql-server.list && \
	apt-get update && \
	apt-get install mssql-server -y --no-install-recommends && \
	sed -i -e 's/sudo -EH -u mssql //g' /opt/mssql/bin/sqlservr-setup && \
	/opt/mssql/bin/sqlservr-setup --accept-eula && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*	

EXPOSE 1433
