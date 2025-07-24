# Python

## Installation

```
pip install gladhost-tlds
```

## Functions

- `get_tlds() -> list[str]`
- `is_valid_tld(tld:str) -> bool`
- `has_domain_valid_tld(domain:str) -> bool`

## Examples

```
import tlds

print(tlds.get_tlds())
print(tlds.is_valid_tld("com"))
print(tlds.has_domain_valid_tld("example.com"))
```

expected results:

- `['com', 'fr', ...]`
- `true`
- `true`
