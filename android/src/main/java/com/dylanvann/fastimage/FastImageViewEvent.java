package com.dylanvann.fastimage;

import androidx.annotation.Nullable;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.Event;

/**
 * Direct events for FastImageView, dispatched via {@link
 * com.facebook.react.uimanager.events.EventDispatcher} (Fabric + legacy compatible).
 */
public class FastImageViewEvent extends Event<FastImageViewEvent> {
    public static final String ON_LOAD_START = "onFastImageLoadStart";
    public static final String ON_PROGRESS = "onFastImageProgress";
    public static final String ON_LOAD = "onFastImageLoad";
    public static final String ON_ERROR = "onFastImageError";
    public static final String ON_LOAD_END = "onFastImageLoadEnd";

    private final String eventName;
    @Nullable private final WritableMap payload;

    private FastImageViewEvent(
            int surfaceId, int viewTag, String eventName, @Nullable WritableMap payload) {
        super(surfaceId, viewTag);
        this.eventName = eventName;
        this.payload = payload;
    }

    @Override
    public String getEventName() {
        return eventName;
    }

    @Nullable
    @Override
    protected WritableMap getEventData() {
        return payload;
    }

    @Override
    public boolean canCoalesce() {
        return ON_PROGRESS.equals(eventName);
    }

    static FastImageViewEvent loadStart(int surfaceId, int viewTag) {
        return new FastImageViewEvent(surfaceId, viewTag, ON_LOAD_START, null);
    }

    static FastImageViewEvent progress(int surfaceId, int viewTag, long loaded, long total) {
        WritableMap map = Arguments.createMap();
        map.putInt("loaded", (int) loaded);
        map.putInt("total", (int) total);
        return new FastImageViewEvent(surfaceId, viewTag, ON_PROGRESS, map);
    }

    static FastImageViewEvent load(int surfaceId, int viewTag, int width, int height) {
        WritableMap map = Arguments.createMap();
        map.putInt("width", width);
        map.putInt("height", height);
        return new FastImageViewEvent(surfaceId, viewTag, ON_LOAD, map);
    }

    static FastImageViewEvent error(int surfaceId, int viewTag) {
        return new FastImageViewEvent(surfaceId, viewTag, ON_ERROR, null);
    }

    static FastImageViewEvent loadEnd(int surfaceId, int viewTag) {
        return new FastImageViewEvent(surfaceId, viewTag, ON_LOAD_END, null);
    }
}
