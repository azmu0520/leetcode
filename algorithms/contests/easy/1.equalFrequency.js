var equalFrequency = function (word) {
  let res = {};
  let opp = 1;
  for (let i = 0; i < word.length; i++) {
    let reg = new RegExp(word[i], 'g');
    res[word[i]] = word.match(reg).length;
  }

  let count = Object.values(res)[0];

  for (let j in res) {
    console.log(res[j]);
    if (res[j] !== count) opp--;
  }
  console.log(opp);
};

equalFrequency('aazz');
