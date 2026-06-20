var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
var pageid = ahc_ajax_front.page_id;
var page_id = (pageid.length > 0) ? pageid : ''; 
var pagetitle = ahc_ajax_front.page_title;
var page_title = (pagetitle.length > 0) ? pagetitle : ''; 
var posttype = ahc_ajax_front.post_type;
var post_type = (posttype.length > 0) ? posttype : ''; 
var referer = document.referrer;
var useragent = window.navigator.userAgent;
var servername = location.hostname;
var hostname = location.host;
var request_uri = location.pathname.substring(1);

var xhttp = new XMLHttpRequest();

xhttp.open("POST", ahc_ajax_front.ajax_url, true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("action=ahcfree_track_visitor&page_id="+ page_id +"&page_title="+ page_title + "&post_type="+ post_type + "&referer="+ referer +"&useragent="+ useragent +"&servername="+ servername +"&hostname="+ hostname +"&request_uri="+request_uri);

}

/*
     FILE ARCHIVED ON 18:09:35 Sep 08, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 06:15:24 Jun 20, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.386
  exclusion.robots: 0.047
  exclusion.robots.policy: 0.039
  esindex: 0.007
  cdx.remote: 6.595
  LoadShardBlock: 95.451 (3)
  PetaboxLoader3.datanode: 88.856 (5)
  PetaboxLoader3.resolve: 659.676 (2)
  load_resource: 665.495
  loaddict: 22.774
*/