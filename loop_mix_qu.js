
// var i = 1
// while (i <= 10) {
//     console.log(i)
//     i=i+1
// }

// var i = 1
// var num = 10
// while (i <= num) {
//     console.log(i)
//     i=i+1
// }

// var i = 10
// while (i >= 1) {
//     console.log(i)
//     i=i-1
// }

// var num = 1
// var i = 20
// while (i >= num) {
//     console.log(i)
//     i=i-1
// }

// var i = 1
// var num = 10
// do {
//     console.log(i)
//     i=i+1
// }
// while(i<=num)


// var num = 1
// var i = 20
// do {
//     console.log(i)
//     i=i-1
// }
// while(i>=num)

// var num = 20
// var i = 1
// while (i <= num) {
//     if (i % 2 == 0) {
//         console.log(i,"even")
//     }
//     else {
//         console.log(i,"odd")
//     }
//     i=i+1
// }

// var num = 20
// var i = 1
// var evensum = 0
// var oddsum = 0
// while (i <= num) {
//     if (i % 2 == 0) {
//         evensum=evensum+i
//     }
//     else {
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// console.log("total of evensum", evensum);
// console.log("total of oddsum",oddsum)

// var num = 75
// var i = 1
// var evencount = 0
// var oddcount = 0
// while (i <= num) {
//     if (i % 2 == 0) {
//         evencount=evencount+1
//     }
//     else {
//         oddcount=oddcount+1
//     }
//     i=i+1
// }
// console.log("total of evencount", evencount);
// console.log("total of oddcount",oddcount)

// var num = 20
// var i = 1
// var sum=0
// while (i <= num) {
//     sum = sum + i
//     i=i+1
// }
// console.log("total of sum",sum)

// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num============")
// var i = 1
// while (i <= num) {
//     console.log(i)
//     i=i+1
// }

// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num==============")
// var i = 10
// while (i >= num) {
//     console.log(i)
//     i=i-1
// }

// even_and_odd_number===================================================================
// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num=================")
// var i = 1
// while (i <= num) {
//     if (i % 2 == 0) {
//         console.log(i,"even")
//     }
//     else {
//         console.log(i,"odd")
//     }
//     i=i+1
// }

// do {
//     if (i % 2 == 0) {
//         console.log(i,"even")
//     }
//     else {
//         console.log(i,"odd")
//     }
//     i=i+1
// }
// while(i<=num)

// for (var i = 0; i <= num; i++){
//     if (i % 2 == 0) {
//         console.log(i,"even")
//     }
//     else {
//         console.log(i,"odd")
//     }
// }


// even_and_odd_sum============================================================
// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num============")
// var i = 0
// var evensum = 0
// var oddsum = 0
// while (i <= num) {
//     if (i % 2 == 0) {
//         evensum=evensum+i
//     }
//     else {
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// console.log("total of evensum", evensum);
// console.log("total of oddsum", oddsum);

// do {
//     if (i % 2 == 0) {
//         evensum=evensum+i
//     }
//     else {
//         oddsum=oddsum+i
//     }
//     i=i+1
// }
// while (i <= num)
// console.log("total of evensum", evensum);
// console.log("total of oddsum",oddsum)

// for (var i = 0; i <= num; i++){
//     if (i % 2 == 0) {
//         evensum=evensum+i
//     }
//     else {
//         oddsum=oddsum+i
//     }
// }
// console.log("total of evensum", evensum);
// console.log("total of oddsum",oddsum)

// even_and_odd+count=================================================================

// var readline = require("readline-sync");
// var num = readline.questionInt("enter the any num================");
// var i = 1
// var evencount = 0
// var oddcount = 0
// while (i <= num) {
//     if (i % 2 == 0) {
//         evencount=evencount+1
//     }
//     else {
//         oddcount=oddcount+1
//     }
//     i=i+1
// }
// console.log("total of evencount", evencount);
// console.log("total of oddcount",oddcount)


// do {
//     if (i % 2 == 0) {
//         evencount = evencount + 1
//     }
//     else {
//         oddcount = oddcount + 1
//     }
//     i = i + 1
// }
// while (i <= num);
// console.log("total of evencount", evencount);
// console.log("total of oddcount",oddcount)

// for (var i = 1; i <= num; i++){
//     if (i % 2 == 0) {
//         evencount=evencount+1
//     }
//     else {
//         oddcount=oddcount+1
//     }

// }
// console.log("total of evencount", evencount);
// console.log("total of oddcount",oddcount)


// sum======================================================================
// var readline = require("readline-sync");
// var num = readline.questionInt("enter the any num==============");
// var sum = 0;
// var i = 1
// while (i <= num) {
//     sum = sum + i
//     i=i+1
// }
// console.log(sum)

// do {
//     sum = sum + i
//     i=i+1
// }
// while (i <= num)
// console.log("total of sum",sum)

// for (var i = 0; i <= num; i++){
//     sum=sum+i
// }
// console.log("total of sum",sum)


// posstive_and_neagtive=============================================================
// var readline = require("readline-sync")
// var num1 = readline.questionInt("enter the any num1================");
// var i = 0
// while (i <= num1) {
//     var num2 = readline.questionInt("enter the any num2==============");
//     if (num2 > 0) {
//         console.log(num2,"posstive")
//     }
//     else {
//         console.log(num2,"neagtive")
//     }
//     i=i+1
// }

// for (var i = 0; i <= num1; i++){
//     var num2 = readline.questionInt("enter the any num2=============")
//     if (num2 > 0) {
//         console.log(num2,"posstive")
//     }
//     else {
//         console.log(num2,"neagtive")
//     }
// }

