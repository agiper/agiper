FROM agiper/base

RUN curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list)" && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2017.list)" && \
	apt-get update && \
	export ACCEPT_EULA=Y && \
	apt-get install -y --no-install-recommends \
		mssql-tools \
		unixodbc-dev \
		mssql-server && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY start /etc/my_init.d/
COPY mssql.conf /var/opt/mssql/

ENV SA_PASSWORD=ZBEUqK7KxK

EXPOSE 1433

CMD ["/opt/mssql/bin/sqlservr"]
