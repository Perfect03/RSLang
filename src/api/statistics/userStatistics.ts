import { storageUserAccInfo, storageUserStatistic } from '../../components/utils/storage';
import { IGetUserStatistic } from '../../interfaces & types/statistics';
import { baseUrl } from '../api';

export const sendUserStatisitcs = async () => {
    storageUserStatistic.optional.common__accuracy =
        (storageUserStatistic.optional.audiochallenge__accuracy + storageUserStatistic.optional.sprint__accuracy) / 2;

    await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/statistics`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storageUserStatistic),
    });
};

export const getUserStatistics = async () => {
    const temp = await fetch(`${baseUrl}users/${storageUserAccInfo.userId}/statistics`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${storageUserAccInfo.token}`,
            Accept: 'application/json',
        },
    });
    const stats = await temp.json();
    replaceUserStats(stats);
};

const replaceUserStats = (stats: IGetUserStatistic) => {
    storageUserStatistic.learnedWords = stats.learnedWords;
    storageUserStatistic.optional.common__accuracy = stats.optional.common__accuracy;
    storageUserStatistic.optional.audiochallenge__accuracy = stats.optional.audiochallenge__accuracy;
    storageUserStatistic.optional.audiochallenge__words = stats.optional.audiochallenge__words;
    storageUserStatistic.optional.audiochallenge__right = stats.optional.audiochallenge__right;
    storageUserStatistic.optional.audiochallenge__in_a_row = stats.optional.audiochallenge__in_a_row;

    storageUserStatistic.optional.sprint__accuracy = stats.optional.sprint__accuracy;
    storageUserStatistic.optional.sprint__words = stats.optional.sprint__words;
    storageUserStatistic.optional.sprint__right = stats.optional.sprint__right;
    storageUserStatistic.optional.sprint__in_a_row = stats.optional.audiochallenge__in_a_row;
};
