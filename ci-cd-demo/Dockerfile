# Step 1: Use Node.js base image
FROM node:18

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package files first (for caching)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy all remaining files
COPY . .

# Step 6: Expose the port your app runs on
EXPOSE 5000

# Step 7: Command to run the app
CMD ["npm", "start"]
