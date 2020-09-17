# cypress

- Make sure you have client.example.com in /etc/hosts `sudo cat /etc/hosts`
  - sudo echo "127.0.0.1 client.example.com" | sudo tee -a /etc/hosts
- Run it: `docker-compose up -d ; sh osx-init.sh`

Done!

## Update screenshots

```
yarn cypress run --env updateSnapshots=true
```
