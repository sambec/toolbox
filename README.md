# We love PDF

Une boite a outils PDF 100 % front-end, concue pour tourner directement dans le navigateur sans envoyer de fichiers vers un serveur.

## Ce que fait le projet

L'application propose plusieurs outils PDF dans une seule page:

- Fusion de plusieurs PDF
- Decoupe par page, plage ou selection
- Suppression et reorganisation visuelle des pages
- Conversion PDF vers images `PNG` ou `JPG`
- Conversion d'images `PNG`/`JPG` vers PDF
- Signature dessinee, saisie ou importee
- Annotation, dessin et surlignage
- Rotation de pages
- Ajout de filigrane texte
- Compression legere par nettoyage des metadonnees
- Redimensionnement des pages

## Conversion 100 % JavaScript

Oui, on peut ajouter des outils de conversion entierement en JavaScript cote navigateur.

Le nouvel outil `PDF vers images` repose sur:

- `PDF.js` pour afficher/rasteriser les pages
- `JSZip` pour regrouper plusieurs images dans une archive
- `pdf-lib` pour les operations d'edition PDF existantes

Cela permet de:

- ne rien uploader sur un serveur
- fonctionner sur un hebergement statique simple
- garder une experience rapide pour des cas d'usage courants

## Structure actuelle

Le projet est volontairement leger:

- [index.html](/Users/sarah/Documents/GitHub/toolbox/index.html) contient l'interface et la logique JavaScript
- [style.css](/Users/sarah/Documents/GitHub/toolbox/style.css) contient le style global
- [main.html](/Users/sarah/Documents/GitHub/toolbox/main.html) sert de menu principal pour entrer dans les differentes mini-toolboxes
- [common.css](/Users/sarah/Documents/GitHub/toolbox/common.css) porte le style partage entre les pages
- [counters.html](/Users/sarah/Documents/GitHub/toolbox/counters.html) regroupe les outils de temps et de conversions
- [markdown-studio.html](/Users/sarah/Documents/GitHub/toolbox/markdown-studio.html) propose un mini editeur Markdown avec compteur
- [image-lab.html](/Users/sarah/Documents/GitHub/toolbox/image-lab.html) rassemble des outils pour les images

Les bibliotheques sont chargees via CDN dans `index.html`.

## Lancer le projet

Comme c'est un site statique, il suffit d'ouvrir `index.html` dans un navigateur moderne.
