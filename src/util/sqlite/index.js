import * as SQLite from 'expo-sqlite';
import { DB_NAME, DB_VERSION } from "../constant";

export const createTable = async () => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    await new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS items (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, quantity INT)',
                [],
                resolve,
                (_, error) => reject(error)
            );
        });
    });
}

export const insertIntoTable = async (name, value) => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    await new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO items (name, quantity) VALUES (?, ?)',
                [name, value],
                (_, result) => {
                    resolve(result.insertId);
                },
                (_, error) => reject(error)
            );
        });
    });
}

/**
 * 
 * @param {tableName} tableName 
 */

export const createLogTable = async (tableName) => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    await new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS ${tableName} (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)`,
                [],
                resolve,
                (_, error) => reject(error)
            );
        });
    });
}
/**
 * 
 * @param {*} name 
 * @param {*} tableName 
 */
export const insertLogsTable = async (name, tableName) => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    await new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `INSERT INTO ${tableName} (name) VALUES (?)`,
                [name],
                (_, result) => {
                    resolve(result.insertId);
                },
                (_, error) => reject(error)
            );
        });
    });
}
/**
 * 
 * @param {*} tableName 
 * @returns 
 */
export const getTableRecord = async (tableName) => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `SELECT * FROM ${tableName}`,
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, error) => reject(error)
            );
        });
    });
}

export const getTableValue = async () => {
    const db = SQLite.openDatabase(DB_NAME, DB_VERSION);
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM items',
                [],
                (_, { rows: { _array } }) => {
                    resolve(_array);
                },
                (_, error) => reject(error)
            );
        });
    });
}
