# eff-id

## Partie Connexion 
- **[GET] /connexion?email=_email_&password=_password_**
  
  Renvoie un status 200 si l'utilisateur possède bien un compte avec les bonnes données de connexion
  >  {
  >    "error": false,
  >    "message": "Welcome"
  >  }
  
  Sinon, renvoie un status 400 avec un message d'erreur
  >  {
  >    "error": true,
  >    "message": "Sorry there are no users with these informations"
  >  }
  
## Partie Inscription
 - **[POST] /inscription**
   
   Crée l'utilisateur en base de données
   
   Prend en paramètres :
   >  - nom         [string]
   >  - prenom      [string]
   >  - email       [string]
   >  - password    [string]
   >  - id_puce     [int]
   >  - id_type     [int] (null)
   >  - id_classe   [int] (null)
   
   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't create this user"
   >  }

## Partie Users
 - **[GET] /users**

   Renvoie la liste de tous les utilisateurs
   >  - id_user     [int]
   >  - nom         [string]
   >  - prenom      [string]
   >  - email       [string]
   >  - id_puce     [int]
   >  - id_type     [int]
   >  - nom_classe  [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there are no users"
   >  }

 - **[GET] /users/_idUser_**
   
   Renvoie toutes les informations d'un utilisateur particulier
   >  - id_user     [int]
   >  - nom         [string]
   >  - prenom      [string]
   >  - email       [string]
   >  - password    [string]
   >  - id_puce     [int]
   >  - id_type     [int]
   >  - nom_classe  [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there is no user"
   >  }

 - **[POST] /users/_idUser_**
   
   Modifie les informations d'un utilisateur particulier

   Prend en paramètres :
   >  - nom         [string]
   >  - prenom      [string]
   >  - email       [string]
   >  - password    [string]
   >  - id_puce     [int]
   >  - id_type     [int]
   >  - id_classe   [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't update this user"
   >  }

 - **[DELETE] /users/_idUser_**
   
   Supprime le compte d'un utilisateur particulier
   
   Renvoie un status 200 si l'utilisateur a bien été supprimé
   >  {
   >    "error": false,
   >    "message": "Deleted"
   >  }

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't delete this user"
   >  }

## Partie Types
 - **[GET] /types**

   Renvoie la liste de tous les types
   >  - id_type     [int]
   >  - nom         [string]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there are no types"
   >  }

 - **[GET] /types/_idType_**
   
   Renvoie toutes les informations d'un type particulier
   >  - id_type     [int]
   >  - nom         [string]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there is no type"
   >  }

 - **[POST] /types**
   
   Crée un nouveau type

   Prend en paramètres :
   >  - nom         [string]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't create this type"
   >  }

 - **[POST] /types/_idType_**
   
   Modifie les informations d'un type particulier

   Prend en paramètres :
   >  - nom         [string]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't update this type"
   >  }

 - **[DELETE] /types/_idType_**
   
   Supprime un type
   
   Renvoie un status 200 si le type a bien été supprimé
   >  {
   >    "error": false,
   >    "message": "Deleted"
   >  }

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't delete this type"
   >  }

## Partie Classes
 - **[GET] /classes**

   Renvoie la liste de toutes les classes
   >  - id_classe   [int]
   >  - nom         [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there are no classes"
   >  }

 - **[GET] /classes/_idClasse_**
   
   Renvoie toutes les informations d'une classe particulière
   >  - id_classe   [int]
   >  - nom         [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry there is no classe"
   >  }

 - **[POST] /classes**
   
   Crée une nouvelle classe

   Prend en paramètres :
   >  - nom         [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't create this classe"
   >  }

 - **[POST] /classes/_idClasse_**
   
   Modifie les informations d'une classe particulière

   Prend en paramètres :
   >  - nom         [string]
   >  - effectif    [int]

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't update this classe"
   >  }

 - **[DELETE] /classes/_idClasse_**
   
   Supprime une classe
   
   Renvoie un status 200 si la classe a bien été supprimée
   >  {
   >    "error": false,
   >    "message": "Deleted"
   >  }

   Sinon, renvoie un status 400 avec un message d'erreur
   >  {
   >    "error": true,
   >    "message": "Sorry we can't delete this classe"
   >  }