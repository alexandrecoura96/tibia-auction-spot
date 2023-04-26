# Tibia Auction Spot
This is a project developed in React Native for study purposes, inspired by the Tibia game. The goal is to consume an API that performs webscraping on the game's website, bringing information about the characters that are on the Tibia bazaar.

The application allows users to view the characters available in the Tibia bazaar, as well as filter by world, vocation or sorting. In addition, the user can view details of the selected character, such as their description and skill levels.


[step1.webm](https://user-images.githubusercontent.com/64710438/234436079-0b37a884-1c2f-45b0-8c04-3880d120e6d9.webm)

[step2.webm](https://user-images.githubusercontent.com/64710438/234436088-28122690-e076-4d01-b29d-7d7ef9908564.webm)

[step3.webm](https://user-images.githubusercontent.com/64710438/234436093-4ea7f7e9-45e5-4697-8db4-26e64181383c.webm)

[step4.webm](https://user-images.githubusercontent.com/64710438/234436099-7231d2b0-eff5-4550-ab58-31240cd34974.webm)


## What's in this project:
• Infinity scroll

• Flashlist from shopify to maximize performance.

• Pull to refresh.

• Custom Hooks

• Typescript

• Responsive Font Size

• Navigation Stack and Bottom Tabs

• Splash Screen

• Axios

• Google Fonts

• Modalize

• Linear Gradient

• Masked View

• Offline First (pending to do)

• Alerts (pending to do)

• Tests with Jest (pending to do)

• A lot more, come to see =)


## Prerequisites
To run this project, you will need to have installed the following on your computer:

• Node.js (version 14 or higher)

• npm (or yarn)

• Expo CLI

## How to run the project

Before you begin, you will need to have the following tools installed on your machine: Git, Node.js. It is also good to have an editor to work with the code like VSCode.

⚠ Before running the mobile frontend, you need to check the IP of your machine and configure it in the axios setup file present in the libs folder of this project.

🎲 Running the Back End (server)
```
# Clone this repository
$ gh repo clone alexandrecoura96/characters-auction-api

# Access the project folder in the terminal/cmd
$ cd characters-auction-api

# Install dependencies
$ npm install
# If you prefer to use Yarn, run the command below
$ yarn

# Run the application
$ node index.js

# If you prefer to use Yarn, run the command below
$ yarn start

# The server will start on port 3000 - access http://localhost:3000
```

📱 Running the App
```
# Clone this repository
$ gh repo clone alexandrecoura96/tibia-auction-spot

# Access the project folder in the terminal/cmd
$ cd tibia-auction-spot

# Install dependencies
$ npm install
# If you prefer to use Yarn, run the command below
$ yarn

# Run the application
$ yarn start

# The Expo menu will open in the terminal where you can scan the QR Code to run the app directly on your phone or the options to run on the Android or iOS emulator.
```

## How to use the application
When you start the application, you will see a list of characters available in the Tibia bazaar. You can click on a character to see more details, such as the character's name, server, price, seller, and skill descriptions. In addition, you can filter the list by world, vocation or sorting.
In addition to the available characters, it is possible to see the history of bazaar sales or cancellations by accessing the "History" bottom tabs.

## About development
Out of respect for the Tibia company, this project was developed only for study purposes and is non-profit.
