FROM quay.io/agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://packages.elastic.co/elasticsearch/1.5/debian stable main" && \
	wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | apt-key add - && \
	apt-get update && \
	apt-get install elasticsearch -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN /usr/share/elasticsearch/bin/plugin -i elasticsearch/marvel/latest && \
	/usr/share/elasticsearch/bin/plugin -i mobz/elasticsearch-head

EXPOSE 9200
