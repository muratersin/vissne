@echo off

echo Vissne deployed to Heroku...
echo Installing node dependencies...

:: switch branch to master
call git checkout master

:: merge all changes from dev branch
call git merge origin dev

:: build front end scripts
call npm run build

:: commit and push to master branch
:: heroku will deploy automatically from this branch
call git add .
call git commit -am "Deploy - %date%"
call git push origin master

echo \\\\\------ DEPLOYING IS COMPLETED ------/////

exit
