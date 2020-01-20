################################
# Stage 1 -- Build and Install #
################################
FROM alpine as installer
WORKDIR /home/app

# Copy Dependencies
COPY . .

# Run Install/Build
RUN apk --update add --no-cache nodejs nodejs-npm && npm i -D webpack webpack-cli && npm i && npm run build

################################
# Stage 2 -- Run Application   #
################################
FROM nginx:alpine

# Create the Application Directory
RUN mkdir /usr/share/nginx/html/app

# Set the Working Directory
WORKDIR /usr/share/nginx/html/app

# Copy the Dependencies
COPY --from=installer /home/app/build/ .
COPY --from=installer /home/app/nginx/nginx.conf /etc/nginx/nginx.conf
COPY --from=installer /home/app/nginx/server.conf /etc/nginx/conf.d/default.conf
