# SynapsÉTS

Site web du club SynapsÉTS utilisant le thème [Cohub Hugo](https://github.com/StaticMania/hugo-cohub#cohub-hugo) et [AIR](https://github.com/syui/hugo-theme-air).


## Dépendances

- [Hugo](https://gohugo.io/) 

## Développement locale

- Cloner le repertoire

- Éxecuter ```hugo server --disableFastRender``` à la racine du repository du projet

## Deploiement

- TODO

## Mettre à jour le contenu

- Assurer vous toujours d'avoir votre repository local à jour avec un ```git pull```.
- Considérer la documentation [suivante](https://www.markdownguide.org/cheat-sheet/) pour vous aider dans la syntaxe des fichiers avec une extension `.md` 
### Page Membres

- Modifier le titre 

    - Pour modifier le titre ou ajouter du texte en dessous du titre (sous-titre), modifier le ficher `content/membres/_index.md` de la façon suivante :
```
---
title: "Nos membres"
date: 2022-01-08T10:41:03+06:00
subTitle: > "Nouvelle phrase qui apparaît en dessous du titre" 
---
Texte qui apparait en dessous du header contenant le titre et le sous-titre 
```
- Ajouter un membre
    - Modifier le ficher `data/membre.yml` de la façon suivante :
```
---
enable: true

membre:
  - name: "Alexandre-Xavier Panu-Bule"
    post: "Capitaine et Co-directeur mécanique"
    image: "images/team/Alexandre_Panu-Bule.jpg"
  - name: "Mubashar Hussain"
    post: "Co-capitaine et Directeur électrique"
    image: "images/team/mubashar_hussain.jpg"
  - name: "Jacques Veneziano"
    post: "Trésorier et chef d'équipe Micsa"
    image: "images/team/Jacques_Veneziano.jpg"
  - name: "Jean-Rémi Martin"
    post: "Directeur Mécanique"
    image: "images/team/Jean-Rémi_Martin.jpg"
    ...
  - name: "Nom nouveau membre"
    post: "Nom du poste"
    image: "chemin vers l<image qui doit être placé dans le folder `images/team/`
```
- Notez que la position défini l'ordre dans lequel le membre sera insérer sur la page.
- **ATTENTION** : La dimension de l'image du membre doit être de **255x255px** sans quoi l'image sera mal dimensionnée.
### Page projet
- Ajouter projet
    - Ajouter un nouveau fichier `.md` dans le repertoire `content/projet/nomProjet.md` et ajouté le contenu suivant :
```
---
title: "nomDeVotreProjet"
date: Date publication (format : 2022-01-06T11:17:17+06:00)
featureImage: images/projet/imagePourVotreProjet.png
---
  Contenu du texte pour votre projet
```
- Modifier projet
    - Modifier le contenu de votre projet qui se trouve dans le repertoire `content/projet/`.
- Modifier la page Projet
    - Modifier le contenu de la page projet où la liste de vos projet est présenté avec le fichier `content/projet/_index.md`.
### Ajouter un évènement
- Ajouter évènement
    - Ajouter un nouveau fichier `.md` dans le repertoire `content/evenement/nomEvenement.md` et ajouté le contenu suivant :
```
---
title: "nomDeVotreEvenement"
date: Date publication (format : 2022-01-06T11:17:17+06:00)
featureImage: images/evenement/imagePourVotreEvenement.png
---
  Contenu du texte pour votre évènement
```
- Modifier évènement
    - Modifier le contenu de votre evenement qui se trouve dans le repertoire `content/evenement/`.
- Modifier la page Évènement
    - Modifier le contenu de la page evenement où la liste de vos évènement est présenté avec le fichier `content/evenement/_index.md`.
### Modification des informations du club (adresse, logo, lien vers réseaux sociaux)
- Le fichier `config.toml` à la racine du repository du projet contient toute les informations tel que l'addresse, les liens vers vos réseaux sociaux, le logo choisi pour le header de votre navbar ainsi que celui du footer. 
- Noter que la section [Menu] permet de modifier l'ordre des éléments dans votre navbar et de changer le nom des sections du navbar.