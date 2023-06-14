# Construir la imagen del frontend
FROM node:14 AS frontend
WORKDIR /Ramen_Stadium_Cantero_Shimizu_Mario/ramen_stadium
COPY ramen_stadium/package*.json ./
RUN npm install
COPY ramen_stadium/ .
RUN npm run build

# Construir la imagen del backend
FROM node:14 AS backend
WORKDIR /Ramen_Stadium_Cantero_Shimizu_Mario/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Copiar las imágenes al directorio de uploads en el contenedor
COPY backend/uploads ./uploads

# Crear la imagen final
FROM node:14
WORKDIR /Ramen_Stadium_Cantero_Shimizu_Mario
COPY --from=frontend /Ramen_Stadium_Cantero_Shimizu_Mario/ramen_stadium/dist ./ramen_stadium/dist
COPY --from=backend /Ramen_Stadium_Cantero_Shimizu_Mario/backend ./backend
EXPOSE 3001
CMD ["npm", "start"]
