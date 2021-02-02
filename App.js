var { execSync } = require('child_process'),
{ join } = require('path'),
{readdirSync, lstatSync , existsSync} = require('fs');
module.exports = (branchn,branchb,src) => {
if(!(branchb&&branchn&&src)) throw Error('Please enter old branch , new branch , source correctly')
getDir(src).forEach(dirs => {
try{
if((getDir(`./${dirs}/`)).includes(`${dirs}/.git`)) execSync(`cd ${dirs} && git branch -m ${branchn} ${branchb} && cd ..`)
else console.log(dirs + ' : dosnt have git inited')
}
catch(error){
console.log( dirs+ ' Has ' + error.stderr.toString())
}
})}


function getDir(src) {
var isDirectory = source => lstatSync(source).isDirectory()
return readdirSync(src).map(name => join(src, name)).filter(isDirectory)
}
function isGit(src) {
return getDir(src).includes(src+'.git')
}