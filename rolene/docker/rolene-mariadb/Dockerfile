FROM quay.io/agiper/mariadb
MAINTAINER Tom Nuen <tomnuen@agiper.com>

ADD backup /
RUN chmod 755 backup && /backup && rm /backup
ADD supervisord.conf /etc/supervisor/

CMD /usr/bin/supervisord
