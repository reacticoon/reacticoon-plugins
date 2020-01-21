export const listenForAll = "ALL";

let _listerners = {};

export const addListener = (event, callback) => {
  if (!_listerners[event]) {
    _listerners[event] = [];
  }
  _listerners[event].push(callback);
};

export const getListenersForEvent = event => {
  return (_listerners[event] || []).concat(_listerners[listenForAll]);
};
