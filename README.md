# workadventureAdmin

Admin Interface for Workadventure

## Setup
1. Checkout the repo to your server
2. Make sure docker and docker-compose is installed. 
3. Make sure there is a running traefik
4. create a wokaList.json file based on the example File with your paths and styles
5. create a .env File with the required informations based on the .env-example
6. Run docker-compose up -d

## Setup Database
If you want to use the database structure that is defined in our example you can simply use the script inside the mysql folder. 

IMPORTANT: You have to setup a USER first. Please use therefore the user you have put in your .env file! DONT use your root user. We dont recommend that. 

First setup a User following the init.sql in 'mysql/admin' than grant privileges on the wiki database you created based on the instructions from 'mysql/wiki/init.sql'

## Usage
Checkout the Administration Guide under "documentation" on how you can use the Admin API
