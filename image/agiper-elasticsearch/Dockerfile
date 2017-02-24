FROM agiper/java

RUN groupadd -g 500 elasticsearch && \
	useradd -u 500 -g 500 elasticsearch && \
	mkdir -p /var/lib/elasticsearch && \
	mkdir -p /var/log/elasticsearch && \
	mkdir -p /usr/share/elasticsearch && \
	chown -R elasticsearch:elasticsearch /var/lib/elasticsearch && \
	chown -R elasticsearch:elasticsearch /var/log/elasticsearch && \
	chown -R elasticsearch:elasticsearch /usr/share/elasticsearch && \
	curl -L https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-5.2.1.tar.gz | tar -xzC /usr/share/elasticsearch --strip-components=1

COPY elasticsearch.yml /usr/share/elasticsearch/config/

EXPOSE 9200

CMD ["/sbin/setuser", "elasticsearch", "/usr/share/elasticsearch/bin/elasticsearch"]