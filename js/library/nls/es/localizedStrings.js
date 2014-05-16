﻿/*global define */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/** @license
| Copyright 2013 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
define({
    showNullValue: "@es@ N/A",
    buttons: {
        okButtonText: "@es@ OK",
        link: "@es@ Link",
        email: "correo electrónico",  // Shown next to icon for sharing the current map extents via email; works with shareViaEmail tooltip
        Facebook: "Facebook",  // Shown next to icon for sharing the current map extents via a Facebook post; works with shareViaFacebook tooltip
        Twitter: "Twitter",
        embedding: "Embedding"// Shown next to icon for sharing the current map extents via a Twitter tweet; works with shareViaTwitter tooltip
    },
    tooltips: {
        search: "Buscar",
        route: "@es@ Route",
        locate: "Ubicación actual",
        share: "Compartir",
        help: "Ayuda",
        clearEntry: "@es@ Clear"
    },
    titles: {
        directionsDisplayText: "@es@ Area of Interest",
        informationPanelTitle: "@es@ Information for current map view",
        webpageDisplayText: "@es@ Copy/paste HTML into your web page",
        splashScreenContent: "@es@  Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda.",
        serchResultText: "@es@ SEARCH RESULT",
        directionText: "@es@ DIRECTIONS TO",
        galleryText: "@es@ GALLERY",
        commentText: "@es@ COMMENT",
        facitilyPanelAccessFeeText: "@es@ Access Fee:",
        facitilyPanelHoursOpenForText: "@es@ Hours Open For:",
        facitilyPanelManagementUnitText: "@es@ Management Unit:",
        facitilyPanelMarinaText: "@es@ Marina:",
        directionCurrentLocationText: "@es@ My Location"
    },
    errorMessages: {
        invalidSearch: "No hay resultados",
        falseConfigParams: "Valores clave de configuración requeridos son null o no coincida exactamente con los atributos de capa, este mensaje puede aparecer varias veces.",
        invalidLocation: "@es@ Current location not found.",
        invalidProjection: "@es@ Unable to plot current location on the map.",
        widgetNotLoaded: "@es@ Unable to load widgets.",
        shareLoadingFailed: "@es@ Unable to shorten URL, Bit.ly failed to load.",
        shareFailed: "@es@ Unable to share.",
        imageDoesNotFound: "@es@ There are no photo available.",
        facilitydoestfound: "@es@ No facilities found in buffer area.",
        noCommentAvaiable: "@es@ No Comment available"
    },
    notUsed: {
        addressDisplayText: "@es@ Address",
        backToMap: "@es@ Back to map"
    }
});
