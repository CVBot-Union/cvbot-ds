export interface RTGroupDetail {
    success: boolean;
    response: RTGroupResponse;
}
export interface RTGroupResponse {
    property: RTGroupProperty;
    _id: string;
    members: (RTGroupMembersEntity)[] | [];
    trackers: (UserKVEntity)[] | [];
    name: string;
    avatarURL: string // same as RTGroupProperty.icon
    members_str: string[]; // RTGroupMembersEntity.id array
    __v: number;
}
export interface RTGroupProperty {
    themeColor: string;
    icon: string;
    description: string;
}
export interface RTGroupMembersEntity {
    id: string;
    username: string;
    job: string;
}

export interface UserKVEntity {
    nickname: string; // in-group nickname
    _id: string;
    id: string; // Tracker._id ref
    uid: string; // twitter user id
}

