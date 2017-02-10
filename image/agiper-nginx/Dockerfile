FROM agiper/base

RUN apt-get update && \
	apt-get install -y --no-install-recommends nginx && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/* && \
	rm -v /etc/nginx/nginx.conf /etc/nginx/sites-enabled/default

COPY nginx.conf /etc/nginx/
COPY run /etc/service/nginx/

EXPOSE 80
