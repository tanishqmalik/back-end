const path = require('path')

const myPath = '/Users/tanishqmalik/Library/CloudStorage/GoogleDrive-tanishqvideo@gmail.com/My Drive/codes cloud/react2/public/index.html'

const pathInfo = {
    filename: path.basename(myPath),
    foldername: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteorNot: path.isAbsolute(myPath),
    detailInfo : path.parse(myPath),
}

console.log(pathInfo)



console.log(path.join('folder1', 'folder2', 'folder3', 'file.txt')) // relative
console.log(path.resolve('folder1', 'folder2', 'folder3', 'file.txt')) //absolute
