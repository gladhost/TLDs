import * as fs from "fs";

let content = 'export default ['

fs.readFileSync("./tlds.txt", { encoding: 'utf8', flag: 'r' })
    .trim()
    .split('\n')
    .filter((tld:string) => !tld.startsWith("#"))
    .forEach((tld:string) => {content += '"' + tld.toLowerCase() + '",'})

fs.writeFileSync("./tlds.ts", content + "];", 'utf8');
