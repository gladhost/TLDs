download:
	curl -o tlds.txt https://data.iana.org/TLD/tlds-alpha-by-domain.txt
	tee ./node/tlds.txt ./python/tlds/tlds.txt < ./tlds.txt >/dev/null

build: download
	docker compose run --rm node
	docker compose run --rm python

test:
	docker compose run --rm node npm test
	docker compose run --rm python python3 tlds/test_main.py
