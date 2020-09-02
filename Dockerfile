FROM node:10-alpine

RUN apk add --no-cache util-linux bash
RUN echo 'alias ll="ls -lah"' >> ~/.bashrc

# These dependancies are used for building sharp, an image processing library used by Gatsby.
# Yes, Python is required.  Git is also required for creating new Gatsby sites.
RUN apk add --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    vips-dev vips-tools gcc g++ make libc6-compat python git

RUN yarn global add gatsby-cli

EXPOSE 80
RUN mkdir -p /app
WORKDIR /app

# Use the Clearlink NPM registry.
RUN npm config set registry https://npm.clearlink.com
