### Generate private key/cert
```sh
openssl req -x509 -new -nodes -sha256 -utf8 -days 3650 -newkey rsa:2048 -keyout server.key -out server.crt -config ssl.conf
```

### Curl test
```sh
curl -k https://localhost:3000

curl http://localhost:4000
```