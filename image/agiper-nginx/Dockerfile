FROM agiper/base

ENV NGINX_VERSION=1.14.2-1~xenial

RUN curl http://nginx.org/keys/nginx_signing.key | sudo apt-key add - && \
	echo "deb http://nginx.org/packages/mainline/ubuntu/ xenial nginx" >> /etc/apt/sources.list.d/nginx.list && \
	echo "deb-src http://nginx.org/packages/mainline/ubuntu/ xenial nginx" >> /etc/apt/sources.list.d/nginx.list && \
	apt-get update && \
	apt-get install -y nginx=${NGINX_VERSION} & \
	apt-get autoremove -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*

COPY nginx.conf /etc/nginx/

CMD ["nginx", "-g", "daemon off;"]
