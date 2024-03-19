let list:string [] = ["Baseer","Ajmal","Abdulraqeeb",]
let Notcoming:string []=["furaqan","AbdulRaqeeb"]

list.push("Abdul")
list.pop()
list.pop()


console.log(`Hey ${list[0]} You guyse still invited`,)

console.log(`Hey ${list[1]} You guyse still invited`,)
console.log(`  Sorry ${Notcoming[0]} I cant Invite You Beacuse Ihave Not Enough space At Home`,)

console.log(` ${Notcoming[1]} Sorry dont come at My House i Dont Have Enough space At Home`,)


console.log(`Here is the List Of People Who Making dinner this night With Me: ${list[0]} ${list[1]} `)