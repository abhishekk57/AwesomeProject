import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';


import { createLogTable, insertLogsTable } from '../sqlite';

const BACKGROUND_FETCH_TASK = 'background-fetch-task';
const BACKGROUND_FETCH_TASK2 = 'background-fetch-task2';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async ({ data }) => {
  /**inserLog(new Date().toISOString());
   console.log('background fetch task 1 is working ', data);*/
});

/**
 *  Track task when app is in background state
 */

TaskManager.defineTask(BACKGROUND_FETCH_TASK2, async ({ data }) => {
  /**inserLog(new Date().toISOString());
   console.log('background fetch task 2 is working ', data);*/
});

export const registerBackgroundFetchTask2 = async () => {
  await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK2, {
    data: { 'apiCall': 'apiCall', 'otherCall': 'otherCall' },
    minimumInterval: 1,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};
/**
 *  Register Individual Task 
 */
export const registerBackgroundFetchTask = async () => {
  await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    data: { 'apiCall': 'apiCall', 'otherCall': 'otherCall' },
    minimumInterval: 1,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

/**
 * 
 * @returns unregister task whenever it is required
 */
export async function unregisterBackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
}


/**
 * 
 * @returns unregister task 2 whenever it is required
 */
export async function unregisterTask2BackgroundFetchAsync() {
  return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK2);
}

function inserLog(time) {
  createLogTable('logs').then(() => {
    insertLogsTable(time, 'logs')
      .then(() => { })
      .catch(() => { })
  }).catch(() => { })
}

function anothFunction(time) {
  console.log('t2 ', time)
}

export default BACKGROUND_FETCH_TASK;
