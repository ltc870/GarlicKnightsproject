FROM node:20.11.0

COPY public/css /app/
COPY features /app/
COPY img /app/
COPY interviews /app/
COPY js /app/
COPY personas /app/
COPY prototype /app/
COPY user_stories /app/
COPY design_artifacts.html /app/
COPY index.html /app/
COPY README.md /app/
COPY package-lock.json /app/
COPY package.json /app/
COPY app.js /app/
COPY searchPage.html /app/
COPY genreRecommendation.html /app/

EXPOSE 8080

WORKDIR /app

RUN npm install

CMD node app.js

