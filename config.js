// # Ghost Configuration
// Setup your Ghost install for various [environments](http://support.ghost.org/config/#about-environments).

// Ghost runs in `development` mode by default. Full documentation can be found at http://support.ghost.org/config/

var path = require('path'),
    config;

config = {
    // ### Production
    // When running Ghost in the wild, use the production environment.
    // Configure your URL and mail settings here
    production: {
        url: 'http://orangindo.com',
        mail: {
              transport: 'SMTP',
              options: {
                  service: 'Mailgun',
                  auth: {
                    user: 'postmaster@orangindo.com', // mailgun username
                    pass: '1a3d7b85ff2891454d925b298ce112cc'  // mailgun password
                  }
              }
          },
        database: {
            client: 'pg',
            connection: {
                host     : 'postgres',
                port     : '5432',
                user     : 'postgres',
                password : 'c4f3squ4r31!',
                database : 'ghost',
                charset  : 'utf8'
            }
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        },
        paths: {
            contentPath: path.join(__dirname, '/')
        }
    }
};

module.exports = config;
