# ts-shipment-tracker

I develop this project to use type script effectively. Specially using classes and interfaces. This application have 2 parts. one is cargo and destination module and the other one is the map. Finally generated cargo geo point will be populated on a google map.

## Tech stack

typescript
webpack bundler (to convert ts code to js with save)

## How I setup the project

- npm init -y <- to initialize the package.json
- npm install webpack webpack-cli --save -dev <- to install webpack cli
- make index.html in root and link 'dist/bundle.js' file
- setup the webpack.config.js in root
