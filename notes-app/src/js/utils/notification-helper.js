const NotificationHelper = {
  sendNotification({ title, options }) {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!this._checkPermission()) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return 'Notification' in window;
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },

  async _isNotificationReady() {
    if (!this._checkAvailability()) {
      console.log('Notification not supported in this browser');
      return false;
    }

    if (!this._checkPermission()) {
      console.log('User did not granted the notification permission yet');
      const status = await Notification.requestPermission();

      if (status === 'denied') {
        window.alert(
          'Cannot subscribe to push message because the status of notification permission is denied',
        );
        return false;
      }

      if (status === 'default') {
        window.alert(
          'Cannot subscribe to push message because the status of notification permission is ignored',
        );
        return false;
      }
    }

    return true;
  },
};

export default NotificationHelper;
