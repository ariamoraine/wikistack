var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack1');

var Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
}, {
  getterMethods: {
    urlLink: function () {
      return '/wiki/' + this.urlTitle;
    }
  }
}, {
    hooks: {
      beforeValidate: function (page) {
        page.urlTitle = page.title.replace(/\s+/g, '_').replace(/\W/g, '');
      }
    }
  });

var User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        isEmail: true
    }
});

module.exports = {
  Page: Page,
  User: User
};
