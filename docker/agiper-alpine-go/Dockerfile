FROM gliderlabs/alpine
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN apk update && apk add git curl go && rm -rf /var/cache/apk/*

ENV GOROOT /usr/lib/go
ENV GOPATH /usr/local/go
ENV PATH $PATH:$GOROOT/bin:$GOPATH/bin
