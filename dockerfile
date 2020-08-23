# Image de base node compatible arm32v7
FROM arm32v7/node:10.21

# Dossier application du conteneur
WORKDIR /app

# Installation des dependances
COPY package*.json ./
RUN npm install

# Copie du code source application
COPY . .

# Ouverture du port pour le conteneur
EXPOSE 10000

# Execution du runtime
CMD [ "node", "server.js" ]
