FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
# RUN npx sequelize db:create
# RUN npx sequelize db:migrate
EXPOSE 8000
CMD ["npm", "run", "start"]
