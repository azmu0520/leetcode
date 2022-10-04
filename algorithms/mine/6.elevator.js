const elevator = (list, you) => {
  let res = [];
  list.map((item) => {
    res.push(Math.abs(item - you));
  });

  let test = res.join('').indexOf(`${Math.min(...res)}`);
  return test;
};

elevator([12, 3, 5, 7, 88], 6);
