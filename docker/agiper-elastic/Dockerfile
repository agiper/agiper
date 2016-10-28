FROM quay.io/agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get install apt-transport-https && \
	wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add - && \
	echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-5.x.list && \
	apt-get update && \
	apt-get install elasticsearch kibana logstash -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN /usr/share/kibana/bin/kibana-plugin install x-pack && \
	/usr/share/elasticsearch/bin/elasticsearch-plugin install x-pack
	
ADD kibana.yml /etc/kibana/
ADD elasticsearch.yml /etc/elasticsearch/

EXPOSE 5601
EXPOSE 9200
EXPOSE 9300
