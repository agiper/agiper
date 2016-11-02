FROM quay.io/agiper/elasticsearch
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install logstash -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
	
ADD supervisord.conf /etc/supervisor/

CMD /usr/bin/supervisord