WORKSPACE = gatsby-theme-content-editing-sandbox

.DEFAULT:
	@echo 'App targets:'
	@echo
	@echo '    image         build the local development image'
	@echo '    deps          install dependencies using Yarn'
	@echo '    local         spin up local development environment'
	@echo '    local-down    tear down local environment'
	@echo '    serve         build and serve the site'
	@echo '    build         build the site'
	@echo '    test          run Jest tests'
	@echo

default: .DEFAULT

image:
	docker build . -t gatsby:dev

deps:
	docker-compose run --rm app yarn

local: local-down
	docker-compose run --rm --service-ports app yarn workspace $(WORKSPACE) docker:develop

local-down:
	docker-compose down

serve: local-down
	docker-compose run --rm --service-ports app yarn workspace $(WORKSPACE) docker:serve

build: local-down
	docker-compose run --rm app app yarn workspace $(WORKSPACE) build

test:
	docker network create docker-dev
	docker-compose run --rm app yarn workspace $(WORKSPACE) test

mirror-to-github:
	./mirror.sh
