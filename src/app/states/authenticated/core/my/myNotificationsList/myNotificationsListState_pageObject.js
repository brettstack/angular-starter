module.exports = {
  navigateHere: function () {
    browser.get('/my/notifications/');
  },
  goToState: function () {
    browser.get('/');
    $state.go('authenticated.core.my.myNotificationsList');
  },
  stateContainer: element(by.id('myNotificationsListState'))
};