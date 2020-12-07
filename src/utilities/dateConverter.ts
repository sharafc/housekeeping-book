export const convertStringToHumanReadableDateString = (dateString: string): string => {
    const date = new Date(dateString);

    return Intl.DateTimeFormat("de").format(date);
}
