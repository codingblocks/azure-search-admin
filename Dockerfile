FROM node:8

WORKDIR /usr/src/app

# Copy the package files separately,
# so we only install when something changes in one of those files
COPY client/package.json .
COPY client/package-lock.json .

RUN npm install

COPY client/. .

EXPOSE 3000

CMD [ "npm", "start" ]