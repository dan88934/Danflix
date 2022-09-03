# FROM golang:1.16
# RUN mkdir /app
# ADD . /app
# WORKDIR /app
# RUN CGO_ENABLED=0 GOOS=linux go build -a -installsuffix cgo -o app .

# FROM alpine:latest  
# WORKDIR /app
# RUN go build -o main .
# CMD ["/app/main"]

# syntax=docker/dockerfile:1

FROM golang:1.16-alpine
WORKDIR /app
COPY go.mod ./
COPY go.sum ./
RUN go mod download
#Will also need to copy react_frontend in too - try to do this explicitly
COPY *.go ./
COPY react_frontend ./react_frontend
#above might not be recursive
RUN cp -r react_frontend ./react_frontend || echo "No resources to copy"
RUN go build -o app
EXPOSE 8050
CMD [ "./app" ]