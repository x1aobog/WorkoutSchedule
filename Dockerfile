# Use Node.js official image as base
FROM node:18-alpine

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]