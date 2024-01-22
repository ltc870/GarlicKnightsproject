FROM node:19-alpine

COPY css/app/
COPY features/app/
COPY img/app/
COPY interviews/app/
COPY js/app/
COPY personas/app/
COPY practice/app/
COPY user_stories/app/

RUN npm install