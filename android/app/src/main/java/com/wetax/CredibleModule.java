package com.wetax;

import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class CredibleModule extends ReactContextBaseJavaModule {

    CredibleModule(ReactApplicationContext context){
        super(context);
    }

    @NonNull
    @Override
    public String getName() {
        return "CredibleModule";
    }

    @ReactMethod
    public void createCredibleEvent(String name, String location) {
        Log.d("CredibleModule", "Create event called with name: " + name + " and location: " + location);
    }
}