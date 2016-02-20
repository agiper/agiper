FROM quay.io/agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add - && \
	echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list && \
	apt-get update && \
	apt-get install elasticsearch -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

#RUN /usr/share/elasticsearch/bin/plugin install elasticsearch/marvel/latest && \
# 	/usr/share/elasticsearch/bin/plugin install mobz/elasticsearch-head

EXPOSE 9200
