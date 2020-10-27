// Omit imports.
public abstract class RTGroup implements Parcelable, Updatable {
    public String id;
    public String name;
    public String avatarURL;
    public ArrayList<TwitterUser> following;
    public ArrayList<String> members; // String -> User.id
    public String tweetFormat;
    @Nullable public Bitmap avatar;
}
