FROM quay.io/agiper/mono
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
	add-apt-repository ppa:webupd8team/java && \	
	apt-get update && \
	apt-get install oracle-java8-installer -y && \
	apt-get clean && \
	rm -rf /var/cache/oracle-jdk8-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle	