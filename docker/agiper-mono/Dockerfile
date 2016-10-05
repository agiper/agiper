FROM quay.io/agiper/base
MAINTAINER Tom Nuen <tomnuen@agiper.com>

RUN add-apt-repository "deb http://download.mono-project.com/repo/debian wheezy main" && \
	wget -qO - http://download.mono-project.com/repo/xamarin.gpg | apt-key add - && \
	add-apt-repository "deb [arch=amd64] https://apt-mo.trafficmanager.net/repos/dotnet-release/ trusty main" && \
	apt-key adv --keyserver apt-mo.trafficmanager.net --recv-keys 417A0893 && \
	apt-get update && \
	apt-get install mono-devel referenceassemblies-pcl ca-certificates-mono dotnet-dev-1.0.0-preview2-003131 -y && \
	apt-get clean && \
	rm -rf /var/lib/apt/lists/* /var/tmp/* /tmp/*
