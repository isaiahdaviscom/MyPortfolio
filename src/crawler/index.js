const path = require("path")
const fs = require("fs")

const dirPath = path.join(__dirname, "../content");
let postlist = []

const getPosts = () => {
    let data;
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            return console.log("Failed to list contents of directory: " + err)
        }
        files.forEach((file, i) => {
            let obj = {}
            let post
            fs.readFile(`${dirPath}/${file}`, "utf8", (err, contents) => {
                const getMetadataIndices = (acc, elem, i) => {
                    if (/^---/.test(elem)) {
                        acc.push(i)
                    }
                    return acc
                }
                const parseMetadata = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        let metadata = lines.slice(metadataIndices[0] + 1, metadataIndices[1])
                        metadata.forEach(line => {
                            obj[line.split(": ")[0]] = line.split(": ")[1]
                        })
                        return obj
                    }
                }
                const parseContent = ({lines, metadataIndices}) => {
                    if (metadataIndices.length > 0) {
                        lines = lines.slice(metadataIndices[1] + 1, lines.length)
                    }
                    return lines.join("\n")
                }
                const lines = contents.split("\n")
                const metadataIndices = lines.reduce(getMetadataIndices, [])
                const metadata = parseMetadata({lines, metadataIndices})
                const content = parseContent({lines, metadataIndices})
                const date = new Date(metadata.date)
                const timestamp = date.getTime() / 1000
                post = {
                    id: timestamp,
                    title: metadata.title ? metadata.title : "No title given",
                    author: metadata.author ? metadata.author : "No author given",
                    date: metadata.date ? metadata.date : "No date given",
                    content: content ? content : "No content given",
                }
                postlist.push(post)
                if (i === files.length - 1) {
                    const sortedList = postlist.sort ((a, b) => {
                        return a.id < b.id ? 1 : -1
                    })
                    data = JSON.stringify(sortedList)
                    fs.writeFileSync("src/posts.json", data)
                }
                
            })
        })
    })
    return;
}

console.log(getPosts());

// // IMPORTS
// const { join, sep } = require('path');
// const fs = require('fs');
// const contentDirPath = join(__dirname, "../content");
// const markdownjsx = require('markdown-to-jsx');
// // GLOBALS
// const markdownHR = "---";
// let contents = [];                          // A collection of markdown files
// // SUPPORT
// function parseMarkdown(data) {
//     // metadata
//     let startPosition = data.search(markdownHR)+markdownHR.length;
//     let endPosition = data.slice(startPosition).search(markdownHR)+startPosition;
//     let ymlHead = data.slice(startPosition,endPosition);
    
//     ymlHead = "{\"" +
//         ymlHead.trim()
//             .replace(/\s+:|:\s+/g,':')
//             .replace(/(?:\r\n|\r|\n)/g, '\",\"')
//             .replace(/:/g,'" : "') +
//             "\"}"
//     console.log(JSON.parse(ymlHead));        

//     // htmlText
// 	const htmlText = data
// 		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
// 		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
// 		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
// 		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
// 		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
// 		.replace(/\*(.*)\*/gim, '<i>$1</i>')
// 		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
// 		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
// 		.replace(/\n$/gim, '<br />')

// 	return htmlText.trim()
// }

// async function getContents () {
//     await fs.readdir(contentDirPath, (err, files) =>{
//         if (err){
//             return console.log(`Failed to list contents of directory: ${err}`);
//         }
//         files.forEach((filename, i)=>{
//             let file = {};
//             let filePath = `${contentDirPath}/${filename}`;
            
//             fs.readFile(filePath, "utf-8", (err, fileData)=>{
//                 console.log(filename, i, "\n");
//                 parseMarkdown(fileData);
//             })
//         })
//     })
// }

// getContents();