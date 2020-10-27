// Omit imports.
public abstract class Job implements Parcelable, Updatable {
    public String jobName;
    private int priority;  //权限级别
    public RTGroup group;
