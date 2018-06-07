FROM ubuntu:14.04
MAINTAINER Carlos Llano

RUN apt-get update
RUN apt-get upgrade -y

# Install basic libraries
RUN apt-get install -y nano vim curl software-properties-common
RUN apt-get -y install vim git jq curl sudo wget rsyslog

# Install nodejs
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install -y nodejs

# Install MongoDB
RUN apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
RUN apt-get update
RUN apt-get install -y mongodb-org

################################################################################
# Install osquery and python bindings
################################################################################
RUN export OSQUERY_KEY=1484120AC4E9F8A1A577AEEE97A80C63C9D8B80B
RUN apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1484120AC4E9F8A1A577AEEE97A80C63C9D8B80B
RUN add-apt-repository 'deb [arch=amd64] https://pkg.osquery.io/deb deb main' 
RUN apt-get update 
RUN apt-get -y install osquery
COPY osquery.example.conf /etc/osquery/osquery.conf

RUN mkdir /home/APIRestOSQuery
RUN mkdir /data/db -p
WORKDIR /home/APIRestOSQuery
RUN git clone https://github.com/sidorares/osquery-node.git
RUN npm init -y
RUN npm install osquery
RUN npm install express
RUN npm install mongoose
RUN npm install -g http --save
COPY server.js /home/APIRestOSQuery/
COPY /api/. /home/APIRestOSQuery/api
EXPOSE 3000
ENTRYPOINT /etc/init.d/osqueryd restart && mongod && /bin/bash



