export const formateDate = (date: Date) => {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    })
    return formattedDate;
}