FROM agiper/base

ENV ES_VERSION=7.4.2
ENV JAVA_SDK_VERSION=11

RUN apt-get update && \
	apt-get install -y openjdk-${JAVA_SDK_VERSION}-jdk && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /tmp/* /var/tmp/* /var/lib/apt/lists/*

RUN mkdir -p /var/lib/elasticsearch && \
	mkdir -p /var/log/elasticsearch && \
	mkdir -p /usr/share/elasticsearch && \
	curl -L https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-${ES_VERSION}-linux-x86_64.tar.gz | tar -xzC /usr/share/elasticsearch --strip-components=1

COPY elasticsearch.yml /usr/share/elasticsearch/config/

RUN chown -R daemon:daemon /var/lib/elasticsearch && \
	chown -R daemon:daemon /var/log/elasticsearch && \
	chown -R daemon:daemon /usr/share/elasticsearch

ENV JAVA_HOME=/usr/lib/jvm/java-${JAVA_SDK_VERSION}-openjdk-amd64

CMD ["/sbin/setuser", "daemon", "/usr/share/elasticsearch/bin/elasticsearch"]
