FROM agiper/base

ENV ES_VERSION=7.5.0
ENV JAVA_SDK_VERSION=13

RUN echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu bionic main" | tee /etc/apt/sources.list.d/linuxuprising-java.list && \
	apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A && \
	apt-get update && \
	apt-get install -y oracle-java${JAVA_SDK_VERSION}-installer && \
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

CMD ["/sbin/setuser", "daemon", "/usr/share/elasticsearch/bin/elasticsearch"]
