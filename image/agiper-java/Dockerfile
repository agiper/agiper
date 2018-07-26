FROM agiper/base

RUN add-apt-repository ppa:webupd8team/java && \
	apt-get update && \
	echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
	apt-get install oracle-java8-installer -y --no-install-recommends && \
	echo "networkaddress.cache.ttl=60" >> /usr/lib/jvm/java-8-oracle/jre/lib/security/java.security && \
	apt-get autoremove && \
	apt-get clean && \
	rm -rf /var/cache/oracle-jdk8-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV JAVA_HOME=/usr/lib/jvm/java-8-oracle
