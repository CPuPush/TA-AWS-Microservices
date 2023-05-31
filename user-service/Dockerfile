FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
# RUN npx sequelize db:create
# RUN npx sequelize db:migrate
# RUN npx sequelize db:seed:all
EXPOSE 5000
CMD ["npm", "run", "start"]
