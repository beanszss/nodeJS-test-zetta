/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here

    if (!words || words.length === 0) return "";

    let sortedArr = words.sort((a, b) => a.length - b.length)

    let sortestString = sortedArr[0]

    while (!words.every((string) => string.startsWith(sortestString))) {
        if (sortestString.length === 0) return

        sortestString = sortestString.slice(0, -1)
    }

    return sortestString
}

console.log(result(words));
