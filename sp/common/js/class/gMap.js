function initialize() {
	  	var latlng = new google.maps.LatLng(35.3871841,139.4276669);/*表示したい場所の経度、緯度*/
	  	var myOptions = {
	    zoom: 15, /*拡大比率*/
	    center: latlng, /*表示枠内の中心点*/
	    mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
	 };
  	var map = new google.maps.Map(document.getElementById('map_custmomize'), myOptions);/*マップのID取得*/

  	  var styleOptions =

  	  [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.country","elementType":"labels","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.country","elementType":"labels.text.stroke","stylers":[{"hue":"#ff0000"}]},{"featureType":"administrative.country","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.fill","stylers":[{"visibility":"on"}]},{"featureType":"administrative.province","elementType":"labels.text.stroke","stylers":[{"visibility":"on"}]},{"featureType":"administrative.locality","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#fcfcfc"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"off"},{"color":"#dddddd"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"visibility":"simplified"},{"color":"#dddddd"}]}
  	  ];



	 var styledMapOptions = { name: 'Akira Wakita Lab' }
	  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	  map.mapTypes.set('sample', sampleType);
	  map.setMapTypeId('sample');
	 

	/*WEB企画アイコンの取得*/
	
	//var icon = new google.maps.MarkerImage('common/img/contact/g-icon01.png',/*アイコンの場所*/
	//  new google.maps.Size(60,70),/*アイコンのサイズ*/
	//  new google.maps.Point(0,0)/*アイコンの位置*/
	//);
	 
	/*マーカーの設置*/
	//var markerOptions = {
	//  position: latlng,/*表示場所と同じ位置に設置*/
	//  map: map,
	//  icon: icon,
	//  title: 'Akira WAkita Lab'/*マーカーのtitle*/
	//};


	var marker = new google.maps.Marker(markerOptions);
			 
	}
