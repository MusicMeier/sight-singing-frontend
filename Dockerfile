# Set our base image to be a node specific image
FROM node:14

# Set a working directory for our application
WORKDIR /app

# Copy all files from the current directory into our image.
COPY . .

# Resolve our dependencies and execute our build.
RUN yarn install && \
    yarn build

# Start our application.
CMD yarn start