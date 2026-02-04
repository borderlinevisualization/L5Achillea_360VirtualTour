(function(){
    var script = {
 "verticalAlign": "top",
 "start": "this.init(); this.syncPlaylists([this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist,this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist,this.mainPlayList]); this.playList_3494F55C_2803_76C7_41A1_058B1910D6E2.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "width": "100%",
 "vrPolyfillScale": 0.74,
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Player",
 "mouseWheelEnabled": true,
 "children": [
  "this.MainViewer",
  "this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B",
  "this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974",
  "this.IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
  "this.IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4",
  "this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
  "this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694",
  "this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90"
 ],
 "horizontalAlign": "left",
 "backgroundPreloadEnabled": true,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "buttonToggleFullscreen": "this.IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
 "scripts": {
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "existsKey": function(key){  return key in window; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getKey": function(key){  return window[key]; }
 },
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scrollBarMargin": 2,
 "downloadEnabled": false,
 "height": "100%",
 "layout": "absolute",
 "buttonToggleMute": "this.IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Player15048"
 },
 "borderRadius": 0,
 "gap": 10,
 "definitions": [{
 "label": "L5Achillea_360-Lantai2_DraftAngle",
 "id": "map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E",
 "width": 2000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E.jpeg",
    "width": 1600,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_lq.jpeg",
    "width": 181,
    "class": "ImageResourceLevel",
    "height": 362,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.08,
 "maximumZoomFactor": 4,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.64,
 "overlays": [
  "this.overlay_28A0A3CA_27F2_128D_41A1_6BCC07B8EBB0",
  "this.overlay_37E627FF_27F2_F284_418C_9845B697B3F0",
  "this.overlay_3768BC17_27F2_1584_41B4_0365DD58C4E4",
  "this.overlay_37FA55F6_27F2_1685_41B4_08A7725EBCFB"
 ],
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_t.jpg",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "minimumZoomFactor": 0.1,
 "height": 4000,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "items": [
  {
   "media": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_camera"
  },
  {
   "media": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_camera"
  },
  {
   "media": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540_camera"
  },
  {
   "media": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65_camera"
  },
  {
   "media": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164_camera"
  },
  {
   "media": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_camera"
  },
  {
   "media": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_camera"
  },
  {
   "media": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_camera"
  }
 ],
 "id": "ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist",
 "class": "PlayList"
},
{
 "items": [
  {
   "media": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_camera"
  },
  {
   "media": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_camera"
  },
  {
   "media": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540_camera"
  },
  {
   "media": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65_camera"
  },
  {
   "media": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164_camera"
  },
  {
   "media": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_camera"
  },
  {
   "media": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_camera"
  },
  {
   "media": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_camera"
  }
 ],
 "id": "DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_252041BE_2801_AE43_41B8_B841DE0DC164",
 "hfovMin": "120%",
 "label": "Foyer",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_t.jpg",
 "overlays": [
  "this.overlay_3B7244C3_2806_97C1_41A6_71FEE76BCC4F",
  "this.overlay_3C08BC91_2807_7641_41B0_4F5CFC0F8430",
  "this.overlay_3C0CDF15_2807_7241_41C1_AD66A6A9663B",
  "this.overlay_3C2F2DE4_2801_71C6_41C1_F816DC32A60C"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_camera",
 "manualRotationSpeed": 800
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_251C88A3_2801_7E42_4199_E4B75B811540",
 "hfovMin": "120%",
 "label": "Kitchen",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_t.jpg",
 "overlays": [
  "this.overlay_3B839952_2802_9EC3_41AD_D0075840C00F"
 ],
 "hfovMax": 130
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_251C88A3_2801_7E42_4199_E4B75B811540_camera",
 "manualRotationSpeed": 800
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_camera",
 "manualRotationSpeed": 800
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_camera",
 "manualRotationSpeed": 800
},
{
 "label": "L5Achillea_360-Lantai1_DraftAngle",
 "id": "map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B",
 "width": 2000,
 "fieldOfViewOverlayOutsideColor": "#000000",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B.jpeg",
    "width": 1600,
    "class": "ImageResourceLevel",
    "height": 3200
   },
   {
    "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_lq.jpeg",
    "width": 181,
    "class": "ImageResourceLevel",
    "height": 362,
    "tags": "preload"
   }
  ]
 },
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 4,
 "class": "Map",
 "fieldOfViewOverlayInsideOpacity": 0.64,
 "overlays": [
  "this.overlay_29AC725E_27F2_0D84_41BE_903D03C78188",
  "this.overlay_290B53DA_27FE_128D_416C_12BA6D57E475",
  "this.overlay_284F8ACC_27FE_1285_41BA_FBC949ECCBC8",
  "this.overlay_28CCC283_27FE_1283_41B4_394ADABF95A6"
 ],
 "initialZoomFactor": 1,
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_t.jpg",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "minimumZoomFactor": 0.1,
 "height": 4000,
 "fieldOfViewOverlayOutsideOpacity": 0
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C",
 "hfovMin": "120%",
 "label": "Exterior",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_t.jpg",
 "overlays": [
  "this.overlay_3A00F80B_280E_9E42_41B8_E87C3FBCFA27"
 ],
 "hfovMax": 130
},
{
 "items": [
  {
   "media": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_camera"
  },
  {
   "media": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_camera"
  },
  {
   "media": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540_camera"
  },
  {
   "media": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65_camera"
  },
  {
   "media": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164_camera"
  },
  {
   "media": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_camera"
  },
  {
   "media": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_camera"
  },
  {
   "media": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B",
   "camera": "this.panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "duration": 0,
 "id": "effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD",
 "easing": "linear",
 "class": "SlideInEffect",
 "from": "left"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_camera",
 "manualRotationSpeed": 800
},
{
 "touchControlMode": "drag_rotation",
 "buttonRestart": "this.IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
 "buttonMoveRight": "this.IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
 "buttonZoomOut": "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "buttonCardboardView": "this.IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonPlayRight": "this.IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "buttonPause": "this.IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
 "class": "PanoramaPlayer",
 "buttonZoomIn": "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "buttonMoveUp": "this.IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
 "buttonMoveLeft": "this.IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
 "buttonMoveDown": "this.IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18",
 "buttonPlayLeft": "this.IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
 "mouseControlMode": "drag_acceleration"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_251E4B79_2802_F2CE_41B1_02362F7B348B",
 "hfovMin": "120%",
 "label": "Bathroom",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_t.jpg",
 "overlays": [
  "this.overlay_3C66C30C_2803_B247_41B1_E8D363C47EA6",
  "this.overlay_3CD7C925_2802_BE46_41A5_24BCC3265004"
 ],
 "hfovMax": 130
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_41141370_50BF_FA97_41C3_A342C2449FA3",
 "easing": "linear",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_25220C5A_2801_96C2_41A4_F61F69692D65_camera",
 "manualRotationSpeed": 800
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_40715E77_50BF_2A98_41D1_DB8935A82E59",
 "easing": "linear",
 "class": "SlideOutEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_3497455C_2803_76C7_41BF_4449154D4AAB",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_25220C5A_2801_96C2_41A4_F61F69692D65"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_251C88A3_2801_7E42_4199_E4B75B811540"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33",
 "hfovMin": "120%",
 "label": "Living Room",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_t.jpg",
 "overlays": [
  "this.overlay_3B06F217_280F_B241_41C2_76429E81AB81",
  "this.overlay_3BDCEE4E_280E_92C2_41C0_9FB086BEF97F",
  "this.overlay_3B65D7F4_2801_91C6_41B5_8A57FFD11FCA",
  "this.overlay_3B365081_2803_6E41_41C2_253D4528B531"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_25220C5A_2801_96C2_41A4_F61F69692D65",
 "hfovMin": "120%",
 "label": "Bedroom 1",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_t.jpg",
 "overlays": [
  "this.overlay_3BA5E830_2801_BE5E_41BA_9457D6477949"
 ],
 "hfovMax": 130
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E",
 "hfovMin": "120%",
 "label": "Bedroom 2",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_t.jpg",
 "overlays": [
  "this.overlay_3C652D1E_2802_F642_41C3_E4CC06241EA9"
 ],
 "hfovMax": 130
},
{
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer",
 "buttonZoomIn": "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "movementMode": "constrained",
 "buttonZoomOut": "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "id": "MapViewerMapPlayer"
},
{
 "duration": 0,
 "to": "left",
 "id": "effect_B3293793_A2EC_9E39_41DE_887C39B8DD62",
 "easing": "linear",
 "class": "SlideOutEffect"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_252041BE_2801_AE43_41B8_B841DE0DC164_camera",
 "manualRotationSpeed": 800
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_3494D55C_2803_76C7_41C0_1C39010F7DC3",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_3494F55C_2803_76C7_41A1_058B1910D6E2",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 4.25,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 4.25,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_camera",
 "class": "PanoramaCamera",
 "manualRotationSpeed": 800,
 "automaticRotationSpeed": 4
},
{
 "duration": 1000,
 "to": "top",
 "id": "effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA",
 "easing": "linear",
 "class": "SlideOutEffect"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_3494955C_2803_76C7_41B1_E9234F6B5346",
 "class": "PlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_252041BE_2801_AE43_41B8_B841DE0DC164"
  }
 ],
 "vfov": 180,
 "partial": false,
 "id": "panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB",
 "hfovMin": "120%",
 "label": "Master Bedroom",
 "class": "Panorama",
 "pitch": 0,
 "hfov": 360,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/f/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/f/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/r/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/r/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/b/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/b/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/d/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/d/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/l/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/l/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/u/0/{row}_{column}.jpg",
      "rowCount": 5,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2560,
      "colCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/u/1/{row}_{column}.jpg",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_t.jpg"
  }
 ],
 "thumbnailUrl": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_t.jpg",
 "overlays": [
  "this.overlay_3C5449F1_2801_B1DE_41B7_8D1014D9D870"
 ],
 "hfovMax": 130
},
{
 "transitionDuration": 500,
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "width": "100%",
 "minHeight": 50,
 "toolTipFontSize": "2vmin",
 "toolTipOpacity": 1,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarRight": 0,
 "playbackBarHeight": 10,
 "minWidth": 100,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "bold",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "height": "100%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Helvetica Rounded",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 0.5,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "vrPointerColor": "#FFFFFF",
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "borderRadius": 0,
 "paddingTop": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "paddingBottom": 0,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "id": "Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B",
 "left": "1.65%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "children": [
  "this.MapViewer",
  "this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C"
 ],
 "horizontalAlign": "left",
 "class": "Container",
 "minHeight": 1,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "3.06%",
 "height": "28.2%",
 "width": "20.989%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container Denah"
 },
 "overflow": "scroll",
 "gap": 10
},
{
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarWidth": 10,
 "id": "Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974",
 "left": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "0%",
 "children": [
  "this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047",
  "this.Image_41864BE8_50BD_E988_41D3_BF183798BC15"
 ],
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundColorDirection": "vertical",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": false,
 "minWidth": 1,
 "layout": "absolute",
 "bottom": "0%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "0%",
 "scrollBarMargin": 2,
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_40050340_50BC_DAF7_41B2_3FF5CFAD49DA, 'hideEffect', false)",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container2534"
 },
 "borderRadius": 0,
 "gap": 10,
 "overflow": "scroll"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 23,
 "propagateClick": false,
 "id": "IconButton_4124ED63_51DD_2EB8_41B6_821698441290",
 "paddingRight": 0,
 "class": "IconButton",
 "right": "3.02%",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "width": 35,
 "iconURL": "skin/IconButton_4124ED63_51DD_2EB8_41B6_821698441290.png",
 "borderSize": 0,
 "minWidth": 1,
 "mode": "push",
 "bottom": "4.04%",
 "height": 23,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton7201"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "maxWidth": 35
},
{
 "verticalAlign": "middle",
 "transparencyActive": false,
 "maxHeight": 1024,
 "propagateClick": false,
 "id": "IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4",
 "left": "94.39%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": "2.52%",
 "horizontalAlign": "center",
 "minHeight": 1,
 "iconURL": "skin/IconButton_53A57C0F_4BCB_7BAA_41B7_D8A5A38F8DE4.png",
 "borderSize": 0,
 "mode": "push",
 "minWidth": 1,
 "click": "if(!this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B.get('visible')){ this.setComponentVisibility(this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B, true, 0, this.effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_93CF56DC_9F23_C85A_41CF_F49472D44C0B, false, 0, this.effect_B3293793_A2EC_9E39_41DE_887C39B8DD62, 'hideEffect', false) }; if(!this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694.get('visible')){ this.setComponentVisibility(this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694, true, 0, this.effect_B32AD793_A2EC_9E39_41DD_8B16FC3843AD, 'showEffect', false) } else { this.setComponentVisibility(this.Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694, false, 0, this.effect_B3293793_A2EC_9E39_41DE_887C39B8DD62, 'hideEffect', false) }",
 "bottom": "13.77%",
 "top": "80.55%",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton18264"
 },
 "borderRadius": 0,
 "cursor": "hand",
 "maxWidth": 1024
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "maxHeight": 128,
 "toolTipFontFamily": "Helvetica Rounded",
 "id": "IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913",
 "left": "94.63%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "IconButton",
 "right": "2.71%",
 "toolTipShadowSpread": 0,
 "horizontalAlign": "center",
 "toolTipBorderColor": "#767676",
 "minHeight": 1,
 "toolTip": "Fullscreen",
 "toolTipFontSize": "2vmin",
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#FFFFFF",
 "toolTipShadowBlurRadius": 3,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "iconURL": "skin/IconButton_5C7C0F58_4BCB_D5B6_41D2_0994130E7913.png",
 "borderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "bold",
 "mode": "toggle",
 "minWidth": 1,
 "top": "87.1%",
 "bottom": "8.75%",
 "toolTipBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "backgroundOpacity": 0,
 "toolTipDisplayTime": 600,
 "shadow": false,
 "toolTipPaddingTop": 4,
 "toolTipBorderRadius": 3,
 "paddingBottom": 0,
 "toolTipShadowOpacity": 0,
 "paddingTop": 0,
 "data": {
  "name": "IconButton1493"
 },
 "borderRadius": 0,
 "toolTipFontStyle": "normal",
 "cursor": "hand",
 "maxWidth": 128,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0
},
{
 "paddingBottom": 0,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "verticalAlign": "middle",
 "id": "Container_5C5B58AA_4BC8_BCEA_41BA_0E6334DE3694",
 "left": "0.3%",
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "class": "Container",
 "right": "94.88%",
 "children": [
  "this.IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
  "this.IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
  "this.IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
  "this.IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
  "this.Container_5C58C8AA_4BC8_BCEA_41C8_82BAFB45EC11",
  "this.IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
  "this.IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
  "this.IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
  "this.IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4"
 ],
 "horizontalAlign": "center",
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "contentOpaque": true,
 "minWidth": 20,
 "layout": "vertical",
 "bottom": "41.64%",
 "top": "2.43%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "shadow": false,
 "borderRadius": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container Button"
 },
 "overflow": "hidden",
 "gap": 4
},
{
 "itemThumbnailWidth": 75,
 "id": "ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90",
 "itemLabelFontStyle": "normal",
 "scrollBarColor": "#FFFFFF",
 "itemMode": "normal",
 "class": "ThumbnailList",
 "right": "0%",
 "paddingLeft": 20,
 "itemLabelHorizontalAlign": "center",
 "width": 167.05,
 "itemPaddingRight": 3,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "minHeight": 20,
 "itemThumbnailOpacity": 1,
 "itemBorderRadius": 0,
 "itemThumbnailShadowOpacity": 0.54,
 "itemLabelFontFamily": "Arial",
 "minWidth": 20,
 "itemPaddingLeft": 3,
 "itemHorizontalAlign": "center",
 "itemLabelPosition": "bottom",
 "height": "78.251%",
 "itemOpacity": 1,
 "selectedItemLabelFontColor": "#FFCC00",
 "itemThumbnailShadowSpread": 1,
 "itemThumbnailShadowHorizontalLength": 3,
 "itemBackgroundOpacity": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 10,
 "itemThumbnailBorderRadius": 50,
 "itemPaddingTop": 3,
 "shadow": false,
 "verticalAlign": "top",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "propagateClick": false,
 "rollOverItemBackgroundOpacity": 0,
 "rollOverItemLabelFontWeight": "normal",
 "paddingRight": 20,
 "horizontalAlign": "left",
 "selectedItemLabelFontWeight": "bold",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "playList": "this.ThumbnailList_4017C3E7_51A4_F9B9_41B9_DCE2A569BB90_playlist",
 "top": "1.27%",
 "itemThumbnailShadowBlurRadius": 8,
 "borderSize": 0,
 "itemLabelFontSize": 14,
 "scrollBarMargin": 2,
 "itemThumbnailShadowVerticalLength": 3,
 "itemVerticalAlign": "middle",
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailScaleMode": "fit_outside",
 "layout": "vertical",
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 75,
 "itemThumbnailShadow": true,
 "borderRadius": 5,
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "data": {
  "name": "ThumbnailList35762"
 },
 "itemLabelGap": 9,
 "scrollBarWidth": 10,
 "gap": 10,
 "itemThumbnailShadowColor": "#000000"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 40,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C58B8AA_4BC8_BCEA_41B4_DE2F6D9599C6_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31994"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "map": {
  "width": 180,
  "x": 1182.02,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 1474.16
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Master Bedroom"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_28A0A3CA_27F2_128D_41A1_6BCC07B8EBB0",
 "image": {
  "x": 1182.02,
  "height": 180,
  "y": 1474.16,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_0.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 786.52,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 1222.47
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Foyer"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_37E627FF_27F2_F284_418C_9845B697B3F0",
 "image": {
  "x": 786.52,
  "height": 180,
  "y": 1222.47,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_1.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 741.57,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 746.07
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Bedroom 2"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_3768BC17_27F2_1584_41B4_0365DD58C4E4",
 "image": {
  "x": 741.57,
  "height": 180,
  "y": 746.07,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_2.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 656.18,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 1896.63
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Bathroom"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_37FA55F6_27F2_1685_41B4_08A7725EBCFB",
 "image": {
  "x": 656.18,
  "height": 180,
  "y": 1896.63,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B106EE0_27EC_F9A9_41BD_30BC5F46679E_HS_3.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01 Left"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -44.15,
   "yaw": 136.79,
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_3DF5BD62_281E_96C3_41A0_7B177B7EAD28",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "id": "overlay_3B7244C3_2806_97C1_41A6_71FEE76BCC4F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 136.79,
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -44.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -41.64,
   "yaw": -76.5,
   "hfov": 10.14,
   "image": "this.AnimatedImageResource_3DF59D62_281E_96C3_41A2_96872F1C3724",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bedroom 2"
  }
 ],
 "id": "overlay_3C08BC91_2807_7641_41B0_4F5CFC0F8430",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -76.5,
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.64
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -45.16,
   "yaw": 62.43,
   "hfov": 9.57,
   "image": "this.AnimatedImageResource_3DF5ED62_281E_96C3_41C0_D2E74F5B0FEE",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Master Bedroom"
  }
 ],
 "id": "overlay_3C0CDF15_2807_7241_41C1_AD66A6A9663B",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 62.43,
   "hfov": 9.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.16
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -34.86,
   "yaw": 85.92,
   "hfov": 11.34,
   "image": "this.AnimatedImageResource_3DF5CD62_281E_96C3_41B2_4204EF681D2A",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bathroom"
  }
 ],
 "id": "overlay_3C2F2DE4_2801_71C6_41C1_F816DC32A60C",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 85.92,
   "hfov": 11.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -47.67,
   "yaw": 97.85,
   "hfov": 9.14,
   "image": "this.AnimatedImageResource_3DF67D62_281E_96C3_41AF_547A7A7B1295",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "id": "overlay_3B839952_2802_9EC3_41AD_D0075840C00F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 97.85,
   "hfov": 9.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -47.67
  }
 ]
},
{
 "map": {
  "width": 180,
  "x": 961.8,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 3424.72
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Exterior"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_29AC725E_27F2_0D84_41BE_903D03C78188",
 "image": {
  "x": 961.8,
  "height": 180,
  "y": 3424.72,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_0.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 993.26,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 1734.83
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_290B53DA_27FE_128D_416C_12BA6D57E475",
 "image": {
  "x": 993.26,
  "height": 180,
  "y": 1734.83,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_1.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 732.58,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 822.47
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Bedroom 1"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_284F8ACC_27FE_1285_41BA_FBC949ECCBC8",
 "image": {
  "x": 732.58,
  "height": 180,
  "y": 822.47,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_2.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "map": {
  "width": 180,
  "x": 1155.06,
  "class": "HotspotMapOverlayMap",
  "offsetX": 0,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "offsetY": 0,
  "height": 180,
  "y": 853.93
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotMapOverlayArea",
   "toolTip": "Kitchen"
  }
 ],
 "data": {
  "label": "Image"
 },
 "class": "AreaHotspotMapOverlay",
 "useHandCursor": true,
 "rollOverDisplay": false,
 "id": "overlay_28CCC283_27FE_1283_41B4_394ADABF95A6",
 "image": {
  "x": 1155.06,
  "height": 180,
  "y": 853.93,
  "width": 180,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_2B0DAD6A_27EC_F8B9_41A4_834295EC507B_HS_3.png",
     "width": 144,
     "class": "ImageResourceLevel",
     "height": 144
    }
   ]
  },
  "class": "HotspotMapOverlayImage"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -3.54,
   "yaw": 6.02,
   "hfov": 6.74,
   "image": "this.AnimatedImageResource_3DF76D61_281E_96C1_41C1_60814989D229",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Interior"
  }
 ],
 "id": "overlay_3A00F80B_280E_9E42_41B8_E87C3FBCFA27",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 6.02,
   "hfov": 6.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.54
  }
 ]
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 40,
 "minHeight": 0,
 "iconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_53D8B8A9_4BC8_BC96_41AF_22FC524252EB_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31985"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C5888AA_4BC8_BCEA_41B5_E27C149BABF1_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31992"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_53D8A8A9_4BC8_BC96_41A3_0C5343BF3740_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31984"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 40,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C58A8AA_4BC8_BCEA_4193_4778D29CBE25_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31993"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 40,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31990"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C5B48AA_4BC8_BCEA_41BA_F0CADDE725D4_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31995"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31989"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_53DB58A9_4BC8_BC96_41BC_CEB7FE65F132_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31987"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 32,
 "minHeight": 0,
 "iconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "rollOverIconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31991"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "verticalAlign": "middle",
 "transparencyActive": true,
 "propagateClick": false,
 "id": "IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "IconButton",
 "width": 40,
 "minHeight": 0,
 "iconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09.png",
 "borderSize": 0,
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "rollOverIconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09_rollover.png",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "pressedIconURL": "skin/IconButton_53DB48A9_4BC8_BC96_41BF_CF0B2CA7AB09_pressed.png",
 "paddingTop": 0,
 "data": {
  "name": "Button31986"
 },
 "borderRadius": 0,
 "cursor": "hand"
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01 Right"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -10.49,
   "yaw": -150.61,
   "hfov": 7.41,
   "image": "this.AnimatedImageResource_3DF55D62_281E_96C3_41B1_003D362449ED",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Master Bedroom"
  }
 ],
 "id": "overlay_3C66C30C_2803_B247_41B1_E8D363C47EA6",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -150.61,
   "hfov": 7.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -56.21,
   "yaw": -155.38,
   "hfov": 7.54,
   "image": "this.AnimatedImageResource_3DF4BD62_281E_96C3_41BE_0010D2B7AA95",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Foyer"
  }
 ],
 "id": "overlay_3CD7C925_2802_BE46_41A5_24BCC3265004",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_1_HS_1_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -155.38,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -56.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01c"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -25.06,
   "yaw": 9.65,
   "hfov": 8.15,
   "image": "this.AnimatedImageResource_3DF69D61_281E_96C1_41B2_7C2D47EF8C9F",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Exterior"
  }
 ],
 "id": "overlay_3B06F217_280F_B241_41C2_76429E81AB81",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 9.65,
   "hfov": 8.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Arrow 01"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": 11.87,
   "yaw": 60.5,
   "hfov": 7.05,
   "image": "this.AnimatedImageResource_3DF6ED61_281E_96C1_41C1_1CCF4A20DBB6",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Foyer"
  }
 ],
 "id": "overlay_3BDCEE4E_280E_92C2_41C0_9FB086BEF97F",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_1_0_0_map.gif",
      "width": 17,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 60.5,
   "hfov": 7.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -15.26,
   "yaw": 151.89,
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_3DF6CD62_281E_96C3_41B8_CA05F3640479",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Bedroom 1"
  }
 ],
 "id": "overlay_3B65D7F4_2801_91C6_41B5_8A57FFD11FCA",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_2_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 151.89,
   "hfov": 7.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.26
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -17.21,
   "yaw": 173.68,
   "hfov": 7.74,
   "image": "this.AnimatedImageResource_3DF62D62_281E_96C3_41C3_8F84FE8192AA",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Kitchen"
  }
 ],
 "id": "overlay_3B365081_2803_6E41_41C2_253D4528B531",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_3_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 173.68,
   "hfov": 7.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -38.37,
   "yaw": 66.45,
   "hfov": 10.64,
   "image": "this.AnimatedImageResource_3DF65D62_281E_96C3_41B3_479F14071959",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Living Room"
  }
 ],
 "id": "overlay_3BA5E830_2801_BE5E_41BA_9457D6477949",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 66.45,
   "hfov": 10.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -42.39,
   "yaw": -16.45,
   "hfov": 10.02,
   "image": "this.AnimatedImageResource_3DF57D62_281E_96C3_41C3_D61EF7B1467B",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Foyer"
  }
 ],
 "id": "overlay_3C652D1E_2802_F642_41C3_E4CC06241EA9",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": -16.45,
   "hfov": 10.02,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -42.39
  }
 ]
},
{
 "transitionDuration": 0,
 "progressBackgroundColorDirection": "vertical",
 "id": "MapViewer",
 "left": "0%",
 "playbackBarBottom": 0,
 "paddingLeft": 0,
 "playbackBarHeadOpacity": 1,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "class": "ViewerArea",
 "right": "0%",
 "toolTipShadowSpread": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "minHeight": 1,
 "toolTipFontSize": "2vmin",
 "toolTipOpacity": 1,
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarRight": 0,
 "minWidth": 1,
 "toolTipPaddingBottom": 4,
 "toolTipFontWeight": "bold",
 "playbackBarProgressBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "shadow": false,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "paddingBottom": 0,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Helvetica Rounded",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 500,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "transparent",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarOpacity": 1,
 "borderSize": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "bottom": "0%",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 0,
 "toolTipPaddingRight": 6,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingTop": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBorderColor": "#000000",
 "data": {
  "name": "MapViewer"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03a"
 },
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "pitch": -40.38,
   "yaw": 81.52,
   "hfov": 10.33,
   "image": "this.AnimatedImageResource_3DF52D62_281E_96C3_41B1_4B679348AAFE",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "Foyer"
  }
 ],
 "id": "overlay_3C5449F1_2801_B1DE_41B7_8D1014D9D870",
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_1_HS_0_0_0_map.gif",
      "width": 28,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "yaw": 81.52,
   "hfov": 10.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -40.38
  }
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "id": "DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C",
 "popUpBackgroundColor": "#FFFFFF",
 "propagateClick": false,
 "paddingLeft": 5,
 "rollOverPopUpBackgroundColor": "#FFFFFF",
 "paddingRight": 5,
 "class": "DropDown",
 "right": "0%",
 "fontColor": "#FFFFFF",
 "selectedPopUpBackgroundColor": "#333333",
 "popUpShadow": false,
 "minHeight": 20,
 "popUpBackgroundOpacity": 0.9,
 "backgroundColorDirection": "vertical",
 "selectedPopUpFontColor": "#FFFFFF",
 "popUpGap": 0,
 "playList": "this.DropDown_929F9504_9F24_C9AA_41C2_E223FE35C51C_playlist",
 "borderSize": 0,
 "minWidth": 200,
 "top": "0%",
 "fontSize": 14,
 "data": {
  "name": "DropDown1204"
 },
 "backgroundColor": [
  "#666666"
 ],
 "height": "5.376%",
 "popUpShadowBlurRadius": 6,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "backgroundOpacity": 0.9,
 "shadow": false,
 "popUpFontColor": "#000000",
 "paddingBottom": 0,
 "paddingTop": 0,
 "popUpShadowSpread": 1,
 "borderRadius": 4,
 "gap": 0,
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "width": "100.026%",
 "fontWeight": "normal"
},
{
 "verticalAlign": "middle",
 "maxHeight": 236,
 "propagateClick": false,
 "id": "Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047",
 "left": "17.85%",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "24.25%",
 "horizontalAlign": "center",
 "url": "skin/Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047.png",
 "minHeight": 1,
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_40715E77_50BF_2A98_41D1_DB8935A82E59, 'hideEffect', false)",
 "bottom": "41.97%",
 "top": "32.24%",
 "backgroundOpacity": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image2636"
 },
 "borderRadius": 0,
 "maxWidth": 960
},
{
 "verticalAlign": "middle",
 "maxHeight": 821,
 "propagateClick": false,
 "id": "Image_41864BE8_50BD_E988_41D3_BF183798BC15",
 "paddingLeft": 0,
 "paddingRight": 0,
 "class": "Image",
 "right": "32.81%",
 "horizontalAlign": "center",
 "url": "skin/Image_41864BE8_50BD_E988_41D3_BF183798BC15.png",
 "minHeight": 1,
 "width": "32.027%",
 "borderSize": 0,
 "minWidth": 1,
 "click": "this.setComponentVisibility(this.Container_5D718A0A_50AC_EA8B_41C8_17C8BA4B9974, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false); this.setComponentVisibility(this.Image_5EC9A35F_50AD_DA89_41CE_6208E1C27047, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false); this.setComponentVisibility(this.Image_41864BE8_50BD_E988_41D3_BF183798BC15, false, 0, this.effect_41141370_50BF_FA97_41C3_A342C2449FA3, 'hideEffect', false)",
 "bottom": "23.06%",
 "height": "19.891%",
 "backgroundOpacity": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Image12123"
 },
 "borderRadius": 0,
 "maxWidth": 1460
},
{
 "propagateClick": false,
 "children": [
  "this.IconButton_5C58D8AA_4BC8_BCEA_41B2_157CFE651C1B",
  "this.IconButton_5C58E8AA_4BC8_BCEA_41C3_08FC210FFB53",
  "this.IconButton_5C58F8AA_4BC8_BCEA_41CB_6165C6075A18"
 ],
 "verticalAlign": "middle",
 "id": "Container_5C58C8AA_4BC8_BCEA_41C8_82BAFB45EC11",
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "class": "Container",
 "width": 40,
 "minHeight": 20,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "layout": "vertical",
 "borderSize": 0,
 "height": "100%",
 "backgroundOpacity": 0,
 "shadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "data": {
  "name": "Container31988"
 },
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "gap": 4,
 "overflow": "hidden"
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF5BD62_281E_96C3_41A0_7B177B7EAD28",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF59D62_281E_96C3_41A2_96872F1C3724",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF5ED62_281E_96C3_41C0_D2E74F5B0FEE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF5CD62_281E_96C3_41B2_4204EF681D2A",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_252041BE_2801_AE43_41B8_B841DE0DC164_1_HS_3_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF67D62_281E_96C3_41AF_547A7A7B1295",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_251C88A3_2801_7E42_4199_E4B75B811540_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF76D61_281E_96C1_41C1_60814989D229",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2AC2F0AB_27FE_AE42_419F_C658A5E80B7C_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF55D62_281E_96C3_41B1_003D362449ED",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_1_HS_0_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF4BD62_281E_96C3_41BE_0010D2B7AA95",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_251E4B79_2802_F2CE_41B1_02362F7B348B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF69D61_281E_96C1_41B2_7C2D47EF8C9F",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_0_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "rowCount": 3,
 "frameCount": 9,
 "class": "AnimatedImageResource",
 "colCount": 3,
 "id": "AnimatedImageResource_3DF6ED61_281E_96C1_41C1_1CCF4A20DBB6",
 "frameDuration": 62,
 "levels": [
  {
   "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_1_0.png",
   "width": 300,
   "class": "ImageResourceLevel",
   "height": 270
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF6CD62_281E_96C3_41B8_CA05F3640479",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF62D62_281E_96C3_41C3_8F84FE8192AA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2AD0C420_27FE_B67E_41BB_C9DA63EB1D33_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF65D62_281E_96C3_41B3_479F14071959",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_25220C5A_2801_96C2_41A4_F61F69692D65_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF57D62_281E_96C3_41C3_D61EF7B1467B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_25201F7C_2802_B2C7_41B8_850F873EEE3E_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_3DF52D62_281E_96C3_41B1_4B679348AAFE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_25215C44_2801_76C6_41B2_4EDD9F763CFB_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 900
  }
 ]
}],
 "desktopMipmappingEnabled": false,
 "overflow": "visible"
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
