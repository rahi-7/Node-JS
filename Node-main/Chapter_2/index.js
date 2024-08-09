const fspromises = require('fs').promises;
const path = require('path')

const fileOps = async () => {
    try{
        const data = await fspromises.readFile(path.join(__dirname, "files", "starter.txt"), 'utf-8')
        await fspromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data)
        await fspromises.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "\n\nNice to meet you.")
        await fspromises.rename(path.join(__dirname, "files", "promiseWrite.txt"), path.join(__dirname, "files", "promiseComplete.txt"))
        const newdata = await fspromises.readFile(path.join(__dirname, "files", "promiseComplete.txt"), 'utf-8')

    }catch (err){
        console.error(err)
    }
}

fileOps();

/* fs.readFile(path.join(__dirname, "files", "starter.txt"), 'utf-8', (err,data) =>{
    if (err) throw err;
    console.log(data)
})

fs.writeFile(path.join(__dirname, "files", "reply.txt"), 'Nice to meet you', err => {
    if (err) throw err;
    console.log("Write Complete")
})
 */

/* process.on('uncaughtException', err => {
    console.error(`There was an uncaught error ${err}`)
    process.exit(1)
}) */