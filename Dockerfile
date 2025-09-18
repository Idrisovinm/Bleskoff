# Multi-stage build для оптимизации размера образа

# Стадия сборки
FROM node:22-alpine AS build-stage

# Установка рабочей директории
WORKDIR /app

# Копирование файлов зависимостей
COPY package*.json ./

# Установка зависимостей
RUN npm ci --only=production=false

# Копирование исходного кода
COPY . .

# Сборка приложения
RUN npm run build

# Продакшн стадия
FROM nginx:alpine AS production-stage

# Копирование собранного приложения из стадии сборки
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Копирование конфигурации nginx для SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открытие порта
EXPOSE 80

# Запуск nginx
CMD ["nginx", "-g", "daemon off;"]