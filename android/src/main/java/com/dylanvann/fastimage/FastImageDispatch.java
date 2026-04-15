package com.dylanvann.fastimage;

import android.view.View;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.uimanager.UIManagerHelper;
import com.facebook.react.uimanager.events.Event;
import com.facebook.react.uimanager.events.EventDispatcher;

final class FastImageDispatch {
    private FastImageDispatch() {}

    static void send(View view, Event<?> event) {
        ReactContext reactContext = UIManagerHelper.getReactContext(view);
        EventDispatcher dispatcher = UIManagerHelper.getEventDispatcher(reactContext);
        if (dispatcher != null) {
            dispatcher.dispatchEvent(event);
        }
    }
}
