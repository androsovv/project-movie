export function paginate(array, currentPage, itemsOnPage) {
    const lastIndex = currentPage * itemsOnPage;
    const firstIndex = lastIndex - itemsOnPage;
    return array.slice(firstIndex, lastIndex);
}