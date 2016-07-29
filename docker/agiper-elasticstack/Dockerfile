FROM quay.io/agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add - && \
	echo "deb http://packages.elastic.co/logstash/2.3/debian stable main" | sudo tee -a /etc/apt/sources.list && \
	echo "deb http://packages.elastic.co/kibana/4.5/debian stable main" | sudo tee -a /etc/apt/sources.list.d/kibana-4.4.x.list && \
	echo "deb http://packages.elastic.co/elasticsearch/2.x/debian stable main" | sudo tee -a /etc/apt/sources.list.d/elasticsearch-2.x.list && \
	apt-get update && \
	apt-get install elasticsearch logstash kibana -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN /usr/share/elasticsearch/bin/plugin install license && \ 
	/usr/share/elasticsearch/bin/plugin install marvel-agent && \
	/opt/kibana/bin/kibana plugin --install elastic/sense/latest && \
	/opt/kibana/bin/kibana plugin --install elasticsearch/marvel/latest

ADD kibana.yml /opt/kibana/config/
ADD elasticsearch.yml /etc/elasticsearch/

EXPOSE 5601
EXPOSE 9200
EXPOSE 9300
