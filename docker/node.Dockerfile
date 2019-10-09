FROM node:8.15.1-jessie

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
# Create app directory
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY package*.json ./

RUN npm install

# Bundle app source
# COPY . .

RUN npm run build

ENV HOST 0.0.0.0
EXPOSE 3000

# CMD ["npm", "run", "start"]
