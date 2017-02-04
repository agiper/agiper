FROM agiper/base

RUN add-apt-repository ppa:webupd8team/java && \	
	wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | apt-key add - && \
	echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | tee -a /etc/apt/sources.list.d/elastic-5.x.list && \
	apt-get update && \
	export ES_SKIP_SET_KERNEL_PARAMETERS=true && \
	echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | debconf-set-selections && \
	apt-get install oracle-java8-installer elasticsearch kibana logstash -y --no-install-recommends && \
	mkdir -p /var/lib/elasticsearch && \
	mkdir -p /var/log/elasticsearch && \
	echo "vm.max_map_count=262144" >> /etc/sysctl.conf && \
	/usr/share/kibana/bin/kibana-plugin install x-pack && \
	/usr/share/elasticsearch/bin/elasticsearch-plugin install x-pack && \
	echo "networkaddress.cache.ttl=60" >> /usr/lib/jvm/java-8-oracle/jre/lib/security/java.security && \
	apt-get clean && \
	rm -rf /var/cache/oracle-jdk8-installer && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
	
COPY run /etc/my_init.d/
COPY kibana.yml /etc/kibana/
COPY elasticsearch.yml /etc/elasticsearch/

ENV JAVA_HOME /usr/lib/jvm/java-8-oracle

EXPOSE 5601 9200 9300