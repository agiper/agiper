FROM agiper/java
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add - && \
	echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-5.x.list && \
	apt-get update && \
	apt-get install elasticsearch kibana logstash -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN /usr/share/kibana/bin/kibana-plugin install x-pack && \
	/usr/share/elasticsearch/bin/elasticsearch-plugin install x-pack
	
COPY kibana.yml /etc/kibana/
COPY jvm.options /etc/elasticsearch/
COPY supervisord.conf /etc/supervisor/
COPY elasticsearch.yml /etc/elasticsearch/

EXPOSE 5601 9200

CMD /usr/bin/supervisord
