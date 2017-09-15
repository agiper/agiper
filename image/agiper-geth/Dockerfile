FROM agiper/base

RUN add-apt-repository -y ppa:ethereum/ethereum && \
	apt-get update && \
	apt-get install ethereum && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY start /etc/my_init.d/

EXPOSE 8545
