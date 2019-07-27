FROM openjdk:12-alpine

ENV ES_VERSION=7.2.0
RUN mkdir -p /var/lib/elasticsearch && \
	mkdir -p /var/log/elasticsearch && \
	mkdir -p /usr/share/elasticsearch && \
	curl -L https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${ES_VERSION}-linux-x86_64.tar.gz | tar -xzC /usr/share/elasticsearch --strip-components=1

COPY elasticsearch.yml /usr/share/elasticsearch/config/

RUN chown -R daemon:daemon /var/lib/elasticsearch && \
	chown -R daemon:daemon /var/log/elasticsearch && \
	chown -R daemon:daemon /usr/share/elasticsearch

CMD ["/sbin/setuser", "daemon", "/usr/share/elasticsearch/bin/elasticsearch"]
