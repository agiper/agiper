FROM agiper/base

ENV RABBITMQ_VERSION=3.7.4-1

RUN wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add - && \
	wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add - && \
	echo "deb https://dl.bintray.com/rabbitmq/debian xenial main" | sudo tee /etc/apt/sources.list.d/bintray.rabbitmq.list && \
	echo "deb https://packages.erlang-solutions.com/ubuntu xenial contrib" | sudo tee /etc/apt/sources.list.d/erlang-solutions.list && \
	apt-get clean && \
	apt-get update -o Acquire::CompressionTypes::Order::=gz && \
	apt-get install rabbitmq-server=${RABBITMQ_VERSION} -y --no-install-recommends && \
	rabbitmq-plugins enable rabbitmq_management && \
	echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN chown -R rabbitmq:rabbitmq /var/lib/rabbitmq && \
	chown -R rabbitmq:rabbitmq /var/log/rabbitmq

EXPOSE 5672 15672

CMD ["rabbitmq-server"]
