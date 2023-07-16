.PHONY: report codegen test

test:
	npx playwright test

report:
	npx playwright show-report

codegen:
	@read -p "Enter the URL: " url; \
	npx playwright codegen $$url
