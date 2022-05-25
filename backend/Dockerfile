FROM python:3.7-slim
WORKDIR /opt/app

EXPOSE 8080
RUN apt-get update
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
CMD ["python", "main.py"]