# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# If your project uses WebView with JS, uncomment the following
# and specify the fully qualified class name to the JavaScript interface
# class:
#-keepclassmembers class fqcn.of.javascript.interface.for.webview {
#   public *;
#}

# Uncomment this to preserve the line number information for
# debugging stack traces.
#-keepattributes SourceFile,LineNumberTable

# If you keep the line number information, uncomment this to
# hide the original source file name.
#-renamesourcefileattribute SourceFile


#忽略混淆检查
-ignorewarnings
# IFAA 对外提供的类不被混淆
-keep public class com.esandinfo.ifaa.IFAAManager**{ *; }
-keep public class com.esandinfo.ifaa.IFAABaseInfo**{ *; }
-keep public class com.esandinfo.ifaa.IFAACommon**{ *; }
-keep public class com.esandinfo.ifaa.biz.** { *; }
-keep public class com.esandinfo.ifaa.constants.Common** { *; }
-keep public class com.esandinfo.ifaa.bean.** { *; }
-keep public class com.esandinfo.ifaa.utils.**{ *; }

-keep public class com.esandinfo.mno.bean.**{ *; }
-keep public class com.esandinfo.mno.constants.**{ *; }
-keep public class com.esandinfo.mno.MNOManager**{ *; }
-keep public class com.esandinfo.mno.biz.** { *; }

-keep public class com.esandinfo.sms.bean.**{ *; }
-keep public class com.esandinfo.sms.constants.**{ *; }
-keep public class com.esandinfo.sms.SMSIFAAManager**{ *; }
-keep public class com.esandinfo.ifaa.uniappmodule.**{ *; }

# ifaa 原始接口不被混淆
-keep public class org.ifaa.android.manager.IFAAManager* {*;}
-keep public class org.ifaa.ifaf.** {*;}

# 海鑫活体检测
-keep class com.hisign.ivs.easy.view.*{*;}
-keep class com.hisign.live.vl.sdk.*{*;}
-keep class com.sun.jna.**{*;}
-keepclasseswithmembernames class * {
    native <methods>;
}

# 可信认证
# keep api
-keep class gov.chinatax.tpass.depend.**{*;}