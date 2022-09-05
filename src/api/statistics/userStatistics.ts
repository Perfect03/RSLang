import { storageUserAccInfo, storageUserStatistic } from '../../components/utils/storage';
import { baseUrl } from '../api';

export const sendUserStatisitcs = async () => {
    await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/statistics`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storageUserStatistic),
    });
    console.log('put stats', storageUserStatistic);
};

export const getUserStatistics = async () => {
    const stats = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/statistics`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
    });
    console.log(await stats.json());
};
