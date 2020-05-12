FROM multiarch/debian-debootstrap:arm64-stretch-slim
COPY . /app
RUN make /app
CMD python /app/app.py
EXPOSE 10000
