QuickNotes - Gestionnaire de Notes Personnelles
QuickNotes est une application minimaliste conçue pour créer, consulter, mettre à jour et supprimer des notes personnelles. Cette application permet aux utilisateurs de gérer leurs notes en toute sécurité grâce à une interface simple.

Technologies Utilisées : 

Backend : Node.js, Express.js, MongoDB
Frontend : React.js
Déploiement : Docker, Kubernetes, CI/CD (GitHub Actions)

# Installation : 

Backend.

Clonez le dépôt.
Naviguez dans le répertoire backend.
Exécutez npm install.
Créez un fichier .env avec votre URI MongoDB.

Frontend.

Clonez le dépôt.
Naviguez dans le répertoire frontend.
Exécutez npm install.

# Exécution Locale avec Docker.
Pour exécuter à la fois le backend et le frontend localement avec Docker, utilisez :

docker-compose up --build

kubectl apply -f kubernetes/
