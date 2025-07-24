import os

with open(
    f"{os.path.dirname(os.path.realpath(__file__))}/tlds.txt",
    encoding="utf-8",
) as f:
    tlds = f.read().lower().strip().splitlines()


def get_tlds() -> list[str]:
    return tlds


def is_valid_tld(tld: str) -> bool:
    return tld.lower() in tlds


def has_domain_valid_tld(domain: str) -> bool:
    return is_valid_tld(domain.split(".")[-1])
