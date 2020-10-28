interface RTGroupDetailObject {
    success: boolean;
    response: RTGroupDetailResponse;
}

interface RTGroupDetailResponse {
    id: string;
    name: string;
    avatarURL: string;
    following: RTGroupDetailFollowing[];
    members: string[];
    tweetFormat: string;
}

interface RTGroupDetailFollowing {
    uid: string;
    nickname: string;
    _id: string;
    id: string;
}