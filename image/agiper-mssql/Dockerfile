FROM agiper/base

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
	curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list | sudo tee /etc/apt/sources.list.d/msprod.list && \
	curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server.list > /etc/apt/sources.list.d/mssql-server.list && \
	apt-get update && \
	apt-get install -y --no-install-recommends \
		mssql-tools \
		mssql-server && \
	sed -i -e 's/sudo -EH -u mssql //g' /opt/mssql/bin/sqlservr-setup && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY start /etc/my_init.d/

EXPOSE 1433

CMD ["/opt/mssql/bin/sqlservr"]