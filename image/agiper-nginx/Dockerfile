FROM agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apt-get update && \
	apt-get install nginx -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/* && \
	rm -v /etc/nginx/nginx.conf /etc/nginx/sites-enabled/default

COPY nginx.conf /etc/nginx/
COPY nginx.toml /etc/confd/conf.d/
COPY nginx.tmpl /etc/confd/templates/
COPY supervisord.conf /etc/supervisor/

EXPOSE 80

CMD /usr/bin/supervisord
