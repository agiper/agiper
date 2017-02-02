FROM agiper/base

RUN apt-get update && \
	apt-get install apache2-utils siege gcc make -y --no-install-recommends && \
	wget http://acme.com/software/http_load/http_load-14aug2014.tar.gz && \
	tar xvzf http_load-14aug2014.tar.gz && \
	cd http_load-14aug2014 && \ 
	make && \
	make install && \
	cd .. &&\
	rm -rf http_load-14aug2014.tar.gz http_load-14aug2014 && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
