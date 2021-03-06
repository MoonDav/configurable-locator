﻿/*global define,dojo,dojoConfig,esri */
/*jslint browser:true,sloppy:true,nomen:true,unparam:true,plusplus:true,indent:4 */
/** @license
 | Copyright 2015 Esri
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
define([], function () {
    return {

        // This file contains various configuration settings for esri template
        //
        // Use this file to perform the following:
        //
        // 1.  Specify Application Name                      - [ Tag(s) to look for: ApplicationName ]
        // 2.  Set path for Application Icon                 - [ Tag(s) to look for: ApplicationIcon ]
        // 3.  Set path for Application Favicon              - [ Tag(s) to look for: ApplicationFavicon ]
        // 4.  Set URL for Help page                         - [ Tag(s) to look for: HelpURL ]
        // 5.  Set URL for Custom logo                       - [ Tag(s) to look for: CustomLogoUrl ]
        // 6.  Set proxy URL                                 - [ Tag(s) to look for: ProxyUrl ]
        // 7.  Set Legend Visibility                         - [ Tag(s) to look for: ShowLegend ]
        // 8.  Set settings for splash screen                - [ Tag(s) to look for: SplashScreen ]
        // 9.  Specify Theme                                 - [ Tag(s) to look for: ThemeColor ]
        // 10. Specify Bottom Panel ToggleButton Text        - [ Tag(s) to look for: BottomPanelToggleButtonText ]
        // 11. Specify Title of Address search panel         - [ Tag(s) to look for: SearchPanelTitle ]
        // 12. Specify Title of Activity panel               - [ Tag(s) to look for: ActivityPanelTitle ]
        // 13. Specify Title of Event panel                  - [ Tag(s) to look for: EventPanelTitle ]
        // 14. Bottom Panel InfoPod Settings                 - [ Tag(s) to look for: PodSettings ]
        // 15. Customize Zoom level for address search       - [ Tag(s) to look for: ZoomLevel ]
        // 16. Specify WebMap Id                             - [ Tag(s) to look for: WebMapId ]
        // 17. Specify URL to ArcGIS Online REST API         - [ Tag(s) to look for: PortalAPIURL ]
        // 18. Specify the Group Title that contains basemaps- [ Tag(s) to look for: BasemapGroupTitle ]
        // 19. Specify the Group Name that contains basemaps - [ Tag(s) to look for: BasemapGroupOwner ]
        // 20. Specify Spatial Reference for basemaps        - [ Tag(s) to look for: BasemapSpatialReferenceWKID ]
        // 21. Specify path to display the Thumbnail         - [ Tag(s) to look for: NoThumbnail ]
        // 22. Specify Activity Search settings              - [ Tag(s) to look for: ActivitySearchSettings]
        // 23. Specify Event Search settings                 - [ Tag(s) to look for: EventSearchSettings]
        // 24. Specify Ripple Color settings                 - [ Tag(s) to look for: RippleColor ]
        // 25. Specify Locator Ripple size                   - [ Tag(s) to look for: LocatorRippleSize ]
        // 26. Customize Info Popup Height                   - [ Tag(s) to look for: InfoPopupHeight ]
        // 27. Customize Info Popup Width                    - [ Tag(s) to look for: InfoPopupWidth ]
        // 28. Specify ShowNullValueAs                       - [ Tag(s) to look for: ShowNullValueAs ]
        // 29. Specify GeoLocation settings                  - [ Tag(s) to look for: GeoLocationSettings]
        // 30. Set URL for Locator Settings                  - [ Tag(s) to look for: LocatorSettings ]
        // 31. Geometry Service setting                      - [ Tag(s) to look for: GeometryService ]
        // 32. Specify Buffer Distance Unit and Limits       - [ Tag(s) to look for: DistanceUnitSettings ]
        // 33. Specify Buffer Symbology                      - [ Tag(s) to look for: BufferSymbology ]
        // 34. Customize Driving Direction settings          - [ Tag(s) to look for: DrivingDirectionSettings]
        // 35. Specify URLs for Map Sharing                  - [ Tag(s) to look for: MapSharingOptions,TinyURLServiceURL, TinyURLResponseAttribute, FacebookShareURL, TwitterShareURL, ShareByMailLink ]
        // 36. Specify Header Widget settings                - [ Tag(s) to look for: AppHeaderWidgets ]

        // ------------------------------------------------------------------------------------------------------------------------
        // GENERAL SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set application title
        ApplicationName: "Park and Recreation Locator",

        // Set application icon path
        ApplicationIcon: "/js/library/themes/images/Parklogo.png",

        // Set application Favicon path
        ApplicationFavicon: "/js/library/themes/images/favicon.ico",

        // Set URL of help page/portal
        HelpURL: "help_ParkLocator.htm",

        // Set custom logoURL, displayed in lower left corner. Set to empty "" to disable.
        CustomLogoUrl: "",

        // Set proxy URL
        ProxyUrl: "/proxy/proxy.ashx",

        // Set Legend Visibility
        ShowLegend: true,

        // Set Splash window content - Message that appears when the application starts
        SplashScreen: {
            SplashScreenContent: "<center><b>Park and Recreation Locator</b></center><hr></br> The <b>Park and Recreation Locator</b> helps you locate a State Park or other state-managed recreational site.<br><br> To locate a park, simply enter an address or activity in the search box, or use your current location. The park(s) or recreation area(s) will then be highlighted on the map and relevant information about available recreation activities presented to the user.",
            IsVisible: true
        },

        // Set the Application Theme. Supported theme keys are blueTheme, greenTheme, orangeTheme, and purpleTheme.
        ThemeColor: "js/library/themes/styles/greenTheme.css",

        // Set the bottom Pod Toggle button text
        BottomPanelToggleButtonText: "Results",

        // Set the Search Panel Title
        SearchPanelTitle: "Search",

        // Set the Activity Panel Title
        ActivityPanelTitle: "Activity",

        // Set the Event Panel Title
        EventPanelTitle: "Event",

        // Set sequence of info pods in the Bottom Panel
        PodSettings: [{
            SearchResultPod: {
                Enabled: true
            }
        }, {
            FacilityInformationPod: {
                Enabled: true
            }
        }, {
            DirectionsPod: {
                Enabled: true
            }
        }, {
            GalleryPod: {
                Enabled: true
            }
        }, {
            CommentsPod: {
                Enabled: true
            }
        }],

        // Following zoom level will be set for the map upon searching an address
        ZoomLevel: 12,

        // Specify WebMapId within quotes
        WebMapId: "b129b5d83ee846dbb6d57722a397d0fc",

        // ------------------------------------------------------------------------------------------------------------------------
        // BASEMAP SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set options for basemap
        // Please note: All basemaps need to use the same spatial reference.

        // Specify URL to ArcGIS Online REST API
        PortalAPIURL: "http://www.arcgis.com/sharing/rest/",

        // Specify the Title of Group that contains basemaps
        BasemapGroupTitle: "ArcGISforStateGovernmentBasemapGroup",

        // Specify the Name of Owner of the Group that contains basemaps
        BasemapGroupOwner: "StateLocalTryItLive",

        // Specify Spatial Reference for basemaps, since all basemaps need to use the same spatial reference
        BasemapSpatialReferenceWKID: 102100,

        // Specify path of the image used to display the Thumbnail for a basemap when ArcGIS Online does not provide it
        NoThumbnail: "js/library/themes/images/not-available.png",

        // ------------------------------------------------------------------------------------------------------------------------
        // ACTIVITY SEARCH SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Configure Search, Barrier and Info settings to be displayed in Search panels:

        // Configure Search and Settings below.
        // Enable:  Set to true if Activity search panel need to be displayed, or false if Activity search panel are not required.
        // UnifiedSearch: Specify a boolean value true/false which indicates whether to include the layer in Unified search or not.
        // Title: In case of webmap implementations, it must match with the layer name specified in webmap.
        // QueryLayerId: This is the layer index in the webmap or ArcGIS Map/Feature Service and is used for performing queries.
        // SearchDisplayTitle: This text is displayed in Search Results as the Title to group results.
        // SearchDisplayFields: This Attribute will be displayed in the Search box when user performs a search.
        // SearchExpression: Configure the Query Expression to be used for Search.
        // PrimaryKeyForActivity: Specify field name as Primary Key to relate comment table.
        // QualifyingActivityValue: This value is used to indicate if a given activity is available and should represent the 'Yes' or 'True' value.
        // ActivityList: Activities to be displayed in Activity Search and Info window for a feature.
        //      FieldName: Name for which query will be performed on the layer.
        //      Alias: Specify an alternative name used for the 'Activity' and tooltip name for the icons.
        //      Image: Set URL for 'Activity' icons.
        //      IsSelected: Set selection in 'Activity' search list.
        // CommentsSettings: Configure Comments Settings
        //      Enabled: Set to true if comments need to be displayed, or false if comments are not required.
        //      CommentsSettings - Title: In case of webmap implementations, it must match the layer name specified in webmap.
        //      CommentsSettings - QueryLayerId: This is the layer index in the webmap or ArcGIS Map/Feature Service and is used for performing queries.
        //      ForeignKeyFieldForComment: Specify field name as Foreign Key to relate activity table.
        //      RankField: It is the Attribute that will be display ranks/stars.
        //      SubmissionDateField: It is the Attribute that will be display the Date when the comment was submitted.
        //      CommentField: It is the Attribute that will be display Comment text.

        ActivitySearchSettings: [{
            Enable: true,
            UnifiedSearch: "true",
            Title: "Parks",
            QueryLayerId: "0",
            SearchDisplayTitle: "Park",
            SearchDisplayFields: "${NAME}",
            SearchExpression: "UPPER(NAME) LIKE UPPER('%${0}%')",
            PrimaryKeyForActivity: "${SITEID}",
            QualifyingActivityValue: "Yes",
            ActivityList: [{
                FieldName: "RVCAMPSITE",
                Alias: "RV Camping",
                Image: "js/library/themes/images/activity/trailerSite.png",
                IsSelected: true
            }, {
                FieldName: "TENTCAMP",
                Alias: "Camping",
                Image: "js/library/themes/images/activity/campground.png",
                IsSelected: false
            }, {
                FieldName: "CABINS",
                Alias: "Cabins",
                Image: "js/library/themes/images/activity/sleepingShelter.png",
                IsSelected: false
            }, {
                FieldName: "LAUNDRY",
                Alias: "Laundry",
                Image: "js/library/themes/images/activity/laundromat.png",
                IsSelected: false
            }, {
                FieldName: "VISITORCNTR",
                Alias: "Visitor Center",
                Image: "js/library/themes/images/activity/sunny.png",
                IsSelected: false
            }, {
                FieldName: "MUSEUM",
                Alias: "Museum",
                Image: "js/library/themes/images/activity/museum.png",
                IsSelected: false
            }, {
                FieldName: "RESTAURANT",
                Alias: "Restaurant",
                Image: "js/library/themes/images/activity/snackBar.png",
                IsSelected: false
            }, {
                FieldName: "SWIMMING",
                Alias: "Swimming",
                Image: "js/library/themes/images/activity/swimming.png",
                IsSelected: false
            }, {
                FieldName: "PICNIC",
                Alias: "Picnic Sites",
                Image: "js/library/themes/images/activity/picnicArea.png",
                IsSelected: false
            }, {
                FieldName: "BOATCRUISE",
                Alias: "Boat Cruise",
                Image: "js/library/themes/images/activity/boatTour.png",
                IsSelected: false
            }, {
                FieldName: "FISHING",
                Alias: "Fishing",
                Image: "js/library/themes/images/activity/fishing.png",
                IsSelected: false
            }, {
                FieldName: "MARINA",
                Alias: "Marina",
                Image: "js/library/themes/images/activity/marina.png",
                IsSelected: false
            }, {
                FieldName: "BOATLAUNCH",
                Alias: "Boat Launch",
                Image: "js/library/themes/images/activity/boatLaunch.png",
                IsSelected: false
            }, {
                FieldName: "CANOE",
                Alias: "Canoe Access",
                Image: "js/library/themes/images/activity/canoeAccess.png",
                IsSelected: false
            }, {
                FieldName: "GOLF",
                Alias: "Golf Course",
                Image: "js/library/themes/images/activity/golfing.png",
                IsSelected: false
            }, {
                FieldName: "PLAYGROUND",
                Alias: "Playground",
                Image: "js/library/themes/images/activity/playground.png",
                IsSelected: false
            }, {
                FieldName: "HIKING",
                Alias: "Hiking",
                Image: "js/library/themes/images/activity/hiking.png",
                IsSelected: false
            }, {
                FieldName: "TENNIS",
                Alias: "Tennis",
                Image: "js/library/themes/images/activity/tennis.png",
                IsSelected: false
            }, {
                FieldName: "MTBCYCLE",
                Alias: "Bike Trail",
                Image: "js/library/themes/images/activity/bicycleTrail.png",
                IsSelected: false
            }, {
                FieldName: "ARCHERY",
                Alias: "Archery",
                Image: "js/library/themes/images/activity/archery.png",
                IsSelected: false
            }, {
                FieldName: "STABLES",
                Alias: "Horseback Riding",
                Image: "js/library/themes/images/activity/horsebackRiding.png",
                IsSelected: false
            }, {
                FieldName: "GROUPLODGE",
                Alias: "Lodge",
                Image: "js/library/themes/images/activity/sleepingShelter.png",
                IsSelected: false
            }, {
                FieldName: "ROADCYCLE",
                Alias: "Road Cycling",
                Image: "js/library/themes/images/activity/bicycleTrail.png",
                IsSelected: false
            }],
            CommentsSettings: {
                Enabled: true,
                Title: "Park Comments",
                QueryLayerId: "1",
                ForeignKeyFieldForComment: "${SITEID}",
                RankField: "${RANK}",
                SubmissionDateField: "${SUBMITDT}",
                CommentField: "${COMMENTS}"
            }
        }],

        // ------------------------------------------------------------------------------------------------------------------------
        // Event SEARCH SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------
        // Configure Search, Barrier and Info settings to be displayed in Search panels:

        // Configure Search and Settings below.
        // Enable:  Set to true if Event search panel need to be displayed, or false if Event search panel are not required.
        // UnifiedSearch: Specify a boolean value true/false which indicates whether to include the layer in Unified search or not.
        // Title: In case of webmap implementations, it must match layer name specified in webmap.
        // QueryLayerId: This is the Layer index in the webmap or ArcGIS Map/Feature Service and is used for performing queries.
        // SearchDisplayTitle: This text is displayed in Search Results as the Title to group results.
        // SearchDisplayFields: Attribute that will be displayed in the Search box when user performs a search.
        // SearchDisplaySubFields: Attribute that will be displayed in the Search box when user performs a search.
        // SearchExpressionForDate: Expression to query the layer for Events falling in the range of 'Events' search (Choose the expression below that works for your environment).
        //      Hosted Feature Layers published from an ArcGIS Online organizational account with the Organization’s Security Setting: “Allow only standard SQL queries” unchecked must use the following expression:
        //      SearchExpressionForDate: "(EVENTEND >= ${0} AND EVENTEND <= ${1}) OR (EVENTSTART <= ${0} AND EVENTEND >= ${1}) OR (EVENTSTART >= ${0} AND EVENTSTART <= ${1})",
        //      All other published services should use the use the following expression (This is the default expression):
        //      SearchExpressionForDate: "(EVENTEND >= DATE ${0} AND EVENTEND <= DATE ${1}) OR (EVENTSTART <= DATE ${0} AND EVENTEND >= DATE ${1}) OR (EVENTSTART >= DATE ${0} AND EVENTSTART <= DATE ${1})",
        // SearchExpression: Configure the query expression to be used for Search.
        // SortingKeyField: Attribute that will be sort the date when user performs a Event search.
        // AddToCalenderSettings: Configure the parameters to create the ics file for an event.
        //        IcsFileName: Set the Name of the ics file. This is a required key.
        //        StartDate: Set the Start Date of the event in ics file. This is a required key.
        //        EndDate: Set the End Date of the event in ics file. This is a required key.
        //        Location: Set the Location of the event in ics file.
        //        Summary: Set the Summary of the event in ics file.
        //        Description: Set the Description of the event in ics file.
        //        Organizer: Set the Organizer of the event in ics file.

        EventSearchSettings: [{
            Enable: false,
            UnifiedSearch: "false",
            Title: "Events",
            QueryLayerId: "0",
            SearchDisplayTitle: "Events",
            SearchDisplayFields: "${EVENTNM}",
            SearchDisplaySubFields: "${EVENTSTART},${FULLADDR}",
            SearchExpressionForDate: "(EVENTEND >= DATE ${0} AND EVENTEND <= DATE ${1}) OR (EVENTSTART <= DATE ${0} AND EVENTEND >= DATE ${1}) OR (EVENTSTART >= DATE ${0} AND EVENTSTART <= DATE ${1})",
            SearchExpression: "UPPER(FULLADDR) LIKE UPPER('%${0}%')",
            SortingKeyField: "${EVENTSTART}",
            AddToCalendarSettings: [{
                IcsFileName: "${EVENTNM}",
                StartDate: "${EVENTSTART}",
                EndDate: "${EVENTEND}",
                Location: "${FULLADDR},${PSTLCITY}",
                Summary: "${EVENTNM}",
                Description: "${EVENTDESC}",
                Organizer: "${SPONSOR}"
            }]
        }],


        //Set the color of the circle around the selected point
        RippleColor: "35,35,142",

        //Set the size of the circle around the selected point
        LocatorRippleSize: 40,

        // Minimum height should be 270 for the info-popup in pixels
        InfoPopupHeight: 270,

        // Minimum width should be 330 for the info-popup in pixels
        InfoPopupWidth: 350,

        // Set string value to be shown for null or blank values
        ShowNullValueAs: "N/A",

        // ------------------------------------------------------------------------------------------------------------------------
        // GEOLOCATION SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set geolocation settings such as Geolocation Symbol, Size
        GeoLocationSettings: {
            DefaultGeoLocationSymbol: "/js/library/themes/images/redpushpin.png",
            MarkupSymbolSize: {
                width: 35,
                height: 35
            }
        },

        // ------------------------------------------------------------------------------------------------------------------------
        // ADDRESS SEARCH SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set Locator settings such as Locator Symbol, Size, Display fields, Match score
        // DefaultLocatorSymbol: Set path for pushpin which is use to show the location.
        // MarkupSymbolSize: Setting the height and width of the pushpin.
        // DisplayText: This text is displayed in search results as the title to group results.
        // LocatorDefaultAddress: Set the default Address in address search box.
        // LocatorParameters: Parameters (text, outFields, maxLocations, box, outSR) used for address and location search.
        // AddressSearch: Candidates based on which the address search will be performed.
        // AddressMatchScore: Setting the minimum score for filtering the candidate results.
        // MaxResults: Maximum number of locations to display in the results menu.

        LocatorSettings: {
            DefaultLocatorSymbol: "/js/library/themes/images/redpushpin.png",
            MarkupSymbolSize: {
                width: 35,
                height: 35
            },
            DisplayText: "Address",
            LocatorDefaultAddress: "401 Church Street Nashville TN 37243",
            LocatorParameters: {
                SearchField: "SingleLine",
                SearchBoundaryField: "searchExtent"
            },
            LocatorURL: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
            LocatorOutFields: ["Addr_Type", "Type", "Score", "Match_Addr", "xmin", "xmax", "ymin", "ymax"],
            DisplayField: "${Match_Addr}",
            AddressMatchScore: {
                Field: "Score",
                Value: 80
            },
            FilterFieldName: 'Addr_Type',
            FilterFieldValues: ["StreetAddress", "StreetName", "PointAddress", "POI"],
            MaxResults: 200
        },

        // ------------------------------------------------------------------------------------------------------------------------
        // GEOMETRY SERVICE SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set Geometry Service URL
        GeometryService: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Geometry/GeometryServer",

        // ------------------------------------------------------------------------------------------------------------------------
        // BUFFER SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // Set buffer distance unit and limits
        DistanceUnitSettings: {
            DistanceUnitName: "Miles", // Allowed values for DistanceUnitName are "Miles", "Kilometers", "Meters" and "Feet".
            MinimumValue: 1,
            MaximumValue: 50
        },

        // FillSymbolColor: Setting color for buffer in RGB format
        // FillSymbolTransparency: Setting transparency for buffer
        // LineSymbolColor: Setting outline color of buffer in RGB format
        // LineSymbolTransparency: Setting transparency for outline symbol
        BufferSymbology: {
            FillSymbolColor: "0,0,255",
            FillSymbolTransparency: "0.01",
            LineSymbolColor: "0,0,255",
            LineSymbolTransparency: "0.65"
        },

        // ------------------------------------------------------------------------------------------------------------------------
        // DRIVING DIRECTIONS SETTINGS
        // ------------------------------------------------------------------------------------------------------------------------

        // GetDirections: If variable is set to false directions cannot be enabled
        // RouteServiceURL: Set URL for Routing Service
        // RouteColor: Set Color for Route in RGB format
        // RouteWidth: Set Width for Route
        // Transparency: Set Transparency for Route
        // RouteUnit: Set Unit for Route, units supported by Direction widget are “MILES”, “METERS”, “KILOMETERS”, “NAUTICAL_MILES”. If there is a typo error in any of these four units then the unit will be displayed in “KILOMETERS”. If the unit is specified other than these four units then unit will be displayed in “MILES”
        DrivingDirectionSettings: {
            GetDirections: false,
            RouteServiceURL: "http://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
            RouteColor: "0,0,225",
            RouteWidth: 6,
            Transparency: "0.5",
            RouteUnit: "MILES"
        },

        // ------------------------------------------------------------------------------------------------------------------------
        // SETTINGS FOR MAP SHARING
        // ------------------------------------------------------------------------------------------------------------------------
        // Set URL for TinyURL service, and URLs for social media
        // MapSharingOptions: Allow user to share map using social media.
        // TinyURLServiceURL: Set URL for TinyURL service.
        // FacebookShareURL:  Allow user to share application using facebook.
        // TwitterShareURL:  Allow user to share application using twitter.
        // ShareByMailLink:  Allow user to share application using mail.
        MapSharingOptions: {
            TinyURLServiceURL: "https://api-ssl.bitly.com/v3/shorten?longUrl=${0}",
            FacebookShareURL: "http://www.facebook.com/sharer.php?m2w&u=${0}&t=Park%20and%20Recreation%20Locator",
            TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Park%20and%20Recreation%20Locator ${0}",
            ShareByMailLink: "mailto:%20?subject=Check%20out%20this%20map&body=${0}"
        },

        //------------------------------------------------------------------------------------------------------------------------
        // Header Widget Settings
        //------------------------------------------------------------------------------------------------------------------------

        // Set widgets settings such as widgetPath to be displayed in header panel
        // WidgetPath: Path of the widget respective to the widgets package.

        AppHeaderWidgets: [{
            WidgetPath: "widgets/searchSetting/searchSetting"
        }, {
            WidgetPath: "widgets/myList/myList"
        }, {
            WidgetPath: "widgets/geoLocation/geoLocation"
        }, {
            WidgetPath: "widgets/share/share"
        }, {
            WidgetPath: "widgets/help/help"
        }]
    };
});
