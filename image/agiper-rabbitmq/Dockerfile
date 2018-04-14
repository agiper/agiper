FROM agiper/base

ENV RABBITMQ_VERSION=3.7.4-1

RUN curl -s https://packagecloud.io/install/repositories/rabbitmq/erlang/script.deb.sh | sudo bash && \
	curl -s https://packagecloud.io/install/repositories/rabbitmq/rabbitmq-server/script.deb.sh | sudo bash && \
	rabbitmq-plugins enable rabbitmq_management && \
	echo "[{rabbit, [{loopback_users, []}]}]." > /etc/rabbitmq/rabbitmq.config && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

RUN chown -R rabbitmq:rabbitmq /var/lib/rabbitmq && \
	chown -R rabbitmq:rabbitmq /var/log/rabbitmq

EXPOSE 5672 15672

CMD ["rabbitmq-server"]
