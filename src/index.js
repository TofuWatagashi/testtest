import "./styles.css";

 */

// var val1 = "var";
// console.log(val1);

// //var変数は宇m￥和書き可能

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

let val2 = "let";
console.log(val2);

val2 = "uwagaki";
console.log(val2);

const val3 = "uwagki dame";
console.log(val3);

const val4 = {
  name: "nakagawa",
  age: 33
};

console.log(val4);

val4.name = "test";
console.log(val4);

const val5 = ["dog", "cat"];
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */

const name = "takashi";
const age = 33;
const message1 = "私の名前は" + name + "です。年齢は" + age;
console.log(message1);

//テンプレート文字列を用いる。
const message2 = `w他紙の名前は${name}です。年齢は${age}です。`;
console.log(message2);

/**
 * アロー関数
 */

// function func1(str) {
//   return str;
// }
const func1 = function (str) {
  return str;
};
console.log(func1("func1desu"));

// const func2 = (str) => {
//   return str;
// };

const func2 = (str) => str;
console.log(func2("func2desu"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile = {
  name2: "talasho",
  age2: 33
};

const message3 = `名前は${myProfile.name2}です。年齢は${myProfile.age2}です。`;
console.log(message3);

const { name2, age2 } = myProfile;
const message4 = `名前は${name2}${age2}です。年齢は${age2}です。`;
console.log(message4);

const myProfile2 = ["takashi", 33];
const [name3, age3] = myProfile2;
const message5 = `名前は${name3}です。年齢は${age3}です。`;
console.log(message5);

/**
 * デフォルト値、引数
 */
const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
sayHello();
sayHello("popopo");

/**
 * スプレッド構文
 */
//配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1, num2) => console.log(num1 + num2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

//まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num1, num2, ...arr3] = arr2;
console.log(num1);
console.log(num2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "やまだ", "なかがわ"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(nameArr[index]);
}

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "なかがわ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 参考演算子
 */
// ある条件　？　条件がtrueの時：じょうけんがfalseのとき。
const val6 = 1 < 0 ? "true" : "false";
console.log(val6);

const num = 1300;

const formattedNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100goe" : "範囲外";
};
console.log(checkSum(50, 60));

/**
 * 論理演算氏の本当の意味・
 */

//  \\は左がfalseせなら右側を返す
const nu = null;
const fee = nu || "金額未設定です。";
console.log(fee);

const nu2 = null;
const fee2 = nu2 && "nanica";
console.log(fee2);
