NY: nginx


prod:
		@docker-compose -f docker-compose-prod.yml up --build

dev:
		@docker-compose -f docker-compose.yml up --build

dev-hugo: 
		@hugo serve --source=./ -D --disableFastRender


