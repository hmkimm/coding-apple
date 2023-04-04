for (let i = 0; i < 100; i++) {
  console.log(i + 1);
}

// 짝수는 안나오는 구구단
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue;
  for (let j = 0; j < 10; j++) {
    if (j % 2 == 0) continue;
    console.log(i, j, i * j);
  }
}

//별 찍기 과제
for (let i = 5; i > 0; i--) {
  console.log("*".repeat(i));
}

for (let i = 0; i < 5; i++) {
  console.log("*".repeat(5 - i));
}

for (let i = 0; i < 9; i = i + 2) {
  console.log("*".repeat(9 - i));
}

for (let i = 0; i < 5; i = i + 1) {
  console.log(" ".repeat(4 - i) + "*".repeat(i + 1));
}
