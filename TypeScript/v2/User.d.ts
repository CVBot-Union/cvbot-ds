/* Current User /v2/user */
interface UserDetailObject {
    success: boolean;
    response: UserDetailResponse;
}

interface UserDetailResponse {
    id: string;
    name: string;
    avatarURL: string;
    jobs: UserDetailJob[];
}

interface UserDetailJob {
    jobName: string;
    priority: number;
    groupId: string;
}