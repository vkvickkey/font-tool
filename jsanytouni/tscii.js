<!-- Begin

var eelam;
function startText() {
eelam = document.yarlsuratha.box1.value;

eelam = eelam.replace(/­/g, "இ");
eelam = eelam.replace(/þ/g, "இ");
eelam = eelam.replace(/‡/g, "க்ஷ");
eelam = eelam.replace(/‡¡/g, "க்ஷா");
eelam = eelam.replace(/‡¢/g, "க்ஷி");
eelam = eelam.replace(/‡£/g, "க்ஷீ");
eelam = eelam.replace(/‡¤/g, "க்ஷு");
eelam = eelam.replace(/‡¥/g, "க்ஷூ");
eelam = eelam.replace(/¦‡/g, "க்ஷெ");
eelam = eelam.replace(/§‡/g, "க்ஷே");
eelam = eelam.replace(/¨‡/g, "க்ஷை");
eelam = eelam.replace(/¦‡¡/g, "க்ஷொ");
eelam = eelam.replace(/§‡¡/g, "க்ஷோ");
eelam = eelam.replace(/¦‡Ç/g, "க்ஷௌ");
eelam = eelam.replace(/Œ/g, "க்ஷ்");

eelam = eelam.replace(/¦¸ª/g, "கௌ");
eelam = eelam.replace(/§¸¡/g, "கோ");
eelam = eelam.replace(/¦¸¡/g, "கொ");
eelam = eelam.replace(/¸¡/g, "கா");
eelam = eelam.replace(/¸¢/g, "கி");
eelam = eelam.replace(/¸£/g, "கீ");
eelam = eelam.replace(/Ì/g, "கு");
eelam = eelam.replace(/Ü/g, "கூ");
eelam = eelam.replace(/¦¸/g, "கெ");
eelam = eelam.replace(/§¸/g, "கே");
eelam = eelam.replace(/¨¸/g, "கை");
eelam = eelam.replace(/¦¸¡/g, "கொ")
eelam = eelam.replace(/ì/g, "க்");
eelam = eelam.replace(/¸/g, "க");

eelam = eelam.replace(/¦¹ª/g, "ஙௌ");
eelam = eelam.replace(/§¹¡/g, "ஙோ");
eelam = eelam.replace(/¦¹¡/g, "ஙொ");
eelam = eelam.replace(/¹¡/g, "ஙா");
eelam = eelam.replace(/¹¢/g, "ஙி");
eelam = eelam.replace(/¹£/g, "ஙீ");
eelam = eelam.replace(/™/g, "ஙு");
eelam = eelam.replace(/›/g, "ஙூ");
eelam = eelam.replace(/¦¹/g, "ஙெ");
eelam = eelam.replace(/§¹/g, "ஙே");
eelam = eelam.replace(/¨¹/g, "ஙை");
eelam = eelam.replace(/¦¹¡/g, "ஙொ")
eelam = eelam.replace(/í/g, "ங்");
eelam = eelam.replace(/¹/g, "ங");

eelam = eelam.replace(/¦ºª/g, "சௌ");
eelam = eelam.replace(/§º¡/g, "சோ");
eelam = eelam.replace(/¦º¡/g, "சொ");
eelam = eelam.replace(/º¡/g, "சா");
eelam = eelam.replace(/º¢/g, "சி");
eelam = eelam.replace(/º£/g, "சீ");
eelam = eelam.replace(/Í/g, "சு");
eelam = eelam.replace(/Ý/g, "சூ");
eelam = eelam.replace(/¦º/g, "செ");
eelam = eelam.replace(/§º/g, "சே");
eelam = eelam.replace(/¨º/g, "சை");
eelam = eelam.replace(/¦º¡/g, "சொ")
eelam = eelam.replace(/î/g, "ச்");
eelam = eelam.replace(/º/g, "ச");

eelam = eelam.replace(/¦ƒª/g, "ஜௌ");
eelam = eelam.replace(/§ƒ¡/g, "ஜோ");
eelam = eelam.replace(/¦ƒ¡/g, "ஜொ");
eelam = eelam.replace(/ƒ¡/g, "ஜா");
eelam = eelam.replace(/ƒ¢/g, "ஜி");
eelam = eelam.replace(/ƒ£/g, "ஜீ");
eelam = eelam.replace(/ƒ¤/g, "ஜு");
eelam = eelam.replace(/ƒ¥/g, "ஜூ");
eelam = eelam.replace(/¦ƒ/g, "ஜெ");
eelam = eelam.replace(/§ƒ/g, "ஜே");
eelam = eelam.replace(/¨ƒ/g, "ஜை");
eelam = eelam.replace(/¦ƒ¡/g, "ஜொ")
eelam = eelam.replace(/ˆ/g, "ஜ்");
eelam = eelam.replace(/ƒ/g, "ஜ");

eelam = eelam.replace(/¦»ª/g, "ஞௌ");
eelam = eelam.replace(/§»¡/g, "ஞோ");
eelam = eelam.replace(/¦»¡/g, "ஞொ");
eelam = eelam.replace(/»¡/g, "ஞா");
eelam = eelam.replace(/»¢/g, "ஞி");
eelam = eelam.replace(/»£/g, "ஞீ");
eelam = eelam.replace(//g, "ஞு");
eelam = eelam.replace(/œ/g, "ஞூ");
eelam = eelam.replace(/¦»/g, "ஞெ");
eelam = eelam.replace(/§»/g, "ஞே");
eelam = eelam.replace(/¨»/g, "ஞை");
eelam = eelam.replace(/¦»¡/g, "ஞொ")
eelam = eelam.replace(/ï/g, "ஞ்");
eelam = eelam.replace(/»/g, "ஞ");

eelam = eelam.replace(/¦¼ª/g, "டௌ");
eelam = eelam.replace(/§¼¡/g, "டோ");
eelam = eelam.replace(/¦¼¡/g, "டொ");
eelam = eelam.replace(/¼¡/g, "டா");
eelam = eelam.replace(/Ê/g, "டி");
eelam = eelam.replace(/Ë/g, "டீ");
eelam = eelam.replace(/Î/g, "டு");
eelam = eelam.replace(/Þ/g, "டூ");
eelam = eelam.replace(/¦¼/g, "டெ");
eelam = eelam.replace(/§¼/g, "டே");
eelam = eelam.replace(/¨¼/g, "டை");
eelam = eelam.replace(/¦¼¡/g, "டொ")
eelam = eelam.replace(/ð/g, "ட்");
eelam = eelam.replace(/¼/g, "ட");
eelam = eelam.replace(/¦½ª/g, "ணௌ");
eelam = eelam.replace(/§½¡/g, "ணோ");
eelam = eelam.replace(/¦½¡/g, "ணொ");
eelam = eelam.replace(/½¡/g, "ணா");
eelam = eelam.replace(/½¢/g, "ணி");
eelam = eelam.replace(/½£/g, "ணீ");
eelam = eelam.replace(/Ï/g, "ணு");
eelam = eelam.replace(/ß/g, "ணூ");
eelam = eelam.replace(/¦½/g, "ணெ");
eelam = eelam.replace(/§½/g, "ணே");
eelam = eelam.replace(/¨½/g, "ணை");
eelam = eelam.replace(/¦½¡/g, "ணொ")
eelam = eelam.replace(/ñ/g, "ண்");
eelam = eelam.replace(/½/g, "ண");


eelam = eelam.replace(/¦¾ª/g, "தௌ");
eelam = eelam.replace(/§¾¡/g, "தோ");
eelam = eelam.replace(/¦¾¡/g, "தொ");
eelam = eelam.replace(/¾¡/g, "தா");
eelam = eelam.replace(/¾¢/g, "தி");
eelam = eelam.replace(/¾£/g, "தீ");
eelam = eelam.replace(/Ð/g, "து");
eelam = eelam.replace(/à/g, "தூ");
eelam = eelam.replace(/¦¾/g, "தெ");
eelam = eelam.replace(/§¾/g, "தே");
eelam = eelam.replace(/¨¾/g, "தை");
eelam = eelam.replace(/¦¾¡/g, "தொ")
eelam = eelam.replace(/ò/g, "த்");
eelam = eelam.replace(/¾/g, "த");


eelam = eelam.replace(/¦¿ª/g, "நௌ");
eelam = eelam.replace(/§¿¡/g, "நோ");
eelam = eelam.replace(/¦¿¡/g, "நொ");
eelam = eelam.replace(/¿¡/g, "நா");
eelam = eelam.replace(/¿¢/g, "நி");
eelam = eelam.replace(/¿£/g, "நீ");
eelam = eelam.replace(/Ñ/g, "நு");
eelam = eelam.replace(/á/g, "நூ");
eelam = eelam.replace(/¦¿/g, "நெ");
eelam = eelam.replace(/§¿/g, "நே");
eelam = eelam.replace(/¨¿/g, "நை");
eelam = eelam.replace(/¦¿¡/g, "நொ")
eelam = eelam.replace(/ó/g, "ந்");
eelam = eelam.replace(/¿/g, "ந");


eelam = eelam.replace(/¦Éª/g, "னௌ");
eelam = eelam.replace(/§É¡/g, "னோ");
eelam = eelam.replace(/¦É¡/g, "னொ");
eelam = eelam.replace(/É¡/g, "னா");
eelam = eelam.replace(/É¢/g, "னி");
eelam = eelam.replace(/É£/g, "னீ");
eelam = eelam.replace(/Û/g, "னு");
eelam = eelam.replace(/ë/g, "னூ");
eelam = eelam.replace(/¦É/g, "னெ");
eelam = eelam.replace(/§É/g, "னே");
eelam = eelam.replace(/¨É/g, "னை");
eelam = eelam.replace(/¦É¡/g, "னொ")
eelam = eelam.replace(/ý/g, "ன்");
eelam = eelam.replace(/É/g, "ன");

eelam = eelam.replace(/¦Àª/g, "பௌ");
eelam = eelam.replace(/§À¡/g, "போ");
eelam = eelam.replace(/¦À¡/g, "பொ");
eelam = eelam.replace(/À¡/g, "பா");
eelam = eelam.replace(/À¢/g, "பி");
eelam = eelam.replace(/À£/g, "பீ");
eelam = eelam.replace(/Ò/g, "பு");
eelam = eelam.replace(/â/g, "பூ");
eelam = eelam.replace(/¦À/g, "பெ");
eelam = eelam.replace(/§À/g, "பே");
eelam = eelam.replace(/¨À/g, "பை");
eelam = eelam.replace(/¦À¡/g, "பொ")
eelam = eelam.replace(/ô/g, "ப்");
eelam = eelam.replace(/À/g, "ப");

eelam = eelam.replace(/¦Áª/g, "மௌ");
eelam = eelam.replace(/§Á¡/g, "மோ");
eelam = eelam.replace(/¦Á¡/g, "மொ");
eelam = eelam.replace(/Á¡/g, "மா");
eelam = eelam.replace(/Á¢/g, "மி");
eelam = eelam.replace(/Á£/g, "மீ");
eelam = eelam.replace(/Ó/g, "மு");
eelam = eelam.replace(/ã/g, "மூ");
eelam = eelam.replace(/¦Á/g, "மெ");
eelam = eelam.replace(/§Á/g, "மே");
eelam = eelam.replace(/¨Á/g, "மை");
eelam = eelam.replace(/¦Á¡/g, "மொ")
eelam = eelam.replace(/õ/g, "ம்");
eelam = eelam.replace(/Á/g, "ம");
eelam = eelam.replace(/¦Âª/g, "யௌ");
eelam = eelam.replace(/§Â¡/g, "யோ");
eelam = eelam.replace(/¦Â¡/g, "யொ");
eelam = eelam.replace(/Â¡/g, "யா");
eelam = eelam.replace(/Â¢/g, "யி");
eelam = eelam.replace(/Â£/g, "யீ");
eelam = eelam.replace(/Ô/g, "யு");
eelam = eelam.replace(/ä/g, "யூ");
eelam = eelam.replace(/¦Â/g, "யெ");
eelam = eelam.replace(/§Â/g, "யே");
eelam = eelam.replace(/¨Â/g, "யை");

eelam = eelam.replace(/ö/g, "ய்");
eelam = eelam.replace(/Â/g, "ய");

eelam = eelam.replace(/¦Ãª/g, "ரௌ");
eelam = eelam.replace(/§Ã¡/g, "ரோ");
eelam = eelam.replace(/¦Ã¡/g, "ரொ");
eelam = eelam.replace(/Ã¡/g, "ரா");
eelam = eelam.replace(/Ã¢/g, "ரி");
eelam = eelam.replace(/Ã£/g, "ரீ");
eelam = eelam.replace(/Õ/g, "ரு");
eelam = eelam.replace(/å/g, "ரூ");
eelam = eelam.replace(/¦Ã/g, "ரெ");
eelam = eelam.replace(/§Ã/g, "ரே");
eelam = eelam.replace(/¨Ã/g, "ரை");
eelam = eelam.replace(/÷/g, "ர்");
eelam = eelam.replace(/Ã/g, "ர");

eelam = eelam.replace(/¦Äª/g, "லௌ");
eelam = eelam.replace(/§Ä¡/g, "லோ");
eelam = eelam.replace(/¦Ä¡/g, "லொ");
eelam = eelam.replace(/Ä¡/g, "லா");
eelam = eelam.replace(/Ä¢/g, "லி");
eelam = eelam.replace(/Ä£/g, "லீ");
eelam = eelam.replace(/Ö/g, "லு");
eelam = eelam.replace(/æ/g, "லூ");
eelam = eelam.replace(/¦Ä/g, "லெ");
eelam = eelam.replace(/§Ä/g, "லே");
eelam = eelam.replace(/¨Ä/g, "லை");
eelam = eelam.replace(/¦Ä¡/g, "லொ")
eelam = eelam.replace(/ø/g, "ல்");
eelam = eelam.replace(/Ä/g, "ல");

eelam = eelam.replace(/¦Çª/g, "ளௌ");
eelam = eelam.replace(/§Ç¡/g, "ளோ");
eelam = eelam.replace(/¦Ç¡/g, "ளொ")
eelam = eelam.replace(/Ç¡/g, "ளா");
eelam = eelam.replace(/Ç¢/g, "ளி");
eelam = eelam.replace(/Ç£/g, "ளீ");
eelam = eelam.replace(/Ù/g, "ளு");
eelam = eelam.replace(/é/g, "ளூ");
eelam = eelam.replace(/¦Ç/g, "ளெ");
eelam = eelam.replace(/§Ç/g, "ளே");
eelam = eelam.replace(/¨Ç/g, "ளை");

eelam = eelam.replace(/û/g, "ள்");
eelam = eelam.replace(/Ç/g, "ள");
eelam = eelam.replace(/¦Åª/g, "வௌ");
eelam = eelam.replace(/§Å¡/g, "வோ");
eelam = eelam.replace(/¦Å¡/g, "வொ");
eelam = eelam.replace(/Å¡/g, "வா");
eelam = eelam.replace(/Å¢/g, "வி");
eelam = eelam.replace(/Å£/g, "வீ");
eelam = eelam.replace(/×/g, "வு");
eelam = eelam.replace(/ç/g, "வூ");
eelam = eelam.replace(/¦Å/g, "வெ");
eelam = eelam.replace(/§Å/g, "வே");
eelam = eelam.replace(/¨Å/g, "வை");
eelam = eelam.replace(/¦Å¡/g, "வொ")
eelam = eelam.replace(/ù/g, "வ்");
eelam = eelam.replace(/Å/g, "வ");


eelam = eelam.replace(/¦Æª/g, "ழௌ");
eelam = eelam.replace(/§Æ¡/g, "ழோ");
eelam = eelam.replace(/¦Æ¡/g, "ழொ");
eelam = eelam.replace(/Æ¡/g, "ழா");
eelam = eelam.replace(/Æ¢/g, "ழி");
eelam = eelam.replace(/Æ£/g, "ழீ");
eelam = eelam.replace(/Ø/g, "ழு");
eelam = eelam.replace(/è/g, "ழூ");
eelam = eelam.replace(/¦Æ/g, "ழெ");
eelam = eelam.replace(/§Æ/g, "ழே");
eelam = eelam.replace(/¨Æ/g, "ழை");
eelam = eelam.replace(/¦Æ¡/g, "ழொ")
eelam = eelam.replace(/ú/g, "ழ்");
eelam = eelam.replace(/Æ/g, "ழ");

eelam = eelam.replace(/¦Èª/g, "றௌ");
eelam = eelam.replace(/§È¡/g, "றோ");
eelam = eelam.replace(/¦È¡/g, "றொ");
eelam = eelam.replace(/È¡/g, "றா");
eelam = eelam.replace(/È¢/g, "றி");
eelam = eelam.replace(/È£/g, "றீ");
eelam = eelam.replace(/Ú/g, "று");
eelam = eelam.replace(/ê/g, "றூ");
eelam = eelam.replace(/¦È/g, "றெ");
eelam = eelam.replace(/§È/g, "றே");
eelam = eelam.replace(/¨È/g, "றை");
eelam = eelam.replace(/¦È¡/g, "றொ")
eelam = eelam.replace(/ü/g, "ற்");
eelam = eelam.replace(/È/g, "ற");

eelam = eelam.replace(/¦†ª/g, "ஹௌ");
eelam = eelam.replace(/§†¡/g, "ஹோ");
eelam = eelam.replace(/¦†¡/g, "ஹொ");
eelam = eelam.replace(/†¡/g, "ஹா");
eelam = eelam.replace(/†¢/g, "ஹி");
eelam = eelam.replace(/†£/g, "ஹீ");
eelam = eelam.replace(/¦†/g, "ஹெ");
eelam = eelam.replace(/§†/g, "ஹே");
eelam = eelam.replace(/¨†/g, "ஹை");
eelam = eelam.replace(/¦†¡/g, "ஹொ")
eelam = eelam.replace(/‹/g, "ஹ்");
eelam = eelam.replace(/†/g, "ஹ");


eelam = eelam.replace(/¦„ª/g, "ஷௌ");
eelam = eelam.replace(/§„¡/g, "ஷோ");
eelam = eelam.replace(/¦„¡/g, "ஷொ");
eelam = eelam.replace(/„¡/g, "ஷா");
eelam = eelam.replace(/„¢/g, "ஷி");
eelam = eelam.replace(/„£/g, "ஷீ");
eelam = eelam.replace(/¦„/g, "ஷெ");
eelam = eelam.replace(/§„/g, "ஷே");
eelam = eelam.replace(/¨„/g, "ஷை");
eelam = eelam.replace(/¦„¡/g, "ஷொ")
eelam = eelam.replace(/‰/g, "ஷ்");
eelam = eelam.replace(/„/g, "ஷ");


eelam = eelam.replace(/¦…ª/g, "ஸௌ");
eelam = eelam.replace(/§…¡/g, "ஸோ");
eelam = eelam.replace(/¦…¡/g, "ஸொ");
eelam = eelam.replace(/…¡/g, "ஸா");
eelam = eelam.replace(/…¢/g, "ஸி");
eelam = eelam.replace(/…£/g, "ஸீ");
eelam = eelam.replace(/¦…/g, "ஸெ");
eelam = eelam.replace(/§…/g, "ஸே");
eelam = eelam.replace(/¨…/g, "ஸை");
eelam = eelam.replace(/¦…¡/g, "ஸொ")
eelam = eelam.replace(/Š/g, "ஸ்");
eelam = eelam.replace(/…/g, "ஸ");




eelam = eelam.replace(/«/g, "அ");
eelam = eelam.replace(/¬/g, "ஆ");
eelam = eelam.replace(/®/g, "ஈ");
eelam = eelam.replace(/¯/g, "உ");
eelam = eelam.replace(/°/g, "ஊ");
eelam = eelam.replace(/±/g, "எ");
eelam = eelam.replace(/²/g, "ஏ");
eelam = eelam.replace(/³/g, "ஐ");
eelam = eelam.replace(/´/g, "ஒ")
eelam = eelam.replace(/µ/g, "ஓ");
eelam = eelam.replace(/¶/g, "ஔ");



eelam = eelam.replace(/∙/g, "ஃ");

eelam = eelam.replace(//g, "௧");
eelam = eelam.replace(//g, "௨");
eelam = eelam.replace(//g, "௩");
eelam = eelam.replace(//g, "௪");
eelam = eelam.replace(//g, "௫");
eelam = eelam.replace(//g, "௰");
eelam = eelam.replace(//g, "௱");
eelam = eelam.replace(/Ÿ/g, "௲");
eelam = eelam.replace(//g, "௯");
eelam = eelam.replace(//g, "௭");
eelam = eelam.replace(//g, "௮")
eelam = eelam.replace(//g, "௬");
eelam = eelam.replace(/‚/g, "ஸ்ரீ");








document.yarlsuratha.box2.value=eelam;
}
//  End -->