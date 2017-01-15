FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://www.rabbitmq.com/debian testing main" && \
	wget -qO - https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | apt-key add - && \
	apt-get update && \
	apt-get install rabbitmq-server -y --no-install-recommends && \
	rabbitmq-plugins enable rabbitmq_management && \
	echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY supervisord.conf /etc/supervisor/

EXPOSE 5672 15672

CMD /usr/bin/supervisord
