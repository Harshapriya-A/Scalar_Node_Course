const fs = require('fs')

//let fileContent = fs.readFileSync('F1.txt')

//console.log('data of F1 ->' + fileContent)

//fs.writeFileSync('F1.txt' ,'I am updating to F2')
//fs.appendFileSync('F1.txt','I am appending to F2')
//fs.unlinkSync('F1.txt')
//console.log('I am deleting the whole file')

fs.mkdirSync('myDir')

let folderpath = 'C:\\Users\\rajse\\nodeex\\myDir'

let folderContent =fs.readdirSync(folderpath)

console.log('Folder Content' , folderContent)


