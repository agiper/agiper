FROM agiper/base

RUN add-apt-repository ppa:linuxuprising/java && \
	apt-get update && \
	mkdir -p /var/cache/oracle-jdk11-installer-local && \
	wget -P /var/cache/oracle-jdk11-installer-local http://download.macromedia.com/pub/coldfusion/java/java11/JDK1103/jdk-11.0.3_linux-x64_bin.tar.gz
	apt-get install -y oracle-java11-installer-local && \
		apt-get install -y oracle-java11-set-default-local && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/* /var/cache/oracle-jdk11-installer-local

# ENV JAVA_HOME=/usr/lib/jvm/java-12-oracle
