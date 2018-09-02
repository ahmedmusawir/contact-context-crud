#!/bin/bash

docker build -t moosedev/contact-context-react-nginx .
docker push moosedev/contact-context-react-nginx

ssh moose@142.93.105.156 << EOF 
docker pull moosedev/contact-context-react-nginx:latest
docker stop contact-context || true
docker rm contact-context || true
docker rmi moosedev/contact-context-react-nginx:current || true
docker tag moosedev/contact-context-react-nginx:latest moosedev/contact-context-react-nginx:current
docker run -d --restart always --name contact-context -p 8002:80 moosedev/contact-context-react-nginx
EOF
