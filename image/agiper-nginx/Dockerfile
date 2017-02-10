FROM agiper/base

RUN apt-get update && \
	apt-get install -y --no-install-recommends nginx && \
	apt-get clean && \
	rm -v /etc/nginx/sites-enabled/default && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY nginx.conf /etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]