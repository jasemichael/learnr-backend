FROM node as base

COPY . /app
WORKDIR /app
RUN ["npm", "i"]

FROM base as setup-db
CMD ["npm", "run", "setup-db"]

FROM base as dev
CMD ["npm", "start"]

FROM base as prod
CMD ["npm", "start"]