export interface TrackerDetail {
    success: boolean;
    response: Response;
}

export interface TrackerDetailResponse {
    qqGroups: number[];
    _id: string;
    uid: string;
    displayName: string;
    nickname: string; // global nickname
    groups: TrackerDetailGroup[];
    __v: number;
}

export interface TrackerDetailGroup {
    id: string;
    name: string;
    nickname: string; // nickname in group
}