var
  bll = require("../../bll"),
  logger = require('../../common/logger'),
  util = require("util"),
  passportConf = require('../../config/passport'),
  _ = require('lodash'),
  common = require("../../common")
  ;


exports.init = function (app) {
  app.post('/owner/save', passportConf.isAuthenticated, SaveProfile);
  app.post('/owner/delete', passportConf.isAuthenticated, DeleteAccount);
  // app.post('/account/changepassword', passportConf.isAuthenticated, ChangePassword);
};

function SaveProfile(req, res, next) {
  var data = {};
  data.Profile = req.body.data;
  data.OwnerAccountId = req.User.accountid;
  bll.owner.SaveProfile(data).then(function (bllRes) {
    res.status(200).send(bllRes);
  });
}

function DeleteAccount(req, res, next) {
  //FOR DEMO PURPOSES ONLY...WONT USE IN PRODUCTION
  var data = {};
  // data.Profile = req.body.data;
  data.primarykey = req.User.accountid;
  bll.owner.DeleteAccount(data).then(function (bllRes) {
    res.status(200).send(bllRes);
  });
}


