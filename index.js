// let a = 10;

// setTimeout(
//   (a) => {
//     console.log("1 Second Passed and a is ", a);
//   },
//   1000,
//   a
// );

// a = 20;
// console.log("Program Started and a is ", a);
// console.log("Program Started");
// let a = 1;
// const interval = setInterval(() => {
//   console.log(a, " seconds passed is passed");
//   a++;
//   if (a > 10) {
//     clearInterval(interval);
//   }
// }, 1000);

// const sub = () => {
//   console.log("This is from sub");
// };

// const main = () => {
//   console.log("This is from main");
//   setTimeout(
//     (next) => {
//       console.log("One second passed");
//       next();
//     },
//     1000,
//     () => {
//       console.log("This is inline sub");
//     }
//   );
// };

// main();

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("This is resolved");
//   }, 1000);
// });

// myPromise
//   .then((m) => {
//     console.log(m);
//   })
//   .catch((m) => {
//     console.log("Error ", m);
//   })
//   .finally(() => {
//     console.log("All done");
//   });

// const main = async () => {
//   try {
//     const m = await myPromise;
//     console.log(m);
//   } catch (r) {
//     console.log("Error", r);
//   }
//   console.log("Finished");
// };

// main();

const sleep = (n) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });

// sleep(1).then(() => {
//   console.log("One second Passed");
// });

// sleep(2).then(() => {
//   console.log("Two second Passed");
// });

const main = async () => {
  await sleep(1);
  console.log("One second passed");
  await sleep(1);
  console.log("Two second passed");
  await sleep(1);
  console.log("Three second passed");
};

main();
