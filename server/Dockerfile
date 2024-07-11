# Use official Node.js image as a parent image
FROM node:20.15.1

# Set the working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Install Datadog Agent
RUN apt-get update && \
    apt-get install -y curl gnupg && \
    DD_AGENT_MAJOR_VERSION=7 DD_API_KEY=82ed2d6337f64ba763f05367abebc163 DD_SITE="us5.datadoghq.com" bash -c "$(curl -L https://s3.amazonaws.com/dd-agent/scripts/install_script_agent7.sh)"

# Bundle app source
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start Datadog Agent and the application
CMD service datadog-agent start && npm start
