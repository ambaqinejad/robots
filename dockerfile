From node:latest

#Create app directory

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
ADD src /usr/src/app/src
ADD public /usr/src/app/public
RUN npm run build --production
RUN npm install -g serve
#CMD [ "npm", "start" ]

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000
