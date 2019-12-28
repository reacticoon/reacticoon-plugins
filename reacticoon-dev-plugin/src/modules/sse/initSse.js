import { getListenersForEvent, addListener, listenForAll } from "./config";
import sseAllListener from "./sseAllListener";

const intiSse = () => {
  const eventSource = new EventSource("//localhost:9191/sse-server");

  eventSource.onmessage = function(e) {
    console.log(e.data);

    (getListenersForEvent(e.data.event) || []).forEach(callback => {
      try {
        const event = JSON.parse(e.data);
        callback(event);
      } catch (_) {}
    });
  };

  eventSource.onerror = function(err) {
    // TODO: dispatch reacticoon error event
  };

  addListener(listenForAll, sseAllListener);
};

export default intiSse;
