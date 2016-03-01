FROM quay.io/agiper/elasticsearch
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN wget -qO - https://packages.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add - && \
	echo "deb http://packages.elastic.co/logstash/2.2/debian stable main" | sudo tee -a /etc/apt/sources.list && \
	echo "deb http://packages.elastic.co/kibana/4.4/debian stable main" | sudo tee -a /etc/apt/sources.list.d/kibana-4.4.x.list && \
	apt-get update && \
	apt-get install logstash kibana -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

EXPOSE 5601
EXPOSE 9300
