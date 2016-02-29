FROM quay.io/agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add - && \
	echo "deb http://packages.elastic.co/logstash/2.2/debian stable main" | sudo tee -a /etc/apt/sources.list && \
	apt-get update && \
	apt-get install logstash -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

EXPOSE 9300
