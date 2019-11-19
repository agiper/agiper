FROM agiper/base

ENV MSSQL_VERSION=15.0.2000.5-5

RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - && \
	add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/prod.list)" && \
	add-apt-repository "$(curl https://packages.microsoft.com/config/ubuntu/16.04/mssql-server-2019.list)" && \
	apt-get update && \
	export ACCEPT_EULA=Y && \
	apt-get install -y \
		mssql-tools \
		unixodbc-dev \
		mssql-server=${MSSQL_VERSION} && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

ENV ACCEPT_EULA=Y
ENV MSSQL_PID=Enterprise
ENV SA_PASSWORD=S@_P@ssw0rd

CMD ["/opt/mssql/bin/sqlservr"]
