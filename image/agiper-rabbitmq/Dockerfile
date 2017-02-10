FROM agiper/base

RUN add-apt-repository "deb http://www.rabbitmq.com/debian testing main" && \
	wget -qO - https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | apt-key add - && \
	apt-get update && \
	apt-get install -y --no-install-recommends rabbitmq-server && \
	rabbitmq-plugins enable rabbitmq_management && \
	echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY run /etc/service/rabbitmq/

EXPOSE 5672 15672