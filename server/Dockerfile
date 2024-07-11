# Use the official Node.js image as a base
FROM node:20.15.1

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY server/ .

# Install Datadog Agent
RUN apt-get update && apt-get install -y curl gnupg apt-transport-https && \
    DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=82ed2d6337f64ba763f05367abebc163 DD_SITE="us5.datadoghq.com" bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script.sh)"

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
