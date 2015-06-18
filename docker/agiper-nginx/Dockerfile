FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install nginx -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/* && \
	rm -v /etc/nginx/nginx.conf /etc/nginx/sites-enabled/default

ADD nginx.conf /etc/nginx/

EXPOSE 80