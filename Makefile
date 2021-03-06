.PHONY: js-bindings
js-bindings:
	#rm -f tator-openapi-schema.yaml
	#curl -s -L https://www.tatorapp.com/schema > tator-openapi-schema.yaml
	docker run -it --rm \
		-v $(shell pwd):/pwd \
		openapitools/openapi-generator-cli:v5.0.0-beta \
		generate -c /pwd/config.json \
		-i /pwd/tator-openapi-schema.yaml \
		-g javascript -o /pwd/tator-js-with-promises