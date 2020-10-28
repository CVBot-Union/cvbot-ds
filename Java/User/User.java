import android.graphics.Bitmap;

import androidx.annotation.Nullable;

import java.util.ArrayList;

public abstract class User implements Parcelable, Serializable, Updatable  {
    public String id;
    public String name;
    private String password;  // 推荐RSA加密过的字符串，不建议存储白文
    private String auth;
    @Nullable public String avatarURL;
    @Nullable public Bitmap avatar;
    public transient ArrayList<Job> jobs;  // 不序列化
}
