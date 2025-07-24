import fs from 'fs';

export function getTlds() {
    return fs.readFileSync('./tlds.txt', { encoding: 'utf8', flag: 'r' }).split('\n').filter((tld) => !tld.startsWith("#"))
}

export function isValidTld(tld){
    return tld ? getTlds().includes(tld.toUpperCase()): false
}

export function hasValidTld(domain){
    if(domain){
        const splitDomain = domain.split(".")
        return domain.match(/^([A-Za-z0-9-]{1,63}\.){1,127}[A-Za-z]{2,63}$/gm) !== null && isValidTld(splitDomain[splitDomain.length - 1])
    }
    return false
}