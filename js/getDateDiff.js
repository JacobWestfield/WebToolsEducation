import DateTime from 'luxon/DateTime';

function getDateDiff(firstDate, secondDate) {

    const firstDateObj = DateTime.fromISO(firstDate);
    const secondDateObj = DateTime.fromISO(secondDate);

    return secondDateObj.diff(firstDateObj, ['months', 'days', 'hours', 'seconds']).toObject();

}

export default getDateDiff;