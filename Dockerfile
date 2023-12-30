FROM node:14.21.3-alpine as client

RUN  mkdir -p /Shrinker/client

WORKDIR /Shrinker/client

COPY client/ /Shrinker/client

RUN npm i --silent

RUN npm run build


#############################################################################
#############################################################################
FROM python:alpine3.19 as final 

RUN mkdir -p /Shrinker/server

WORKDIR /Shrinker/server

COPY --from=client /Shrinker/client/build .

COPY server /Shrinker/server

RUN pip install gunicorn flask firebase_admin

EXPOSE 5000

CMD ["gunicorn", "-b", ":5000", "-w", "4", "wsgi:app"]

