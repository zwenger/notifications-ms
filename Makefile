
.PHONY: build
build:
	docker buildx build ${PWD}/src -f ${PWD}/Dockerfile \
		-t ms_wallet-notifications:local --progress plain \
		--target image

.PHONY: build
run:
	docker run --rm -ti -p 4000:4000 -v ${PWD}/.env:/app/.env:ro \
		ms_wallet-notifications:local
.PHONY: run
run:
	docker-compose -f docker-compose.data.yml up 

.PHONY: swagger
swagger:
	docker run --rm -d --name swu1 -p 14080:8080 \
		-e SWAGGER_JSON=/data/latest.yml \
		-v ${PWD}/api:/data \
		swaggerapi/swagger-editor
