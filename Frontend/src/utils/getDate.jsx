import { DateTime } from 'luxon';
import { format, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';

function getDateTime(dateString) {
    const dateTime = DateTime.fromISO(dateString, { zone: 'utc' }).toLocal();
    const formattedDate = dateTime.toFormat('d/M/yyyy hh:mm:ss a');
    return formattedDate;
}

function getDateTime12Hour(dateString) {
    const dateTime = DateTime.fromFormat(dateString, 'yyyy-MM-dd HH:mm:ss', { zone: 'utc' });
    const formattedDate = dateTime.toFormat('yyyy-MM-dd hh:mm:ss a');
    return formattedDate;
}

function ISOtoNormal(dateString) {
    const timestamp = parseInt(dateString, 10);
    const dateTime = DateTime.fromMillis(timestamp * 1000, { zone: 'utc' });
    const formattedDate = dateTime.toISO();
    return formattedDate;
}

function getTimeFromDateShort(date) {
    try {
        const dateTime = DateTime.fromISO(date, { zone: 'utc' }).toLocal();
        const now = DateTime.local();
        const diffInSeconds = differenceInSeconds(dateTime.toJSDate(), now.toJSDate());

        if (diffInSeconds < 0) {
            return "Ended";
        }

        const days = differenceInDays(dateTime.toJSDate(), now.toJSDate());
        const hours = differenceInHours(dateTime.toJSDate(), now.toJSDate()) % 24;
        const minutes = differenceInMinutes(dateTime.toJSDate(), now.toJSDate()) % 60;
        const seconds = diffInSeconds % 60;

        let formattedTime = `${seconds}s`;

        if (minutes > 0) {
            formattedTime = `${minutes}m ${formattedTime}`;
        }
        if (hours > 0) {
            formattedTime = `${hours}h ${formattedTime}`;
        }
        if (days > 0) {
            formattedTime = `${days}d ${hours}h ${formattedTime}`;
        }

        return formattedTime;
    } catch (e) {
        return date;
    }
}

function getDate(date) {
    const dateTime = DateTime.fromISO(date, { zone: 'utc' });
    const formattedDate = dateTime.toFormat('MMMM d, yyyy');
    return formattedDate;
}

export { getDateTime, getDateTime12Hour, ISOtoNormal, getTimeFromDateShort, getDate };
