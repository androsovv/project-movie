

export function paginate (pageNumber,itemsOnPage, array) {
    const lastIndex = pageNumber * itemsOnPage;
    const firstIndex = lastIndex - itemsOnPage;
    return array.slice(firstIndex, lastIndex);
}