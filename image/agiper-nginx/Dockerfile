FROM agiper/base

RUN apt-get update && \
	apt-get install nginx -y --no-install-recommends && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/* && \
	rm -v /etc/nginx/nginx.conf /etc/nginx/sites-enabled/default

COPY run /etc/service/nginx/
COPY nginx.conf /var/lib/nginx/

EXPOSE 80
