FROM agiper/base

RUN add-apt-repository ppa:linuxuprising/java -y && \
	apt-get update && \
	echo oracle-java11-installer-local shared/accepted-oracle-license-v1-2 select true | debconf-set-selections && \
	apt-get install -y oracle-java11-installer-local && \
	apt-get install -y oracle-java11-set-default-local && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/cache/oracle-java11-installer-local && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
