#!/bin/bash
# Installe l'habillage DigiLang dans CryptPad (Docs DigiLang). Voir README.md.
# Usage, en tant que l'utilisateur cryptpad : bash ~/cryptpad-digilang/installer.sh [dossier de CryptPad]
set -euo pipefail

ICI="$(cd "$(dirname "$0")" && pwd)"
CRYPTPAD="${1:-$HOME/cryptpad}"
INCLUDE="src/less2/include"

if [ ! -f "$CRYPTPAD/customize.dist/$INCLUDE/colortheme.less" ]; then
    echo "CryptPad introuvable dans $CRYPTPAD" >&2
    exit 1
fi

mkdir -p "$CRYPTPAD/customize"
cp -a "$ICI/customize/." "$CRYPTPAD/customize/"

# Thèmes : copie du thème de CryptPad de cette version, puis les valeurs de DigiLang à la fin
# (en LESS, la dernière définition d'une variable gagne). Une mise à jour de CryptPad garde
# ainsi ses nouvelles variables.
mkdir -p "$CRYPTPAD/customize/$INCLUDE"
{ cat "$CRYPTPAD/customize.dist/$INCLUDE/colortheme.less"; echo; cat "$ICI/theme/clair.less"; } \
    > "$CRYPTPAD/customize/$INCLUDE/colortheme.less"
{ cat "$CRYPTPAD/customize.dist/$INCLUDE/colortheme-dark.less"; echo; cat "$ICI/theme/sombre.less"; } \
    > "$CRYPTPAD/customize/$INCLUDE/colortheme-dark.less"

echo "Habillage DigiLang installé dans $CRYPTPAD/customize."
echo "Ensuite : cd $CRYPTPAD && npm run build, puis redémarrer CryptPad."
