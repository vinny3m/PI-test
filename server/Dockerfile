FROM node:16
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
EXPOSE 8000
CMD ["npm", "start"]