FROM python:3.9-slim-bullseye
WORKDIR /server
COPY . . 
RUN python3 -m venv server && /bin/bash -c "source /server/server/bin/activate"
RUN pip install gunicorn flask firebase_admin
EXPOSE 5000
CMD ["gunicorn", "-b", ":5000", "-w", "4", "wsgi:app"]

