FROM agiper/base

RUN curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list)" && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2017.list)" && \
	apt-get update && \
	export ACCEPT_EULA=Y && \
	export SA_PASSWORD=ZBEUqK7KxK && \
	apt-get install -y --no-install-recommends \
		mssql-tools \
		unixodbc-dev \
		mssql-server && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/* && \
	/opt/mssql/bin/mssql-conf set-sa-password

#COPY start /etc/my_init.d/

ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Enterprise

EXPOSE 1433

CMD ["/opt/mssql/bin/sqlservr"]
