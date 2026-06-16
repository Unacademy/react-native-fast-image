package com.dylanvann.fastimage;

import androidx.annotation.NonNull;

import com.facebook.react.TurboReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.model.ReactModuleInfo;
import com.facebook.react.module.model.ReactModuleInfoProvider;
import com.facebook.react.uimanager.ViewManager;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class FastImageViewPackage extends TurboReactPackage {
    @Override
    public NativeModule getModule(String name, @NonNull ReactApplicationContext reactContext) {
        if ("FastImageView".equals(name)) {
            return new FastImageViewModule(reactContext);
        }
        return null;
    }

    @NonNull
    @Override
    public List<NativeModule> createNativeModules(@NonNull ReactApplicationContext reactContext) {
        return Collections.<NativeModule>singletonList(new FastImageViewModule(reactContext));
    }

    @NonNull
    @Override
    public List<ViewManager> createViewManagers(@NonNull ReactApplicationContext reactContext) {
        return Collections.<ViewManager>singletonList(new FastImageViewManager());
    }

    @Override
    public ReactModuleInfoProvider getReactModuleInfoProvider() {
        return () -> {
            Map<String, ReactModuleInfo> map = new HashMap<>();
            map.put(
                    "FastImageView",
                    new ReactModuleInfo(
                            "FastImageView",
                            "com.dylanvann.fastimage",
                            false,
                            false,
                            true,
                            false,
                            true));
            return map;
        };
    }
}
