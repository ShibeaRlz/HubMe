docker/swagger/bundle:
	docker run -v $(PWD):/tmp --rm redocly/cli:latest bundle /tmp/docs/swagger/root.swagger.yml --output=docs/swagger/generated.gen.swagger.yml
 
docker/swagger/validate:
	docker run -v ${PWD}:/tmp --rm openapitools/openapi-generator-cli validate -i /tmp/docs/swagger/generated.gen.swagger.yml