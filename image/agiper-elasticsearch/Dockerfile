FROM agiper/java

RUN mkdir -p /var/lib/elasticsearch && \
	mkdir -p /var/log/elasticsearch && \
	mkdir -p /usr/share/elasticsearch && \
	curl -L https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.6.3.tar.gz | tar -xzC /usr/share/elasticsearch --strip-components=1

COPY elasticsearch.yml /usr/share/elasticsearch/config/

RUN chown -R daemon:daemon /var/lib/elasticsearch && \
	chown -R daemon:daemon /var/log/elasticsearch && \
	chown -R daemon:daemon /usr/share/elasticsearch

EXPOSE 9200

CMD ["/sbin/setuser", "daemon", "/usr/share/elasticsearch/bin/elasticsearch"]
