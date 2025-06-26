
# Hosting Node.js Apps on Ubuntu with Nginx and pm2

This guide outlines the steps to host a Node.js application on an Ubuntu server using Nginx as a reverse proxy and pm2 as a process manager.

## Prerequisites

* Ubuntu Server installed (tested on Ubuntu 20.04 LTS)
* Basic knowledge of the command line and Ubuntu system administration

## Step 1: Install Node.js and build essentials

```bash
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install -y build-essential
```

Verify installation:

```bash
node --version
npm --version
```

## Step 2: Create a sample Node.js application

You can use your own Node.js application or create a sample one for testing.

## Step 3: Install pm2 and launch your app

Install pm2 globally to manage your Node.js application:

```bash
sudo npm install -g pm2
```

Launch your Node.js application using pm2:

```bash
pm2 start index.js --name "my-node-app"
```

## Step 4: Install Nginx

Install Nginx web server to act as a reverse proxy:

```bash
sudo apt-get install nginx
```

## Step 5: Configure Nginx

Edit the default Nginx configuration file to proxy requests to your Node.js application:

```bash
sudo nano /etc/nginx/sites-available/default
```

Replace the contents with:

```nginx
server {
    listen 80;
    server_name your_domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Save and close the file (`Ctrl+X`, `Y`, `Enter`).

## Step 6: Test and restart Nginx

Test the Nginx configuration for syntax errors:

```bash
sudo nginx -t
```

If the test is successful, restart Nginx to apply the changes:

```bash
sudo systemctl restart nginx
```

## Accessing Your Application

Navigate to `http://your_domain.com` in your web browser to access your Node.js application.

## Managing Your Node.js Application with pm2

* View application logs: `pm2 logs my-node-app`
* Restart application: `pm2 restart my-node-app`
* Stop application: `pm2 stop my-node-app`
* Start application: `pm2 start my-node-app`

## Additional Configuration

* Customize Nginx configuration for SSL/TLS termination or load balancing.
* Secure your server with firewall rules and SSH access restrictions.
