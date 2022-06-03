/**
 * It takes a string and returns a new string with the first letter capitalized
 * @param word - The word that you want to capitalize the first letter of.
 * @returns The first letter of the word is being returned in uppercase.
 */
export function upperCaseFirstLatter (word){
    if(!word)return""
    /* Taking the first letter of the word and making it uppercase and then adding the rest of the word
    to it. */
    const newWord = word[0].toUpperCase() + word.slice(1)
    
    return newWord
}