export function getDayOfWeek(day, month, year) {
    return new Date(year, month, day).toLocaleString('en-US', {
        weekday: 'long'
    });
}