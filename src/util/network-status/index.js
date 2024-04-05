import * as Network from 'expo-network';

async function GetNetworkStatus() {
    return await Network.getNetworkStateAsync();
}

export { GetNetworkStatus };