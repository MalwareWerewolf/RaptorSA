FROM node:12
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN apt-get -y update
RUN apt-get -y upgrade
RUN apt-get install -y ffmpeg
RUN apt-get install -y python2.7 python-pip
RUN npm install
RUN npm update ytdl-core
COPY . /app
CMD ["node", "index.js"]