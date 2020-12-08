/**
 * Small helper to convert database date to human readable form with DE syntax
 * @param dateString date fetched from database
 * @returns date in human readable form
 */
export const convertStringToHumanReadableDateString = (dateString: string): string => {
    const date = new Date(dateString);
    return Intl.DateTimeFormat("de").format(date);
}

/**
 * Small helper to convert date from formfield syntax to expected database scheme
 * @param dateString date given from form in human readable form
 * @returns reformatted date string as expected by the database scheme
 */
export const converStringToDatabaseDate = (dateString: string): string => {
    const dateArray = dateString.split(".");
    return `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;

}
