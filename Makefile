init:
	@echo "Construção inicial da aplicação..."
	docker network inspect app_network > /dev/null 2>&1 || \
	docker network create -d bridge app_network
	cp .env.example .env
	cp config/config-example.json config/config.json
	docker-compose up --build -d

build:
	@echo "Inicializando e construindo a aplicação..."
	docker-compose up --build -d

build-app-watch:
	@echo "Reconstruindo o container [app]..."
	docker-compose up --build app

db-seed:
	@echo "Seeding..."
	docker-compose exec app npx sequelize-cli db:seed:all

up:
	@echo "Levantando a aplicação..."
	docker-compose up -d

down:
	@echo "Removendo containers da aplicação..."
	docker-compose down

start:
	@echo "Iniciando a aplicação..."
	docker-compose start

stop:
	@echo "Paralizando a aplicação..."
	docker-compose stop

status:
	@echo "Status da aplicação..."
	docker-compose ps

log:
	@echo "Logs da aplicação..."
	docker-compose logs

migrate-db:
	docker-compose exec app npx sequelize-cli db:migrate


undo-migrate:
	docker-compose exec app npx sequelize-cli db:migrate:undo

migrate-seed:
	@echo "migranting and seeding db"
	docker-compose exec app npx sequelize-cli db:migrate
	docker-compose exec app npx sequelize-cli db:seed:all	