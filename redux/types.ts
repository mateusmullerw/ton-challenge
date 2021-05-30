export interface WithDataFetchParams<T> {
    loadState: string;
    data: T;
    error: Error;
}

export interface ActionType {
    type: string,
    payload?: {}
}