// feboneshish=====================================================
// var num = 7
// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// for (var i = 0; i <= num; i++){
//     var temp = a + b;
//     console.log(temp);
//     b = a;
//     a=temp
// }

// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num=====================");
// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// for (var i = 0; i <= num; i++){
//     var temp = a + b;
//     console.log(temp);
//     b = a;
//     a = temp;
// }

// factoriyal======================================================
// var num = 5
// var fact = 1
// while (num > 0) {
//     fact = fact * num
//     num=num-1
// }
// console.log("fact",fact)

// var a = 7
// var fact = 1
// while (a > 0) {
//     fact = fact * a
//     a=a-1
// }
// console.log("fact",fact)


// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num============");
// var fact = 1
// while (num > 0) {
//     fact = fact * num
//     num=num-1
// }
// console.log("fact",fact)

// table=======================================================
// var a = 5
// var b = 12
// while (a <= b) {
//     var i = 1
//     while (i <= 10) {
//         console.log(a * i)
//         i=i+1
//     }
//     console.log(" ")
//     a=a+1
// }

// var num1 = 2
// var num2 = 9
// while (num1 <= num2) {
//     var i = 1
//     while (i <= 10) {
//         console.log(num1 * i)
//         i=i+1
//     }
//     console.log(" ")
//     num1=num1+1
// }

// var readline = require("readline-sync")
// var num1 = readline.questionInt("enter the any num1=======================");
// var num2 = readline.questionInt("enter the any num2=====================");
// while (num1 <= num2) {
//     var i = 1
//     while (i <= 10) {
//         console.log(num1 * i)
//         i=i+1
//     }
//     console.log(" ")
//     num1=num1+1
// }

// perfect_number============================================================

// var num = 6
// var i = 1
// var sum = 0
// while (i < num) {
//     if (num % i == 0) {
//         sum=sum+i
//     }
//     i=i+1
// }
// if (sum == num) {
//     console.log(sum,"sum is a perfect number")
// }
// else {
//     console.log(sum,"sum is a not perfect number")
// }

// var readline = require("readline-sync")
// var num = readline.questionInt("enter the any num======================");
// var i = 1;
// var sum = 0;
// while (i < num) {
//     if (num % i == 0) {
//         sum=sum+i
//     }
//     i=i+1
// }
// if (sum == num) {
//     console.log(sum,"sum is a perfect number")
// }
// else {
//     console.log(sum,"sum is a not perfect number")
// }

// prime number===============================================================
// var num = 3
// var i = 2
// var count = 0
// while (i <= num) {
//     if (i % 2 == 0) {
//         count=count+1
//     }
//     i=i+1
// }
// console.log("count=====================", count);
// if (count == 1) {
//     console.log(count,"count is a prime number")
// }
// else {
//     console.log(count,"count is a not prime number")
// }

// var readline = require("readline-sync");
// var num = readline.questionInt("enter the any num=================");
// var i = 2;
// var count = 0
// while (i <= num) {
//     if (num % i == 0) {
//         count=count+1
//     }
//     i=i+1
// }
// console.log("count====================", count);
// if (count == 1) {
//     console.log(count,"count is a prime number")
// }
// else {
//     console.log(count,"count is a not prime number")
// }

// Navgurukul=================================================================
// var num = 100
// var i = 1
// while (i <= num) {
//     if (i % 3 == 0 && i % 7 == 0) {
//         console.log(i,"navgurukul")
//     }
//     else if (i % 7 == 0) {
//         console.log(i,"gurukul")
//     }
//     else if (i % 3 == 0) {
//         console.log(i,"nav")
//     }
//     else {
//         console.log(i)
//     }
//     i=i+1
// }

// var readline = require("readline-sync");
// var num = readline.questionInt("enter the any num====================");
// var i = 1;
// while (i <= num) {
//     if (i % 3 == 0 && i % 7 == 0) {
//         console.log(i,"navgurukul")
//     }
//     else if (i % 7 == 0) {
//         console.log(i,"gurukul")
//     }
//     else if (i % 3 == 0) {
//         console.log(i,"nav")
//     }
//     else {
//         console.log(i)
//     }
//     i=i+1
// }

// five_user_input_sum====================================================
// var readline = require("readline-sync");
// var num = readline.questionInt("enter the any num==================");
// var sum = 0
// var i = 1
// while (i <= num) {
//     var num1 = readline.questionInt("enter the any num1=========================")
//     sum = sum + num1
//     i=i+1
// }
// console.log("total of sum",sum)

// lcm==================================================================
// var num1 = 8
// var num2 = 42
// var i = 1
// var lcm = 0
// while (i > 0) {
//     if (i % num1 == 0 && i % num2 == 0) {
//         lcm = i;
//         break
//     }
//     i=i+1
// }
// console.log(lcm)

var readline = require("readline-sync");
// var num1 = readline.questionInt("enter the any num1=============");
// var num2 = readline.questionInt("enter the any num2==============");
// var i = 1
// var lcm = 0
// while (i > 0) {
//     if (i % num1 == 0 && i % num2 == 0) {
//         lcm = i;
//         break
//     }
//     i=i+1
// }
// console.log(lcm)

// hcf===================================================================================
// var x = 8
// var y = 75
// var i = 1
// var hcf = 0
// while (i <= x && i <= y) {
//     if (x % i == 0 && y % i == 0) {
//         hcf=i
//     }
//     i=i+1
// }
// console.log(hcf)

// var readline = require("readline-sync");
// var num1 = readline.questionInt("enter the any num1=================");
// var num2 = readline.questionInt("enter the any num2=================");
// var i = 1;
// var hcf = 0
// while (i <= num1 && i <= num2) {
//     if (num1 % i == 0 && num2 % i == 0) {
//         hcf=i
//     }
//     i=i+1
// }
// console.log(hcf)