# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose a port (if your React app runs on a specific port, specify it here)

# Start the application
CMD ["npm", "start"]
