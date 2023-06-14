# Define la imagen base
FROM node:14

# Configura el directorio de trabajo
WORKDIR /Ramen_Stadium_Cantero_Shimizu_Mario/backend

# Copia los archivos necesarios
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto del backend
EXPOSE 4800

# Define el comando de inicio
CMD ["node", "app.js"]

