andela algoritm

-  https://github.com/soonlive/codewars/issues/1

-
        kata-valid-braces/lib/clever.js
        function validBraces(braces) {
    const regPairs = /\(\)|\[\]|\{\}/g
    while (regPairs.test(braces)) { braces = braces.replace(regPairs, '') }
    return !braces.length;
  }

  module.exports = validBraces



  -- https://github.com/a1essar/codewars/blob/master/5%20kyu.%20PaginationHelper.md
