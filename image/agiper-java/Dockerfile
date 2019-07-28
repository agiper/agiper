FROM agiper/base

RUN add-apt-repository ppa:linuxuprising/java && \
	apt-get update && \
	echo oracle-java10-installer shared/accepted-oracle-license-v1-2 select true | debconf-set-selections && \
	apt-get install -y oracle-java10-installer && \
		apt-get install -y oracle-java10-set-default && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/cache/oracle-jdk10-installer && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

# ENV JAVA_HOME=/usr/lib/jvm/java-12-oracle
