#!/bin/bash
CERT_NAME=example.com.crt
docker exec gateway cat /cert/site.crt > ~/$CERT_NAME
echo "We need to add your certificate to the OS X Keychain"
sudo --reset-timestamp security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/$CERT_NAME
echo "Certificate has been imported"
rm ~/$CERT_NAME
echo "'https://client.example.com/' to look at the site."
