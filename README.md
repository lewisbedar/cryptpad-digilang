# CryptPad pour DigiLang (Docs DigiLang)

Habillage de [CryptPad](https://cryptpad.org) pour les **docs DigiLang** (`docs.digilang.fr`), la suite
bureautique chiffrée proposée aux enseignants de [DigiLang](https://www.digilang.fr).

Ce dépôt ne contient que le dossier `customize/` de CryptPad : CryptPad sert un fichier de `customize/` à la place
de son homonyme de `customize.dist/`. Le code de CryptPad lui-même n'est pas modifié.

CryptPad est un logiciel libre de XWiki SAS et de ses contributeurs, sous licence GNU AGPL 3.0 ; ce dépôt suit la
même licence. Figtree est sous licence SIL Open Font License 1.1 (`customize/fonts/Figtree-OFL.txt`).

## Ce qui change

| Fichier | Rôle |
|---|---|
| `src/less2/include/colortheme.less` | Thème clair : importe celui de CryptPad, puis teal `#1F7A70` (liens, titres), terracotta `#C7431D` (boutons principaux), fond `#F4F6F5`, police Figtree. |
| `src/less2/include/colortheme-dark.less` | Thème sombre, même principe, teal éclairci. |
| `src/less2/include/font.less` | Déclare Figtree ; masque le lien « Fonctionnalités » (offres de cryptpad.fr). |
| `fonts/IBMPlexMono-Medium.woff2` | **Figtree Bold** sous le nom de la police des titres de CryptPad : les titres passent en Figtree, écran de chargement compris. |
| `fonts/Figtree-*.woff2` | Figtree, hébergée sur le serveur (aucune police chargée ailleurs). |
| `CryptPad_logo_hero.svg` | Logo DigiLang de la page d'accueil (`/api/logo`). |
| `favicon/main-favicon.*`, `main-favicon.png`, `favicon.ico` | Icône d'onglet DigiLang. |
| `application_config.js` | Liens vers la politique de confidentialité et les mentions légales de DigiLang ; visiteurs sans compte : ni création ni stockage de documents (un lien de partage reste ouvert) ; pas de questionnaire CryptPad. |

Les logos de CryptPad (`CryptPad_logo.svg`, `CryptPad_logo_grey.svg`) ne sont **pas** remplacés : CryptPad les affiche
toujours à côté du mot « CryptPad » (pied de page, menu « À propos », chargement), ce qui reste le crédit du logiciel.

Le nom (« Docs DigiLang ») et la description de l'instance se règlent dans l'administration de CryptPad, pas ici.
**Ne pas envoyer de logo depuis l'administration** : il serait écrit dans `customize/` et effacé à la mise à jour suivante.

## Installer ou mettre à jour

Sur le serveur, en tant que `cryptpad` (voir le guide du VPS de DigiLang, `docs/vps/03-digilang-docs.md`, section 3.11) :

```
cd ~/cryptpad-digilang && git pull
rsync -a ~/cryptpad-digilang/customize/ ~/cryptpad/customize/
cd ~/cryptpad && npm run build
```

puis `sudo systemctl restart cryptpad`.

Après une mise à jour de CryptPad, vérifier que les fichiers remplacés existent toujours dans `customize.dist`
(`font.less`, `IBMPlexMono-Medium.woff2`, `CryptPad_logo_hero.svg`, `application_config.js`) et comparer
`customize.dist/src/less2/include/font.less` avec celui de ce dépôt.
