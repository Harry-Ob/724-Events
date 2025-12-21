# Issues — Préparation avant mise en ligne

Ce document à destination du prochain développeur a pour but de lister les choses à faire avant la mise en ligne du nouveau site.

## Bugs à fixer

J’ai repéré les bugs suivants :

1. **Carousel (évènements)**
   - Le carrousel affiche les évènements par ordre aléatoire alors qu'il devrait les afficher par date en ordre décroissant.

2. **Filtre "Nos réalisations"**
   - Le filtre pour la section "Nos réalisations" ne fonctionne pas.
   - Il faut que les réalisations soient filtrables et affichent les bons mois.

3. **Formulaire**
   - Le formulaire s’envoie, mais le message de confirmation ne s’affiche pas.

> Pour fixer ces bugs, il faudra implémenter des petites portions de code manquantes et corriger quelques “typos”.

## Recherche d’autres bugs

Je n’ai pas eu le temps de repérer tous les bugs. Il faudra rechercher les autres et les fixer en fonction du besoin de Jean-Baptiste.

- Certains bugs sont détectables via les tests.
- Possibilité de trouver des bugs grâce aux tests invalides.

### Outils conseillés

- **React Developer Tools** : pour comprendre l’architecture du projet et la propagation du state/context.

## Tests

L’application est testée en grande partie :

- Les composants sont testés (**tests unitaires**).
- Le code est entièrement testé.

⚠️ Attention à ce que tous les voyants de tests passent au vert une fois les bugs résolus.

## Recette

Il sera nécessaire de réaliser un **cahier de recette** pour confirmer que le site :

- est fiable,
- correspond aux besoins de **77events**.

Plus tard, il pourra aussi servir de base pour valider les futurs développements.

## Pour aller plus loin (facultatif)

J’avais aussi prévu de réaliser :

- **3 tests unitaires**
- **3 tests d’intégration**

afin d’améliorer la couverture de code. Cette étape est facultative, mais intéressante si le temps le permet.

--------------------------------------------------------------------------- 
le tri par date est bien par ordre décroissant ; done
le slider envoie bien vers la slide suivante ; => 
le filtre par type d’évènement fonctionne ;  DONE 
le helper getMonth renvoie le bon mois ; DONE 
la “callback” onSuccess est exécutée ; =>DONE
la value last est bien implémentée pour que le bon évènement s’affiche dans le footer. => 