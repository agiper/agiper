FROM agiper/base

RUN curl https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add - && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list)" && \
	sudo add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2017.list)" && \
	apt-get update && \
	export ACCEPT_EULA=Y && \
	apt-get install -y --no-install-recommends \
		mssql-tools \
		unixodbc-dev \
		mssql-server=14.0.3022.28-2 && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Enterprise
ENV SA_PASSWORD=P@ssw0rd

EXPOSE 1433

CMD ["/opt/mssql/bin/sqlservr"]
