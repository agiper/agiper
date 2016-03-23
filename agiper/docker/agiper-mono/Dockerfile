FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://download.mono-project.com/repo/debian wheezy main" && \
	wget -qO - http://download.mono-project.com/repo/xamarin.gpg | apt-key add - && \
	apt-get update && \
	apt-get install mono-devel referenceassemblies-pcl ca-certificates-mono -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
