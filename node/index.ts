import tlds from "./tlds.ts";

function isValidTld(tld: string): boolean {
    return tlds.includes(tld.toLowerCase())
}

function hasDomainValidTld(domain: string): boolean {
    const splitDomain = domain.split(".")
    return isValidTld(splitDomain[splitDomain.length - 1])
}

function getTlds(): string[]{
    return tlds
}

export {hasDomainValidTld, isValidTld, getTlds}
