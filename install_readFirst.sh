#!/bin/bash

echo '*** SERVER INSTALLATION LOCAL ***'
npm install express --save
npm install moviedb --save
npm install jquery --save

echo '*** SERVER INSTALLATION GLOBAL ***'
sudo npm install -g bower
sudo npm install -g yo
sudo npm install -g generator-angular
sudo npm install -g generator-karma

echo '*** CLIENT INSTALLATION ***'
sudo yo angular

npm install jquery --save

bower install jquery -save
bower install angular-bootstrap -save
bower install spin.js -save
