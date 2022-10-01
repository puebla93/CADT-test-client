FROM node:14.9.0 AS build-step

WORKDIR /client
COPY package.json package-lock.json ./
RUN npm install

COPY . .
