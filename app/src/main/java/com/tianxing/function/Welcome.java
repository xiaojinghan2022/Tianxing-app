package com.tianxing.function;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

public class Welcome extends Activity {

    Handler handler = new Handler();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //加载布局
        setContentView(R.layout.welcome);

        handler.postDelayed(() -> {
            Intent intent = new Intent(Welcome.this,MainActivity.class);
            startActivity(intent);
            finish();
        },5000);


    }
}
