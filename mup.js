module.exports = {
  servers: {
    one: {
      host: '127.0.0.1',
      username: 'root',
      // pem:"/Users/saranshdevsingh/.ssh/id_rsa",
      opts: {
          port: 3001
      }
      // password: 'Pass@12345'
      // or leave blank for authenticate from ssh-agent
    }
  },

  meteor: {
    name: 'panoplycms',
    path: '/Users/saranshdevsingh/Documents/MyProject/Client/deligence/panoplycms1.3/PanoplyCMS',
    servers: {
      one: {}
    },
    buildOptions: {
      serverOnly: true
      // debug:true,
    },
    env: {
      ROOT_URL: 'http://127.0.0.1',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    // change to 'kadirahq/meteord' if your app is not using Meteor 1.4
    // change to 'abernix/meteord:base' if your app is using Meteor 1.4
    dockerImage: 'abernix/meteord:base',
    deployCheckWaitTime: 60,


    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    oplog: true,
    port: 27017,
    servers: {
      one: {}
    }
  }
};
