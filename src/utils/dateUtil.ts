export const formatDate = (
    date: Date,
    date_options: Intl.DateTimeFormatOptions
): string => {
    const formattedDate = date.toLocaleString("en-US", date_options);
    return formattedDate;
};
