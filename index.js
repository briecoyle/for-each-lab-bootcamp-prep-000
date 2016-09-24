function iterativeLog(array) {
  array.forEach(item => {
    console.log(`${array.indexOf(item)}: ${item}`)
  })
}

function iterate(callback) {
  newArray = [0,1,2,3]
  newArray.forEach(callback)
  return newArray
}

function doToArray(array, callback) {
  array.forEach(callback)
}
