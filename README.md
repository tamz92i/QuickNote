# 📝 QuickNotes - Gestionnaire de Notes Personnelles

QuickNotes est une application moderne et minimaliste conçue pour gérer vos notes personnelles. Elle vous permet de créer, consulter, mettre à jour et supprimer vos notes en toute sécurité et simplicité.

## 📅 Créé par : Tamim Couvillers & Ryan Sion

## 🚀 Technologies Utilisées

- **Backend** : Node.js, Express.js, MongoDB
- **Frontend** : React.js
- **Déploiement** : Docker, Kubernetes, CI/CD (GitHub Actions)

## 📦 Installation

### Cloner le dépôt

Clonez le dépôt sur votre machine :

```bash
git clone https://github.com/tamz92i/quicknote.git
```

Cela clonera à la fois le frontend et le backend dans un seul dépôt.

### Backend

1. Allez dans le répertoire `backend` :
    ```bash
    git clone https://github.com/ton-utilisateur/quicknotes.git
    ```
2. Allez dans le répertoire `backend` :
    ```bash
    cd backend
    ```
2. Installez les dépendances :
    ```bash
    npm install
    ```
3. Créez un fichier `.env` avec votre URI MongoDB.

### Frontend

1. Allez dans le répertoire `frontend` :
    ```bash
    git clone https://github.com/ton-utilisateur/quicknotes.git
    ```
2. Allez dans le répertoire `frontend` :
    ```bash
    cd frontend
    ```
2. Installez les dépendances :
    ```bash
    npm install
    ```

## ⚙️ Exécution Locale avec Docker

Pour exécuter à la fois le backend et le frontend localement avec Docker, utilisez la commande suivante dans le répertoire racine du projet :

```bash
docker-compose up --build
```

Cela démarre les services backend et frontend dans des conteneurs Docker.

## 🛠️ Déploiement Kubernetes

Appliquez les fichiers de configuration Kubernetes :

```bash
kubectl apply -f kubernetes/
```

Cela déploiera votre application à l'aide de Kubernetes pour une gestion scalable.

## 💬 Contribuer

Vous souhaitez contribuer à QuickNotes ? N'hésitez pas à ouvrir une issue ou une pull request. Toute contribution est la bienvenue !