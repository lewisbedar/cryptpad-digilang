// SPDX-FileCopyrightText: 2023 XWiki CryptPad Team <contact@cryptpad.org> and contributors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/*
 * You can override the configurable values from this file.
 * The recommended method is to make a copy of this file (/customize.dist/application_config.js)
   in a 'customize' directory (/customize/application_config.js).
 * If you want to check all the configurable values, you can open the internal configuration file
   but you should not change it directly (/common/application_config_internal.js)
*/

(() => {
const factory = (AppConfig) => {
    // Docs DigiLang : réglages propres à DigiLang (voir DIGILANG.md).

    // Pages de DigiLang, affichées sur l'accueil et dans le menu « À propos »
    AppConfig.privacy = 'https://www.digilang.fr/confidentialite';
    AppConfig.imprint = 'https://www.digilang.fr/mentions-legales';

    // Les visiteurs sans compte ne créent ni ne gardent de documents : seuls les enseignants
    // (comptes DigiLang) en créent. Un lien de partage reste ouvert à tous (élèves sans compte).
    AppConfig.disableAnonymousPadCreation = true;
    AppConfig.disableAnonymousStore = true;

    // Pas de questionnaire de l'équipe CryptPad dans le menu
    AppConfig.surveyURL = "";

    // Langues parlées par l'administrateur (tickets de support)
    AppConfig.supportLanguages = [ 'fr', 'en' ];
    
    return AppConfig;
};


// Do not change code below
if (typeof(module) !== 'undefined' && module.exports) {
    module.exports = factory(
        require('../www/common/application_config_internal.js')
    );
} else if ((typeof(define) !== 'undefined' && define !== null) && (define.amd !== null)) {
    define(['/common/application_config_internal.js'], factory);
}

})();
