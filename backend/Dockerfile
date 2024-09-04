# Use Node.js LTS image
FROM node:lts

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port and run the app
EXPOSE 5000
CMD ["npm", "run", "start"]
