package com.wetax;

import android.util.Log;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import gov.chinatax.tpass.depend.core.Callback;
import gov.chinatax.tpass.depend.core.CredibleAuthSDK;
import gov.chinatax.tpass.depend.core.DependResult;
import gov.chinatax.tpass.depend.entity.requestentity.H5LoginParam;
import gov.chinatax.tpass.depend.entity.requestentity.RealPersonCertificationParam;
import gov.chinatax.tpass.depend.entity.resultentity.LoginResult;
import gov.chinatax.tpass.depend.entity.resultentity.RealPersonCertificationResult;
import gov.chinatax.tpass.depend.util.StringUtil;


public class CalendarModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext mContext; //给一个上下文
    CalendarModule(ReactApplicationContext context){
        super(context);
        //得到一个reactContext
        mContext = context;
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name + " and location: " + location);
        //smrz();
    }

    /**
     * 实名认证
     */
    @ReactMethod
    public void smrz() {
        CredibleAuthSDK.getInstance().registerApp("o8SAv2rAuPcn9xxx", "5sZKPxxx", "com.wetax");
        RealPersonCertificationParam param = new RealPersonCertificationParam();
        param.appToken = "abcdefghijklmn12345678";
        param.fullName = "龙天君";
        param.nationality = "156";
        param.idCardType = "201";
        param.idCard = "341203197806214077";
        param.startDate = "20210910";
        param.endDate="20310910";
//        param.effDate = "20210910";
//        param.expDate = "20310910";

        CredibleAuthSDK.getInstance().realPersonCertification(mContext,param,new
                Callback<RealPersonCertificationResult>() {
                    @Override
                    public void onResponse(DependResult<RealPersonCertificationResult> dependResult) {
//                        // 显示结果码和结果信息
//                        tvResult.setText("code:" + dependResult.code + "\n" + "msg:" + dependResult.msg);
//                        // 未获取到图片信息，隐藏人脸 ImageView
//                        if (dependResult.data == null || StringUtil.isEmpty(dependResult.data.face_pic)){
//                            ivResult.setVisibility(View.GONE);
//                            return;
//                        }
//                        // 人脸 base64 转图片
//                        ivResult.setVisibility(View.VISIBLE);
//                        ivResult.setImageBitmap(BitmapUtil.stringToBitmap(dependResult.data.face_pic));

                        // 显示结果码和结果信息
                        Log.i("msg:","code:" + dependResult.code + "\n" + "msg:" + dependResult.msg);
                        // 未获取到图片信息，隐藏人脸 ImageView
                        if (dependResult.data == null || StringUtil.isEmpty(dependResult.data.face_pic)){
                            Log.i("view",String.valueOf(View.GONE));
                            return;
                        }
                        // 人脸 base64 转图片
                        Log.i("view visible",String.valueOf(View.VISIBLE));
                        Log.i("face_pic",dependResult.data.face_pic);
                    }
                });
    }

    /**
     * 集成H5登录
     */
    @ReactMethod
    public void h5Login() {
        H5LoginParam param = new H5LoginParam();
        param.appToken = "xxxx";
        // 启动 H5 登录
        CredibleAuthSDK.getInstance().h5Login(mContext, param, new Callback<LoginResult>() {
            @Override
            public void onResponse(DependResult<LoginResult> result) {
                Toast.makeText(mContext, result.data.access_token, Toast.LENGTH_LONG).show();
            }
        });
    }

    public static void main(String[] args) {
       // smrz();
    }

}
