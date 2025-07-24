download:
	curl -o tlds.txt https://data.iana.org/TLD/tlds-alpha-by-domain.txt
	tee ./node/tlds.txt < ./tlds.txt >/dev/null
	docker compose run node

test:
	docker compose run node npm test
