FROM agiper/base

RUN add-apt-repository ppa:linuxuprising/java && \
	apt-get update && \
	echo oracle-java11-installer shared/accepted-oracle-license-v1-2 select true | debconf-set-selections && \
	apt-get install -y oracle-java11-installer && \
	echo "networkaddress.cache.ttl=60" >> /usr/lib/jvm/java-11-oracle/jre/lib/security/java.security && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/cache/oracle-java11-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV JAVA_HOME=/usr/lib/jvm/java-11-oracle
