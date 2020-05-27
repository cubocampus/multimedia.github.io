(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_45D8CA55_5851_6E08_41BB_2F2698A6ED28, [this.htmltext_45DEFA55_5851_6E08_41D5_87D4E51F3896,this.component_45D2BA56_5851_6E08_41C5_4D89C6F8E33D,this.component_45D2AA56_5851_6E08_41C9_893500053AE1], 2000)",
 "items": [
  "this.albumitem_45D8FA55_5851_6E08_41B9_A6DC4E13C252"
 ],
 "id": "playList_4F525CB4_57D7_EA08_41C4_D0A6815DC206"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_41F10611_5831_2608_419A_3469A2373180_2",
 "thumbnailUrl": "media/album_41F10611_5831_2608_419A_3469A2373180_2_t.jpg",
 "width": 4608,
 "label": "IMGP0402",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_41F10611_5831_2608_419A_3469A2373180_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2592
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_2",
 "thumbnailUrl": "media/album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_2_t.jpg",
 "width": 1120,
 "label": "Golden_Gate_AdobeStock_78121192",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_2.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 630
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "linear",
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_0",
 "thumbnailUrl": "media/album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_0_t.jpg",
 "width": 1911,
 "label": "bigs-kirby-cove-road-descent-Marin-Headlands-Golden-Gate-National-Recreation-Area-Large",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1080
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "class": "PhotoAlbumPlayListItem",
   "media": "this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B",
   "player": "this.MainViewerPhotoAlbumPlayer"
  },
  {
   "class": "PhotoAlbumPlayListItem",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 0)",
   "media": "this.album_41F10611_5831_2608_419A_3469A2373180",
   "player": "this.MainViewerPhotoAlbumPlayer"
  }
 ],
 "id": "mainPlayList"
},
{
 "data": {
  "name": "Window15668"
 },
 "closeButtonIconHeight": 20,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_426A5E18_5831_2639_41D4_DC99A16BDB2F",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [],
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadow": true,
 "shadowVerticalLength": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "overflow": "scroll",
 "bodyPaddingRight": 0,
 "bodyPaddingLeft": 0,
 "headerPaddingRight": 0,
 "children": [
  "this.container_45D1DA57_5851_6E08_41AC_A38845D95B83"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "footerBackgroundOpacity": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 0,
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconLineWidth": 3,
 "paddingBottom": 0,
 "bodyPaddingBottom": 0,
 "closeButtonIconColor": "#B2B2B2",
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 4,
      "tags": "ondemand",
      "colCount": 4,
      "width": 2048,
      "height": 2048
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "i6d0c6t-a-large-building",
 "id": "panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF",
 "thumbnailUrl": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_t.jpg",
 "partial": false,
 "hfovMin": "135%",
 "pitch": 0,
 "overlays": [
  "this.overlay_41F7472C_57D3_6618_41CD_A3F268D9FECF",
  "this.overlay_41110872_57D0_EA08_41D3_3490C50AF269",
  "this.overlay_40FD1B12_57D3_2E08_41CA_A314B3AF9772",
  "this.overlay_465F7E4A_5830_E618_41BD_04E204429BFA",
  "this.overlay_4768975E_5831_2638_41D0_6BA7974A1430",
  "this.overlay_448601CB_5831_3A18_41BB_C313F9AA899C",
  "this.overlay_477B9AF1_5850_EE08_41D6_017937D6013E",
  "this.overlay_79FBF5A0_585F_1A08_41CE_DB7505E18664"
 ]
},
{
 "data": {
  "name": "Window11372"
 },
 "closeButtonIconHeight": 20,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_4E649AAF_57D1_EE18_41CC_480FCE97B9E5",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [],
 "bodyPaddingTop": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 20,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "",
 "backgroundColor": [],
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "shadowSpread": 1,
 "closeButtonIconLineWidth": 2,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "headerPaddingLeft": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 0,
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadow": true,
 "shadowVerticalLength": 0,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "overflow": "scroll",
 "bodyPaddingRight": 0,
 "bodyPaddingLeft": 0,
 "headerPaddingRight": 0,
 "children": [
  "this.container_45D8CA55_5851_6E08_41BB_2F2698A6ED28"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 5,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "footerBackgroundOpacity": 0,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 0,
 "borderRadius": 5,
 "gap": 10,
 "closeButtonPressedIconLineWidth": 3,
 "paddingBottom": 0,
 "bodyPaddingBottom": 0,
 "closeButtonIconColor": "#B2B2B2",
 "closeButtonIconWidth": 20,
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_41F10611_5831_2608_419A_3469A2373180_0",
 "thumbnailUrl": "media/album_41F10611_5831_2608_419A_3469A2373180_0_t.jpg",
 "width": 1280,
 "label": "cannons-inside-fort-point",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_41F10611_5831_2608_419A_3469A2373180_0.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 853
},
{
 "data": {
  "name": "Window9438"
 },
 "closeButtonIconHeight": 12,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_430C5BE7_57D3_6E08_41D4_601AE56CF01D",
 "scrollBarVisible": "rollOver",
 "width": 800,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "Mapa de California",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerPaddingLeft": 10,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadowVerticalLength": 0,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "bodyPaddingLeft": 5,
 "headerPaddingRight": 10,
 "children": [
  "this.htmlText_42F21BE7_57D3_6E08_41A4_4E58CCD2E09A",
  "this.image_uid45D82A54_5851_6E08_41C3_AEC464C1E079_1"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 10,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_45D64A58_5851_6E38_41C6_6DE9A2631485, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_45D64A58_5851_6E38_41C6_6DE9A2631485, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_4572E8C9_585F_6A18_41BA_F89F3D3FFCE5",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_45D64A58_5851_6E38_41C6_6DE9A2631485"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_41987E61_57F3_6608_4199_D8DCCE74E2A4",
 "thumbnailUrl": "media/photo_41987E61_57F3_6608_4199_D8DCCE74E2A4_t.jpg",
 "width": 2048,
 "label": "Golden-Gate-National-Recreation-Area",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_41987E61_57F3_6608_4199_D8DCCE74E2A4.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1375
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "album_41F10611_5831_2608_419A_3469A2373180_1",
 "thumbnailUrl": "media/album_41F10611_5831_2608_419A_3469A2373180_1_t.jpg",
 "width": 3008,
 "label": "Ft._Sumter_cannon",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/album_41F10611_5831_2608_419A_3469A2373180_1.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 2000
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_4196D53A_57D3_3A78_41D0_2C7D0251C812",
 "thumbnailUrl": "media/photo_4196D53A_57D3_3A78_41D0_2C7D0251C812_t.png",
 "width": 681,
 "label": "Relief_map_of_California",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_4196D53A_57D3_3A78_41D0_2C7D0251C812.png",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 780
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_40A31F10_57D3_2608_41C0_CF0032770BD3",
 "thumbnailUrl": "media/photo_40A31F10_57D3_2608_41C0_CF0032770BD3_t.jpg",
 "width": 1024,
 "label": "ggnra-activity",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_40A31F10_57D3_2608_41C0_CF0032770BD3.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 576
},
{
 "class": "PhotoAlbum",
 "label": "Album de Fotos bigs-kirby-cove-road-descent-Marin-Headlands-Golden-Gate-National-Recreation-Area-Large",
 "thumbnailUrl": "media/album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_t.png",
 "playList": "this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_AlbumPlayList",
 "id": "album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B"
},
{
 "data": {
  "name": "Window13409"
 },
 "closeButtonIconHeight": 12,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_44487A5C_5831_6E39_41D1_C5B6CEB2C146",
 "scrollBarVisible": "rollOver",
 "width": 800,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "Ranger Lara & Point Bonita Lighthouse",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerPaddingLeft": 10,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadowVerticalLength": 0,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "bodyPaddingLeft": 5,
 "headerPaddingRight": 10,
 "children": [
  "this.htmlText_444BCA62_5831_6E09_41D3_882CF6204356",
  {
   "backgroundColorRatios": [],
   "paddingLeft": 0,
   "paddingRight": 0,
   "width": "100%",
   "backgroundColorDirection": "vertical",
   "url": "//www.youtube.com/embed/yZp_1_M59LU",
   "minHeight": 0,
   "scrollEnabled": true,
   "borderSize": 0,
   "minWidth": 0,
   "backgroundColor": [],
   "height": "85%",
   "insetBorder": false,
   "paddingTop": 0,
   "backgroundOpacity": 1,
   "class": "WebFrame",
   "borderRadius": 0,
   "shadow": false,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "VideoUrl13916"
   }
  }
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 10,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "class": "Photo",
 "duration": 5000,
 "id": "photo_4BF11069_57D0_FA1B_41C2_A2EB3AA912EC",
 "thumbnailUrl": "media/photo_4BF11069_57D0_FA1B_41C2_A2EB3AA912EC_t.jpg",
 "width": 3000,
 "label": "200225131836-01-most-popular-national-park-sites-2020-golden-gate",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/photo_4BF11069_57D0_FA1B_41C2_A2EB3AA912EC.jpg",
    "class": "ImageResourceLevel"
   }
  ]
 },
 "height": 1688
},
{
 "data": {
  "name": "Window17553"
 },
 "closeButtonIconHeight": 12,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_451854C4_5851_1A08_41D2_EBCEBFC3EA35",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "Maps",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerPaddingLeft": 10,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadowVerticalLength": 0,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyPaddingRight": 5,
 "bodyPaddingLeft": 5,
 "headerPaddingRight": 10,
 "children": [
  "this.htmlText_451E34C4_5851_1A08_41A5_5B38A8E95A58",
  {
   "backgroundColorRatios": [],
   "paddingLeft": 0,
   "paddingRight": 0,
   "width": "100%",
   "backgroundColorDirection": "vertical",
   "url": "https://www.nps.gov/goga/planyourvisit/maps.htm",
   "minHeight": 0,
   "scrollEnabled": true,
   "borderSize": 0,
   "minWidth": 0,
   "backgroundColor": [],
   "height": "89%",
   "insetBorder": false,
   "paddingTop": 0,
   "backgroundOpacity": 1,
   "class": "WebFrame",
   "borderRadius": 0,
   "shadow": false,
   "paddingBottom": 0,
   "propagateClick": false,
   "data": {
    "name": "WebFrame18072"
   }
  }
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 10,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "class": "Video",
 "label": "moe",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_4572E8C9_585F_6A18_41BA_F89F3D3FFCE5_t.jpg",
 "width": 640,
 "loop": false,
 "id": "video_4572E8C9_585F_6A18_41BA_F89F3D3FFCE5",
 "height": 640,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_4572E8C9_585F_6A18_41BA_F89F3D3FFCE5.mp4"
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer"
},
{
 "data": {
  "name": "Window7244"
 },
 "closeButtonIconHeight": 12,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "id": "window_437E6F4A_57D3_E618_41B3_CD282EF3E07B",
 "scrollBarVisible": "rollOver",
 "width": 400,
 "footerBackgroundColorDirection": "vertical",
 "closeButtonBackgroundColor": [],
 "titlePaddingRight": 5,
 "scrollBarOpacity": 0.5,
 "titlePaddingTop": 5,
 "minHeight": 20,
 "horizontalAlign": "center",
 "modal": true,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "headerBorderColor": "#000000",
 "verticalAlign": "middle",
 "height": 600,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "title": "Golden Gate National Recreation Area",
 "minWidth": 20,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "backgroundColor": [],
 "shadowSpread": 1,
 "headerPaddingLeft": 10,
 "headerBorderSize": 0,
 "titleFontWeight": "normal",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundOpacity": 1,
 "veilColorDirection": "horizontal",
 "class": "Window",
 "shadowVerticalLength": 0,
 "shadow": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "propagateClick": false,
 "overflow": "scroll",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonBackgroundColorRatios": [],
 "bodyBorderColor": "#000000",
 "bodyPaddingRight": 5,
 "bodyPaddingLeft": 5,
 "headerPaddingRight": 10,
 "children": [
  "this.htmlText_437C7F4A_57D3_E618_41D2_0CF28606E549",
  "this.image_uid45D95A52_5851_6E09_4195_7D902B4A8383_1"
 ],
 "veilShowEffect": {
  "class": "FadeInEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "veilOpacity": 0.4,
 "headerPaddingTop": 10,
 "layout": "vertical",
 "paddingRight": 0,
 "closeButtonBorderRadius": 11,
 "footerHeight": 5,
 "shadowColor": "#000000",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "titleFontStyle": "normal",
 "borderSize": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "contentOpaque": false,
 "headerPaddingBottom": 10,
 "titlePaddingLeft": 5,
 "scrollBarMargin": 2,
 "closeButtonPressedIconColor": "#FFFFFF",
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "duration": 500,
  "easing": "cubic_in_out"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "shadowOpacity": 0.5,
 "paddingTop": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "headerBackgroundOpacity": 1,
 "borderRadius": 5,
 "gap": 10,
 "paddingBottom": 0,
 "bodyPaddingBottom": 5,
 "bodyBorderSize": 0,
 "closeButtonIconWidth": 12,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "scrollBarWidth": 10,
 "shadowHorizontalLength": 3,
 "backgroundColorRatios": []
},
{
 "class": "PhotoAlbum",
 "audios": [
  "this.audio_43DA6F95_5831_E608_41AA_790D331898D5"
 ],
 "label": "Album de Fotos cannons-inside-fort-point",
 "thumbnailUrl": "media/album_41F10611_5831_2608_419A_3469A2373180_t.png",
 "playList": "this.album_41F10611_5831_2608_419A_3469A2373180_AlbumPlayList",
 "id": "album_41F10611_5831_2608_419A_3469A2373180"
},
{
 "class": "PhotoAlbumAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_43DA6F95_5831_E608_41AA_790D331898D5.mp3",
  "oggUrl": "media/audio_43DA6F95_5831_E608_41AA_790D331898D5.ogg"
 },
 "autoplay": true,
 "id": "audio_43DA6F95_5831_E608_41AA_790D331898D5",
 "data": {
  "label": "Glen_Canyon"
 }
},
{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_45D1DA57_5851_6E08_41AC_A38845D95B83, [this.htmltext_45D00A57_5851_6E08_41CA_ADCA2AB79748,this.component_45D0CA57_5851_6E08_41D5_E36D65F0B069,this.component_45D72A57_5851_6E08_41D5_5ACC2AFA6C6F], 2000)",
 "items": [
  "this.albumitem_45D19A57_5851_6E08_41D4_996EF647EFD9"
 ],
 "id": "playList_427CFB0B_5830_EE18_417E_A09A78F58EF3"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "fontFamily": "Calibri",
 "data": {
  "name": "Label4110"
 },
 "left": "0.48%",
 "fontStyle": "normal",
 "paddingLeft": 0,
 "id": "Label_47BE116C_57D7_1A18_41C3_3ED6D1E150D1",
 "width": "12.907%",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 1,
 "horizontalAlign": "center",
 "text": "transmediarte",
 "fontColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "6.597%",
 "top": "7.54%",
 "fontSize": "3vmin",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Label",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "textDecoration": "none",
 "propagateClick": false,
 "fontWeight": "bold"
},
{
 "cursor": "hand",
 "maxHeight": 300,
 "maxWidth": 300,
 "id": "Image_444A9E69_57D1_2618_4190_C074AEFD8DED",
 "left": "3.8%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "width": "5.549%",
 "borderSize": 0,
 "url": "skin/Image_444A9E69_57D1_2618_4190_C074AEFD8DED.png",
 "minHeight": 1,
 "horizontalAlign": "center",
 "top": "1.68%",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "7.435%",
 "click": "this.openLink('https://cubocampus.github.io/transmediarte/index.html', '_blank')",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image5386"
 }
},
{
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_AlbumPlayList, this.htmltext_45DEFA55_5851_6E08_41D5_87D4E51F3896, this.albumitem_45D8FA55_5851_6E08_41B9_A6DC4E13C252); this.loopAlbum(this.playList_4F525CB4_57D7_EA08_41C4_D0A6815DC206, 0)",
 "media": "this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B",
 "player": "this.viewer_uid45D88A55_5851_6E08_41C3_8E823252B9CEPhotoAlbumPlayer",
 "id": "albumitem_45D8FA55_5851_6E08_41B9_A6DC4E13C252"
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Container18974"
 },
 "children": [
  "this.viewer_uid45D1AA57_5851_6E08_41C1_F4CFF41D67AD",
  {
   "backgroundColorRatios": [],
   "data": {
    "name": "Container18975"
   },
   "children": [
    "this.htmltext_45D00A57_5851_6E08_41CA_ADCA2AB79748"
   ],
   "left": 0,
   "layout": "vertical",
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "horizontalAlign": "left",
   "borderSize": 0,
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "verticalAlign": "bottom",
   "backgroundColor": [],
   "height": "30%",
   "paddingTop": 0,
   "backgroundOpacity": 0.3,
   "class": "Container",
   "borderRadius": 0,
   "gap": 10,
   "shadow": false,
   "paddingBottom": 0,
   "scrollBarWidth": 7,
   "propagateClick": false,
   "overflow": "scroll"
  },
  "this.component_45D0CA57_5851_6E08_41D5_E36D65F0B069",
  "this.component_45D72A57_5851_6E08_41D5_5ACC2AFA6C6F"
 ],
 "id": "container_45D1DA57_5851_6E08_41AC_A38845D95B83",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "backgroundColor": [],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_437E6F4A_57D3_E618_41B3_CD282EF3E07B, null, false)"
  }
 ],
 "data": {
  "label": "Imagen"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 52.83,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 924,
      "height": 679
     }
    ]
   },
   "pitch": -4.61,
   "yaw": 59.29
  }
 ],
 "id": "overlay_41F7472C_57D3_6618_41CD_A3F268D9FECF",
 "maps": [
  {
   "hfov": 52.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 59.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -4.61
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_430C5BE7_57D3_6E08_41D4_601AE56CF01D, null, false)"
  }
 ],
 "data": {
  "label": "Info Red 03"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.07,
   "image": "this.AnimatedImageResource_40CD1AD5_57D1_2E0B_41C1_DD46B4D2D739",
   "pitch": 20.16,
   "yaw": 60.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_41110872_57D0_EA08_41D3_3490C50AF269",
 "maps": [
  {
   "hfov": 7.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 60.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 20.16
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_4E649AAF_57D1_EE18_41CC_480FCE97B9E5, this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B, this.playList_4F525CB4_57D7_EA08_41C4_D0A6815DC206, '90%', '90%', false, false)"
  }
 ],
 "data": {
  "label": "Poligon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 20.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 368,
      "height": 299
     }
    ]
   },
   "pitch": 2.93,
   "yaw": -19.33
  }
 ],
 "id": "overlay_40FD1B12_57D3_2E08_41CA_A314B3AF9772",
 "maps": [
  {
   "hfov": 20.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_2_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 184,
      "height": 149
     }
    ]
   },
   "pitch": 2.93
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_44487A5C_5831_6E39_41D1_C5B6CEB2C146, null, false)"
  }
 ],
 "data": {
  "label": "Imagen"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 25.7,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 448,
      "height": 541
     }
    ]
   },
   "pitch": 1.54,
   "yaw": 18.46
  }
 ],
 "id": "overlay_465F7E4A_5830_E618_41BD_04E204429BFA",
 "maps": [
  {
   "hfov": 25.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 1.54
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupMedia(this.window_426A5E18_5831_2639_41D4_DC99A16BDB2F, this.album_41F10611_5831_2608_419A_3469A2373180, this.playList_427CFB0B_5830_EE18_417E_A09A78F58EF3, '90%', '90%', false, false)"
  }
 ],
 "data": {
  "label": "Arrow 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.29,
   "image": "this.AnimatedImageResource_424838ED_5833_2A18_41D3_C21F5E4E5DBC",
   "pitch": -4.61,
   "yaw": -116.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4768975E_5831_2638_41D0_6BA7974A1430",
 "maps": [
  {
   "hfov": 6.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -116.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 29,
      "height": 16
     }
    ]
   },
   "pitch": -4.61
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_451854C4_5851_1A08_41D2_EBCEBFC3EA35, null, false)"
  }
 ],
 "data": {
  "label": "Imagen"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 26.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 460,
      "height": 875
     }
    ]
   },
   "pitch": -1.86,
   "yaw": 133.3
  }
 ],
 "id": "overlay_448601CB_5831_3A18_41BB_C313F9AA899C",
 "maps": [
  {
   "hfov": 26.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 30
     }
    ]
   },
   "pitch": -1.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 29.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 527,
      "height": 643
     }
    ]
   },
   "pitch": 15.61,
   "yaw": -78.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_477B9AF1_5850_EE08_41D6_017937D6013E",
 "data": {
  "label": "Experimenta un parque tan rico que admite 19 ecosistemas distintos "
 },
 "maps": [
  {
   "hfov": 29.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.31,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_6_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 19
     }
    ]
   },
   "pitch": 15.61
  }
 ]
},
{
 "blending": 0,
 "video": {
  "width": 640,
  "class": "VideoResource",
  "height": 640,
  "mp4Url": "media/video_4572E8C9_585F_6A18_41BA_F89F3D3FFCE5.mp4"
 },
 "hfov": 21.73,
 "autoplay": false,
 "id": "overlay_79FBF5A0_585F_1A08_41CE_DB7505E18664",
 "enabledInCardboard": true,
 "loop": false,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/overlay_79FBF5A0_585F_1A08_41CE_DB7505E18664_t.jpg",
    "class": "ImageResourceLevel",
    "width": 640,
    "height": 640
   }
  ]
 },
 "pitch": 4.91,
 "useHandCursor": true,
 "roll": -2.61,
 "yaw": -161.29,
 "rotationY": 5.3,
 "class": "VideoPanoramaOverlay",
 "rotationX": -2.83,
 "videoVisibleOnStop": false,
 "mouseEnter": "this.overlay_79FBF5A0_585F_1A08_41CE_DB7505E18664.play()",
 "data": {
  "label": "Video"
 },
 "vfov": 24.21,
 "distance": 50
},
{
 "backgroundColorRatios": [],
 "data": {
  "name": "Container18968"
 },
 "children": [
  "this.viewer_uid45D88A55_5851_6E08_41C3_8E823252B9CE",
  {
   "backgroundColorRatios": [],
   "data": {
    "name": "Container18969"
   },
   "children": [
    "this.htmltext_45DEFA55_5851_6E08_41D5_87D4E51F3896"
   ],
   "left": 0,
   "layout": "vertical",
   "paddingLeft": 0,
   "scrollBarColor": "#FFFFFF",
   "paddingRight": 0,
   "scrollBarVisible": "rollOver",
   "right": 0,
   "scrollBarOpacity": 0.5,
   "backgroundColorDirection": "vertical",
   "minHeight": 20,
   "horizontalAlign": "left",
   "borderSize": 0,
   "bottom": 0,
   "contentOpaque": true,
   "minWidth": 20,
   "scrollBarMargin": 2,
   "verticalAlign": "bottom",
   "backgroundColor": [],
   "height": "30%",
   "paddingTop": 0,
   "backgroundOpacity": 0.3,
   "class": "Container",
   "borderRadius": 0,
   "gap": 10,
   "shadow": false,
   "paddingBottom": 0,
   "scrollBarWidth": 7,
   "propagateClick": false,
   "overflow": "scroll"
  },
  "this.component_45D2BA56_5851_6E08_41C5_4D89C6F8E33D",
  "this.component_45D2AA56_5851_6E08_41C9_893500053AE1"
 ],
 "id": "container_45D8CA55_5851_6E08_41BB_2F2698A6ED28",
 "layout": "absolute",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "backgroundColorDirection": "vertical",
 "minHeight": 20,
 "width": "100%",
 "borderSize": 0,
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "verticalAlign": "top",
 "backgroundColor": [],
 "height": "100%",
 "paddingTop": 0,
 "backgroundOpacity": 0.3,
 "class": "Container",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "scroll"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmlText_42F21BE7_57D3_6E08_41A4_4E58CCD2E09A",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "11%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText9439"
 }
},
{
 "paddingLeft": 0,
 "id": "image_uid45D82A54_5851_6E08_41C3_AEC464C1E079_1",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "media/photo_4196D53A_57D3_3A78_41D0_2C7D0251C812.png",
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "height": "88%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image18966"
 }
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.31",
     "y": "0.40",
     "zoomFactor": 1.1
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_0"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.35",
     "y": "0.57",
     "zoomFactor": 1.1
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_2"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.26",
     "y": "0.73",
     "zoomFactor": 1.1
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_40A31F10_57D3_2608_41C0_CF0032770BD3"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.70",
     "y": "0.70",
     "zoomFactor": 1.1
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_outside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.photo_4BF11069_57D0_FA1B_41C2_A2EB3AA912EC"
  }
 ],
 "id": "album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_AlbumPlayList"
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmlText_444BCA62_5831_6E09_41D3_882CF6204356",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "14%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText13410"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmlText_451E34C4_5851_1A08_41A5_5B38A8E95A58",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "10%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText17554"
 }
},
{
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmlText_437C7F4A_57D3_E618_41D2_0CF28606E549",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "borderSize": 0,
 "minHeight": 0,
 "width": "100%",
 "scrollBarMargin": 2,
 "minWidth": 0,
 "height": "50%",
 "paddingTop": 10,
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "borderRadius": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">.El \u00c1rea de Recreaci\u00f3n Nacional Golden Gate es un \u00c1rea de Recreaci\u00f3n Nacional de los EE. UU. Que protege 82,027 acres de paisajes ecol\u00f3gicos e hist\u00f3ricos que rodean el \u00c1rea de la Bah\u00eda de San Francisco. Gran parte del parque es tierra utilizada anteriormente por el ej\u00e9rcito de los Estados Unidos.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">El parque no es un lugar continuo, sino m\u00e1s bien una colecci\u00f3n de \u00e1reas que se extienden desde el sur del condado de San Mateo hasta el norte del condado de Marin, e incluye varias \u00e1reas de San Francisco. El parque es tan diverso como expansivo; Contiene atracciones tur\u00edsticas famosas como el Monumento Nacional Muir Woods, Alcatraz y el Presidio de San Francisco. El GGNRA tambi\u00e9n alberga m\u00e1s de 3.000 especies de plantas y animales, [3] abarca 59 millas (95 km) de la costa de la bah\u00eda y el oc\u00e9ano y tiene fortificaciones militares que abarcan siglos de historia de California, desde los conquistadores espa\u00f1oles hasta los sitios de misiles Nike de la Guerra Fr\u00eda .</SPAN></DIV></div>",
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText7245"
 }
},
{
 "paddingLeft": 0,
 "id": "image_uid45D95A52_5851_6E09_4195_7D902B4A8383_1",
 "width": "100%",
 "paddingRight": 0,
 "borderSize": 0,
 "url": "media/photo_41987E61_57F3_6608_4199_D8DCCE74E2A4.jpg",
 "minHeight": 0,
 "horizontalAlign": "center",
 "verticalAlign": "middle",
 "minWidth": 0,
 "height": "50%",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "Image",
 "borderRadius": 0,
 "paddingBottom": 0,
 "scaleMode": "fit_inside",
 "shadow": false,
 "propagateClick": false,
 "data": {
  "name": "Image18965"
 }
},
{
 "class": "PhotoPlayList",
 "items": [
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.59",
     "y": "0.58",
     "zoomFactor": 1.09
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_41F10611_5831_2608_419A_3469A2373180_0"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.32",
     "y": "0.41",
     "zoomFactor": 1.09
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_41F10611_5831_2608_419A_3469A2373180_1"
  },
  {
   "camera": {
    "targetPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.57",
     "y": "0.67",
     "zoomFactor": 1.09
    },
    "duration": 5000,
    "easing": "linear",
    "initialPosition": {
     "class": "PhotoCameraPosition",
     "x": "0.50",
     "y": "0.50",
     "zoomFactor": 1
    },
    "class": "MovementPhotoCamera",
    "scaleMode": "fit_inside"
   },
   "class": "PhotoPlayListItem",
   "media": "this.album_41F10611_5831_2608_419A_3469A2373180_2"
  }
 ],
 "id": "album_41F10611_5831_2608_419A_3469A2373180_AlbumPlayList"
},
{
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_41F10611_5831_2608_419A_3469A2373180_AlbumPlayList, this.htmltext_45D00A57_5851_6E08_41CA_ADCA2AB79748, this.albumitem_45D19A57_5851_6E08_41D4_996EF647EFD9); this.loopAlbum(this.playList_427CFB0B_5830_EE18_417E_A09A78F58EF3, 0)",
 "media": "this.album_41F10611_5831_2608_419A_3469A2373180",
 "player": "this.viewer_uid45D1AA57_5851_6E08_41C1_F4CFF41D67ADPhotoAlbumPlayer",
 "id": "albumitem_45D19A57_5851_6E08_41D4_996EF647EFD9"
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid45D88A55_5851_6E08_41C3_8E823252B9CE",
 "id": "viewer_uid45D88A55_5851_6E08_41C3_8E823252B9CEPhotoAlbumPlayer"
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uid45D1AA57_5851_6E08_41C1_F4CFF41D67AD",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea18973"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmltext_45D00A57_5851_6E08_41CA_ADCA2AB79748",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 5,
 "backgroundOpacity": 0.7,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 5,
 "html": "",
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18976"
 }
},
{
 "left": 10,
 "paddingLeft": 0,
 "id": "component_45D0CA57_5851_6E08_41D5_E36D65F0B069",
 "transparencyActive": false,
 "iconURL": "skin/album_left.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "click": "this.loadFromCurrentMediaPlayList(this.album_41F10611_5831_2608_419A_3469A2373180_AlbumPlayList, -1)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton18977"
 }
},
{
 "paddingLeft": 0,
 "id": "component_45D72A57_5851_6E08_41D5_5ACC2AFA6C6F",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/album_right.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "click": "this.loadFromCurrentMediaPlayList(this.album_41F10611_5831_2608_419A_3469A2373180_AlbumPlayList, 1)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton18978"
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_40CD1AD5_57D1_2E0B_41C1_DD46B4D2D739",
 "levels": [
  {
   "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 500,
   "height": 750
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 3,
 "frameCount": 9,
 "frameDuration": 62,
 "colCount": 3,
 "id": "AnimatedImageResource_424838ED_5833_2A18_41D3_C21F5E4E5DBC",
 "levels": [
  {
   "url": "media/panorama_5BD7FD41_57D3_EA08_41B5_F655D0F2FADF_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 330,
   "height": 180
  }
 ]
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "viewer_uid45D88A55_5851_6E08_41C3_8E823252B9CE",
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 50,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "shadow": false,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "paddingRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "ViewerArea18967"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "id": "htmltext_45DEFA55_5851_6E08_41D5_87D4E51F3896",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "paddingRight": 10,
 "backgroundColorDirection": "vertical",
 "minHeight": 0,
 "width": "100%",
 "borderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "minWidth": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "paddingTop": 5,
 "backgroundOpacity": 0.7,
 "class": "HTMLText",
 "borderRadius": 0,
 "shadow": false,
 "paddingBottom": 5,
 "html": "",
 "visible": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "data": {
  "name": "HTMLText18970"
 }
},
{
 "left": 10,
 "paddingLeft": 0,
 "id": "component_45D2BA56_5851_6E08_41C5_4D89C6F8E33D",
 "transparencyActive": false,
 "iconURL": "skin/album_left.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_AlbumPlayList, -1)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton18971"
 }
},
{
 "paddingLeft": 0,
 "id": "component_45D2AA56_5851_6E08_41C9_893500053AE1",
 "transparencyActive": false,
 "right": 10,
 "iconURL": "skin/album_right.png",
 "paddingRight": 0,
 "borderSize": 0,
 "minHeight": 0,
 "horizontalAlign": "center",
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "duration": 250,
  "easing": "cubic_in_out"
 },
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "top": "45%",
 "click": "this.loadFromCurrentMediaPlayList(this.album_4F1F9883_57D7_2A08_41D2_2E2F83D3230B_AlbumPlayList, 1)",
 "paddingTop": 0,
 "backgroundOpacity": 0,
 "class": "IconButton",
 "borderRadius": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "propagateClick": false,
 "data": {
  "name": "IconButton18972"
 }
},
{
 "class": "PhotoAlbumPlayer",
 "viewerArea": "this.viewer_uid45D1AA57_5851_6E08_41C1_F4CFF41D67AD",
 "id": "viewer_uid45D1AA57_5851_6E08_41C1_F4CFF41D67ADPhotoAlbumPlayer"
}],
 "start": "this.init()",
 "data": {
  "name": "Player1598"
 },
 "children": [
  "this.MainViewer",
  "this.Label_47BE116C_57D7_1A18_41C3_3ED6D1E150D1",
  "this.Image_444A9E69_57D1_2618_4190_C074AEFD8DED"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "borderSize": 0,
 "scripts": {
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "unregisterKey": function(key){  delete window[key]; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "registerKey": function(key, value){  window[key] = value; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "downloadEnabled": false,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "shadow": false,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
