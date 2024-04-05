import * as BackgroundFetch from 'expo-background-fetch';
import { BACKGROUND_FETCH_TASK } from "../../util/constant";

export async function registerBackgroundFetchAsync() {
    return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 60 * 15,
        stopOnTerminate: false,
        startOnBoot: true,
    });
}

export async function unregisterBackgroundFetchAsync() {
    return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}