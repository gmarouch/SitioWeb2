jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initslider-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingslider-1").amazingslider({
        sliderid:1,
        jsfolder:jsFolder,
        width:960,
        height:400,
        skinsfoldername:"",
        loadimageondemand:false,
        videohidecontrols:false,
        fullwidth:false,
        watermarkstyle:"text",
        donotresize:false,
        enabletouchswipe:true,
        fullscreen:false,
        autoplayvideo:false,
        addmargin:true,
        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",
        watermarktext:"amazingslider.com",
        watermarklink:"http://amazingslider.com?source=watermark",
        transitiononfirstslide:false,
        forceflash:false,
        isresponsive:true,
        forceflashonie11:true,
        forceflashonie10:true,
        pauseonmouseover:false,
        playvideoonclickthumb:true,
        showwatermark:false,
        slideinterval:5000,
        watermarkpositioncss:"display:block;position:absolute;bottom:4px;right:4px;",
        watermarkimage:"",
        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",
        randomplay:false,
        watermarktarget:"_blank",
        scalemode:"fill",
        loop:0,
        autoplay:true,
        navplayvideoimage:"play-32-32-0.png",
        timerheight:2,
        shownumbering:false,
        skin:"Content",
        addgooglefonts:false,
        navpreviewposition:"top",
        navpreviewwidth:120,
        googlefonts:"",
        textpositionmarginright:24,
        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",
        navthumbnavigationarrowimagewidth:32,
        navcolor:"#999999",
        arrowwidth:32,
        playvideoimage:"playvideo-64-64-0.png",
        titlecssresponsive:"font-size:12px;",
        texteffect1:"slide",
        texteffect2:"slide",
        ribbonposition:"topleft",
        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",
        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",
        arrowstyle:"mouseover",
        navthumbtitleheight:20,
        navswitchonmouseover:false,
        arrowtop:50,
        textstyle:"dynamic",
        playvideoimageheight:64,
        showbackgroundimage:false,
        customcss:"",
        navshowplaypausestandaloneheight:28,
        shadowcolor:"#aaaaaa",
        textbgcss:"display:none;",
        navdirection:"horizontal",
        navshowplaypausestandalonemarginx:8,
        bottomshadowimagewidth:96,
        navshowpreview:false,
        navmarginy:-30,
        navmarginx:16,
        textpositionmarginleft:24,
        navplaypauseimage:"navplaypause-28-28-0.png",
        backgroundimagetop:-10,
        timercolor:"#ffffff",
        navhighlightcolor:"#333333",
        texteffectdelay1:1000,
        texteffectdelay2:1500,
        texteffectduration1:600,
        texteffectduration2:600,
        navbuttoncolor:"#999999",
        texteffectslidedirection:"left",
        showfacebook:true,
        titlecss:"display:table; position:relative; font-weight:300; font-style:italic; font-size:32px; font-family:Georgia,sans-serif,Arial; color:#fff; padding:10px; margin:0px auto;",
        texteffectslidedistance1:60,
        texteffectslidedistance2:60,
        lightboxshowsocial:false,
        lightboxthumbtopmargin:12,
        navfeaturedarrowimageheight:8,
        bordercolor:"#ffffff",
        navthumbtitlewidth:120,
        texteffectseparate:true,
        arrowheight:32,
        bottomshadowimage:"bottomshadow-110-95-1.png",
        lightboxshowdescription:false,
        timerposition:"bottom",
        navthumbnavigationstyle:"arrow",
        borderradius:0,
        lightboxshowfacebook:true,
        texteffecteasing2:"easeOutCubic",
        navthumbstyle:"imageonly",
        showtwitter:true,
        navbordercolor:"#ffffff",
        navpreviewarrowheight:8,
        navpreviewarrowimage:"previewarrow-16-8-0.png",
        showbottomshadow:false,
        texteffectslidedistance:30,
        texteffectdelay:500,
        backgroundimage:"",
        textformat:"Center text",
        navshowbuttons:false,
        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:left;font:bold 14px Arial,Helvetica,sans-serif;color:#333;",
        ribbonmarginy:0,
        ribbonmarginx:0,
        navbuttonhighlightcolor:"#333333",
        socialmode:"mouseover",
        navpreviewheight:60,
        descriptioncssresponsive:"font-size:12px;",
        navthumbresponsivemode:"samesize",
        lightboxshowtwitter:true,
        navshowplaypause:true,
        navshowplayvideo:true,
        buttoncss:"display:block; position:relative; margin:10px auto;",
        navshowplaypausestandalonemarginy:8,
        navbuttonradius:0,
        navthumbcolumn:5,
        navthumbnavigationarrowimageheight:32,
        navradius:0,
        texteffecteasing1:"easeOutCubic",
        lightboxshownavigation:false,
        showshadow:false,
        navfeaturedarrowimagewidth:16,
        navborderhighlightcolor:"",
        textautohide:true,
        lightboxthumbwidth:80,
        navthumbtitlehovercss:"text-decoration:underline;",
        navthumbmediumheight:64,
        texteffectresponsivesize:600,
        texteffecteasing:"easeOutCubic",
        texteffect:"slide",
        lightboxthumbheight:60,
        navspacing:8,
        ribbonimage:"ribbon_topleft-0.png",
        navwidth:16,
        navheight:16,
        timeropacity:0.6,
        navthumbnavigationarrowimage:"carouselarrows-32-32-0.png",
        navshowplaypausestandalone:false,
        navpreviewbordercolor:"#ffffff",
        lightboxthumbbottommargin:8,
        navborder:4,
        navthumbmediumsize:800,
        textpositionmargintop:24,
        buttoncssresponsive:"",
        navarrowimage:"navarrows-28-28-0.png",
        arrowimage:"arrows-32-32-4.png",
        navfonthighlightcolor:"#666666",
        showpinterest:true,
        navpreviewborder:4,
        navbuttonshowbgimage:true,
        navbuttonbgimage:"navbuttonbgimage-28-28-0.png",
        playvideoimagewidth:64,
        navshowpreviewontouch:false,
        showtimer:false,
        navmultirows:false,
        showsocial:false,
        navfeaturedarrowimage:"featuredarrow-16-8-0.png",
        navthumbsmallsize:480,
        showribbon:false,
        navstyle:"bullets",
        descriptioncss:"display:block; position:relative; font-weight:300; font-style:bold; font-size:20px; line-height:30px; font-family:Georgia,sans-serif,Arial; color:#f39c12; padding:10px; margin:0px auto;background-color:rgba(52, 73, 94,.8)",
        numberingformat:"%NUM/%TOTAL ",
        navthumbmediumwidth:64,
        navfontsize:12,
        navimage:"bullet-16-16-1.png",
        navshowplaypausestandaloneautohide:false,
        navshowarrow:true,
        navshowfeaturedarrow:false,
        lightboxbarheight:64,
        ribbonimagey:0,
        ribbonimagex:0,
        navthumbsmallheight:48,
        textpositiondynamic:"centercenter",
        navrowspacing:8,
        navshowplaypausestandaloneposition:"bottomright",
        lightboxshowpinterest:true,
        arrowhideonmouseleave:1000,
        navshowplaypausestandalonewidth:28,
        navthumbresponsive:false,
        navopacity:0.8,
        backgroundimagewidth:120,
        arrowmargin:0,
        texteffectduration:600,
        border:0,
        navfontcolor:"#333333",
        bottomshadowimagetop:96,
        initsocial:false,
        textpositionstatic:"bottom",
        navthumbsmallcolumn:3,
        textcss:"display:block; padding:8px 16px; text-align:center;",
        navthumbsmallwidth:48,
        navthumbmediumcolumn:4,
        textpositionmarginstatic:0,
        navposition:"bottom",
        texteffectslidedirection1:"right",
        navpreviewarrowwidth:16,
        texteffectslidedirection2:"right",
        texteffectresponsive:true,
        shadowsize:5,
        textpositionmarginbottom:24,
        lightboxshowtitle:true,
        slide: {
            duration:1000,
            easing:"easeOutCubic",
            checked:true
        },
        transition:"slide",
        scalemode:"fill",
        isfullscreen:false,
        textformat: {

        }
    });
});