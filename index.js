fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(array, cb) {
      for (let a in array) {
        if (array.hasOwnProperty(a)) {
          cb(array[a], a, array)
        }
      }
      return array
    },

    map: function(array, cb) {
      let newArray = []
      for (var b in array) {
        if (array.hasOwnProperty(b)) {
          newArray.push(cb(array[b], b, array))
        }
      }
      return newArray
    },

    reduce: function(collection, cb, acc) {
      let result = 0;
      let collectResult = 0;
      if (acc) {
        for (let c = 0; c < collection.length; c++) {
          collectResult += collection[c]
        }
        result = cb(acc, collectResult, collection)
      } else {
        for (let d = 0; d < collection.length; d++) {
          collectResult += collection[d]
        }
        result = cb(0, collectResult, collection)
      }
      return result
    },

    find: function(collection, predicate){
      for (let variable in collection) {
        if (collection.hasOwnProperty(variable)) {
          if (predicate(collection[variable]) == true) {
            return collection[variable]
          }
        }
      }
    },

    filter: function(collection, predicate){
      newArray = []
      for (let variable in collection) {
        if (collection.hasOwnProperty(variable)) {
          if (predicate(collection[variable]) == true) {
            newArray.push(collection[variable])
          }
        }
      }
      return newArray
    },

    size: function(collection){
      let count = 0
      for (let variable in collection) {
        if (collection.hasOwnProperty(variable)) {
          count++
        }
      }
      return count
    },

    first: function(array, n){
      newArray = []
      if (n) {
        for (let e = 0; e < n; e++) {
          newArray.push(array[e])
        }
        return newArray
      } else {
        return array[0]
      }
    },

    last: function(array, n){
      newArray = []
      if (n) {
        for (let e = n; e > 0; e--) {
          newArray.unshift(array[e])
        }
        return newArray
      } else {
        return array[array.length - 1]
      }
    },
    // last: function(array, n){
    //   console.log(`What we need: ${array.slice(1,n)}`);
    //   let temp = array.slice(((array.length - 1) - n), array.length - 1)
    //   console.log(temp);
    //   return array[array.length - 1]
    // },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
