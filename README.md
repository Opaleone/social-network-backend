# social-network-backend

## Description
This is a backend that I created for a mock social media giant. It receives data and stores it within a MongoDB database for later retrieval 

Technologies used:

    Node.JS
    Express.JS
    MongoDB
    Mongoose


## Usage

In order to use this program, you will need `Insomnia` and some form of a text editor such as, `Visual Studio Code` to run the server.

To run, simply run the command:

    npm run start

This will startup the server for the internal API.

Then, navigate over to Insomnia and run one of the following URLs

    localhost:3001/api/users
    localhost:3001/api/users/{id of user to select}
    localhost:3001/api/users/{id of user to select}/friends/{id of user to add as friend to first id}
    localhost:3001/api/thoughts/{id of thought to select}
    localhost:3001/api/thoughts/{id of thought to select}/reactions
    localhost:3001/api/thoughts/{id of thought to select}/reactions/{id of specific reaction to thought}

## Credits

University of Texas - Austin
[Stackoverflow.com](https://stackoverflow.com)

## License

This repository is licensed under the [MIT License](./LICENSE)