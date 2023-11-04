// per = percent
// aug = augment
// p0 = population
// goal = goal

function nbYear(p0, per, aug, goal) {
  let years = 0;
  while (p0 < goal) {
    p0 += p0 * per + aug;
    years++;
  }
  console.log(years);
  return years;
}

nbYear(1000, 0.02, 50, 1200);
