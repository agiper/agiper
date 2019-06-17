FROM agiper/base

ENV RABBITMQ_VERSION=3.7.15-1

RUN wget -O - "https://github.com/rabbitmq/signing-keys/releases/download/2.0/rabbitmq-release-signing-key.asc" | apt-key add - &&\
	echo "deb https://dl.bintray.com/rabbitmq/debian xenial main" | sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list && \
	echo "deb https://dl.bintray.com/rabbitmq-erlang/debian xenial erlang-20.x" | sudo tee /etc/apt/sources.list.d/bintray.erlang.list && \
	apt-get update && \
	apt-get install -y rabbitmq-server=${RABBITMQ_VERSION} && \
	rabbitmq-plugins enable rabbitmq_management && \
	echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config && \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN chown -R rabbitmq:rabbitmq /var/lib/rabbitmq && \
	chown -R rabbitmq:rabbitmq /var/log/rabbitmq

CMD ["rabbitmq-server"]
