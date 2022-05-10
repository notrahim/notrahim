/**
 * It takes a number and returns the number of pages needed to display that number of items
 * @param number - the number of items in the array
 * @returns The number of pages needed to display the number of items.
 */
export function numberOfPage (number){
    return Math.ceil(number / 10)
}