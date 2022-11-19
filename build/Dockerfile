FROM ubuntu:22.04

ARG NODE_VERSION=16

WORKDIR /app

RUN apt-get update \
    && apt-get -y install nginx\
    && apt-get install -y curl zip unzip gcc g++ make \
    && curl -sLS https://deb.nodesource.com/setup_$NODE_VERSION.x | bash - \
    && apt-get install -y nodejs \
    && apt-get -y autoremove \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

COPY ./nginx/nginx.conf /etc/nginx/sites-available/default

RUN groupadd --force -g 1000 mohassib
RUN useradd -ms /bin/bash --no-user-group -g 1000 -u 1000 mohassib
RUN chown -R 1000:1000 /root

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]