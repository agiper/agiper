FROM agiper/base

RUN add-apt-repository ppa:linuxuprising/java && \
	apt-get update && \
	echo oracle-java12-installer shared/accepted-oracle-license-v1-2 select true | debconf-set-selections && \
	apt-get install -y oracle-java12-installer && \
	apt-get install -y oracle-java12-set-default && \	
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/cache/oracle-java12-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
