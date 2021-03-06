//https://www.codewars.com/kata/56e9e4f516bcaa8d4f001763/train/javascript
class SequenceSum {
  static showSequence(count) {
    if (count === 0) return '0=0'
    if (count < 0) return `${count}<0`

    const numberRange = Array.from({ length: count + 1 }, (_, index) => index)

    const summatoryString = numberRange.join('+')
    const total = numberRange.reduce((total, value) => total + value, 0)

    return `${summatoryString} = ${total}`
  }
}

