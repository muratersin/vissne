@echo off

echo Vissne deployed to Heroku...
echo Installing node dependencies...

call npm install

echo Compile front end scripts...
call npm run build

echo Logged in Heroku
call heroku login
call heroku git:remote -a vissne
call git add .
call git commit -am "Deploy - %date%"
call git push heroku master

echo Deploying is completed.
exit
