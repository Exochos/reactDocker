
#Download base image ubuntu 20.04
FROM node:latest
# LABEL about the custom image
LABEL maintainer="exochos@gmail.com"
LABEL version="0.1"
LABEL description="This is custom Docker Image for Jeremy's Page."
# Update Ubuntu Software repository
RUN apt update
RUN mkdir -p /app
WORKDIR /app
COPY package*.json .
RUN npm install
ADD src /app/src
ADD public /app/public
EXPOSE 3000
CMD ['npm', 'start']
