FROM quay.io/agiper/nginx
MAINTAINER Tom Nuen <tomnuen@agiper.com>

ADD nginx.toml /etc/confd/conf.d/
ADD nginx.tmpl /etc/confd/templates/
ADD supervisord.conf /etc/supervisor/

CMD /usr/bin/supervisord