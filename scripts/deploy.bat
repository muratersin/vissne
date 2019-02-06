@echo off

echo Vissne deployed to Heroku...
echo Installing node dependencies...


echo Compile front end scripts...

:: switch branch to master
call git checkout master

:: install node depeodencies
call npm install

:: build front end scripts
call npm run build

:: merge all changes from dev branch
call git merge origin dev

:: commit and push to master branch
:: heroku will deploy automatically from this branch
call git add .
call git commit -am "Deploy - %date%"
call git push origin master

echo \\\\\------ DEPLOYING IS COMPLETED ------/////

exit
