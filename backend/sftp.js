let Client = require('ssh2-sftp-client');

const config = {
    host: 'proftp.drivehq.com',
    username: 'sutd_2022_c3g3',
    password: 'ESCPassword1!'
}

const client = new Client('test-client');

const connectToSFTP = () => {
  client.connect(config)
  .then(() => {
    return client.list("/accrual_handback_dropbox");
  })
  .then(data => {
    console.log(data);
    return client.end();
  })
  .catch(err => {
    console.log(`Error: ${err.message}`);
  });
}

const putDataToSFTP = (data, remote) => {
  client.connect(config)
  .then(() => {
    return client.put(data, remote);
  })
  .then(() => {
    return client.end();
  })
  .catch(err => {
    console.error(err.message);
  });
}

module.exports = {connectToSFTP, putDataToSFTP}