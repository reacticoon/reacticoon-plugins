import { getListenersForEvent, addListener, listenForAll } from "./config";
import sseAllListener from "./sseAllListener";

const listenReactScriptDevTools = () => {
  // const eventSource = new EventSource("http://localhost:4242/sockjs-node");
  // eventSource.onmessage = function(e) {
  //   console.log(e.data);
  //   debugger
  // };
  // eventSource.onerror = function(err) {
  //   console.error(err)
  //   debugger
  // };
};

const intiSse = () => {
  const eventSource = new EventSource("//localhost:9191/sse-server");

  eventSource.onmessage = function(e) {
    const event = JSON.parse(e.data);
    console.log({ event });

    (getListenersForEvent(event.eventName) || []).forEach(callback => {
      try {
        callback(event);
      } catch (_) {}
    });
  };

  eventSource.onerror = function(err) {
    // TODO: dispatch reacticoon error event
  };

  addListener(listenForAll, sseAllListener);

  listenReactScriptDevTools();
};

export default intiSse;
