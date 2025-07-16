<!-- Begin

var eelam;
function startText5() {
eelam = document.yarlsuratha.box1.value;

eelam = eelam.replace(/d/g, "க்ஷ");
eelam = eelam.replace(/d"/g, "க்ஷா");
eelam = eelam.replace(/'d/g, "க்ஷை");
eelam = eelam.replace(/«/g, "க்ஷி");
eelam = eelam.replace(/»/g, "க்ஷீ");
eelam = eelam.replace(/d#/g, "க்ஷு");
eelam = eelam.replace(/d$/g, "க்ஷூ");
eelam = eelam.replace(/`d/g, "க்ஷெ");
eelam = eelam.replace(/&d/g, "க்ஷே");
eelam = eelam.replace(/`d"/g, "க்ஷொ");
eelam = eelam.replace(/&d"/g, "க்ஷோ");
eelam = eelam.replace(/`d\[/g, "க்ஷௌ");
eelam = eelam.replace(/º/g, "க்ஷ்");


eelam = eelam.replace(/`\^\[/g, "ஜௌ");
eelam = eelam.replace(/&\^"/g, "ஜோ");
eelam = eelam.replace(/`\^"/g, "ஜொ");
eelam = eelam.replace(/\^"/g, "ஜா");
eelam = eelam.replace(/Õ/g, "ஜி");
eelam = eelam.replace(/õ/g, "ஜீ");
eelam = eelam.replace(/\^#/g, "ஜு");
eelam = eelam.replace(/\^$/g, "ஜூ");
eelam = eelam.replace(/`\^/g, "ஜெ");
eelam = eelam.replace(/&\^/g, "ஜே");
eelam = eelam.replace(/'\^/g, "ஜை");
eelam = eelam.replace(/Ò/g, "ஜ்");
eelam = eelam.replace(/\^/g, "ஜ");

eelam = eelam.replace(/`L\[/g, "கௌ");
eelam = eelam.replace(/&L"/g, "கோ");
eelam = eelam.replace(/`L"/g, "கொ");
eelam = eelam.replace(/L"/g, "கா");
eelam = eelam.replace(/f/g, "கி");
eelam = eelam.replace(/g/g, "கீ");
eelam = eelam.replace(/h/g, "கு");
eelam = eelam.replace(/i/g, "கூ");
eelam = eelam.replace(/`L/g, "கெ");
eelam = eelam.replace(/&L/g, "கே");
eelam = eelam.replace(/'L/g, "கை");
eelam = eelam.replace(/e/g, "க்");
eelam = eelam.replace(/L/g, "க");

eelam = eelam.replace(/`M\[/g, "ஙௌ");
eelam = eelam.replace(/&M"/g, "ஙோ");
eelam = eelam.replace(/`M"/g, "ஙொ");
eelam = eelam.replace(/M"/g, "ஙா");
eelam = eelam.replace(/›/g, "ஙி");
eelam = eelam.replace(/‰/g, "ஙீ");
eelam = eelam.replace(/Š/g, "ஙு");
eelam = eelam.replace(/š/g, "ஙூ"); 
eelam = eelam.replace(/`M/g, "ஙெ");
eelam = eelam.replace(/&M/g, "ஙே");
eelam = eelam.replace(/'M/g, "ஙை");
eelam = eelam.replace(/‹/g, "ங்");
eelam = eelam.replace(/M/g, "ங");

eelam = eelam.replace(/`N\[/g, "சௌ");
eelam = eelam.replace(/&N"/g, "சோ");
eelam = eelam.replace(/`N"/g, "சொ");
eelam = eelam.replace(/N"/g, "சா");
eelam = eelam.replace(/p/g, "சி");
eelam = eelam.replace(/q/g, "சீ");
eelam = eelam.replace(/r/g, "சு");
eelam = eelam.replace(/s/g, "சூ");
eelam = eelam.replace(/`N/g, "செ");
eelam = eelam.replace(/&N/g, "சே");
eelam = eelam.replace(/'N/g, "சை");
eelam = eelam.replace(/o/g, "ச்");
eelam = eelam.replace(/N/g, "ச");

eelam = eelam.replace(/`O\[/g, "ஞௌ");
eelam = eelam.replace(/&O"/g, "ஞோ");
eelam = eelam.replace(/`O"/g, "ஞொ");
eelam = eelam.replace(/O"/g, "ஞா");
eelam = eelam.replace(/Œ/g, "ஞி");
eelam = eelam.replace(/œ/g, "ஞீ");
eelam = eelam.replace(/“/g, "ஞு");
eelam = eelam.replace(/”/g, "ஞூ");
eelam = eelam.replace(/`O/g, "ஞெ");
eelam = eelam.replace(/&O/g, "ஞே");
eelam = eelam.replace(/'O/g, "ஞை");
eelam = eelam.replace(/Ÿ/g, "ஞ்");
eelam = eelam.replace(/O/g, "ஞ");

eelam = eelam.replace(/`P\[/g, "டௌ");
eelam = eelam.replace(/&P"/g, "டோ");
eelam = eelam.replace(/`P"/g, "டொ");
eelam = eelam.replace(/P"/g, "டா");
eelam = eelam.replace(/z/g, "டி");
eelam = eelam.replace(/{/g, "டீ");
eelam = eelam.replace(/\|/g, "டு");
eelam = eelam.replace(/}/g, "டூ");
eelam = eelam.replace(/`P/g, "டெ");
eelam = eelam.replace(/&P/g, "டே");
eelam = eelam.replace(/'P/g, "டை");
eelam = eelam.replace(/y/g, "ட்");
eelam = eelam.replace(/P/g, "ட");

eelam = eelam.replace(/`Q\[/g, "ணௌ");
eelam = eelam.replace(/&Q"/g, "ணோ");
eelam = eelam.replace(/`Q"/g, "ணொ");
eelam = eelam.replace(/Q"/g, "ணா");
eelam = eelam.replace(/Â/g, "ணி");
eelam = eelam.replace(/È/g, "ணீ");
eelam = eelam.replace(/Ê/g, "ணு");
eelam = eelam.replace(/Ë/g, "ணூ");
eelam = eelam.replace(/`Q/g, "ணெ");
eelam = eelam.replace(/&Q/g, "ணே");
eelam = eelam.replace(/'Q/g, "ணை");
eelam = eelam.replace(/À/g, "ண்");
eelam = eelam.replace(/Q/g, "ண");

eelam = eelam.replace(/`R\[/g, "தௌ");
eelam = eelam.replace(/&R"/g, "தோ");
eelam = eelam.replace(/`R"/g, "தொ");
eelam = eelam.replace(/R"/g, "தா");
eelam = eelam.replace(/Ï/g, "தி");
eelam = eelam.replace(/©/g, "தீ");
eelam = eelam.replace(/®/g, "து");
eelam = eelam.replace(/_/g, "தூ");
eelam = eelam.replace(/`R/g, "தெ");
eelam = eelam.replace(/&R/g, "தே");
eelam = eelam.replace(/'R/g, "தை");
eelam = eelam.replace(/Î/g, "த்");
eelam = eelam.replace(/R/g, "த");

eelam = eelam.replace(/`S\[/g, "நௌ");
eelam = eelam.replace(/&S"/g, "நோ");
eelam = eelam.replace(/`S"/g, "நொ");
eelam = eelam.replace(/S"/g, "நா");
eelam = eelam.replace(/k/g, "நி");
eelam = eelam.replace(/Ù/g, "நீ");
eelam = eelam.replace(/Û/g, "நு");
eelam = eelam.replace(/l/g, "நூ");
eelam = eelam.replace(/`S/g, "நெ");
eelam = eelam.replace(/&S/g, "நே");
eelam = eelam.replace(/'S/g, "நை");
eelam = eelam.replace(/j/g, "ந்");
eelam = eelam.replace(/S/g, "ந");

eelam = eelam.replace(/`]\[/g, "னௌ");
eelam = eelam.replace(/&]"/g, "னோ");
eelam = eelam.replace(/`]"/g, "னொ");
eelam = eelam.replace(/]"/g, "னா");
eelam = eelam.replace(/Á/g, "னி");
eelam = eelam.replace(/Ã/g, "னீ");
eelam = eelam.replace(/ã/g, "னு");
eelam = eelam.replace(/Ó/g, "னூ");
eelam = eelam.replace(/`]/g, "னெ");
eelam = eelam.replace(/&]/g, "னே");
eelam = eelam.replace(/']/g, "னை");
eelam = eelam.replace(/Ô/g, "ன்");
eelam = eelam.replace(/]/g, "ன");

eelam = eelam.replace(/`T\[/g, "பௌ");
eelam = eelam.replace(/&T"/g, "போ");
eelam = eelam.replace(/`T"/g, "பொ");
eelam = eelam.replace(/T"/g, "பா");
eelam = eelam.replace(/n/g, "பி");
eelam = eelam.replace(/t/g, "பீ");
eelam = eelam.replace(/Ç/g, "பு");
eelam = eelam.replace(/ç/g, "பூ");
eelam = eelam.replace(/`T/g, "பெ");
eelam = eelam.replace(/&T/g, "பே");
eelam = eelam.replace(/'T/g, "பை");
eelam = eelam.replace(/m/g, "ப்");
eelam = eelam.replace(/T/g, "ப");

eelam = eelam.replace(/`U\[/g, "மௌ");
eelam = eelam.replace(/&U"/g, "மோ");
eelam = eelam.replace(/`U"/g, "மொ");
eelam = eelam.replace(/U"/g, "மா");
eelam = eelam.replace(/ñ/g, "மி");
eelam = eelam.replace(/¿/g, "மு");
eelam = eelam.replace(/¤/g, "மூ");
eelam = eelam.replace(/`U/g, "மெ");
eelam = eelam.replace(/&U/g, "மே");
eelam = eelam.replace(/'U/g, "மை");
eelam = eelam.replace(/Ñ/g, "ம்");
eelam = eelam.replace(/U/g, "ம");

eelam = eelam.replace(/`V\[/g, "யௌ");
eelam = eelam.replace(/&V"/g, "யோ");
eelam = eelam.replace(/`V"/g, "ய");
eelam = eelam.replace(/V"/g, "யா");
eelam = eelam.replace(/¥/g, "யி");
eelam = eelam.replace(/u/g, "யு");
eelam = eelam.replace(/¢/g, "யூ");
eelam = eelam.replace(/`V/g, "யெ");
eelam = eelam.replace(/&V/g, "யே");
eelam = eelam.replace(/'V/g, "யை");
eelam = eelam.replace(/£/g, "ய்");
eelam = eelam.replace(/V/g, "ய");

eelam = eelam.replace(/`W\[/g, "ரௌ");
eelam = eelam.replace(/&W"/g, "ரோ");
eelam = eelam.replace(/`W"/g, "ரொ");
eelam = eelam.replace(/W"/g, "ரா");
eelam = eelam.replace(/ê/g, "ரி");
eelam = eelam.replace(/ô/g, "ரீ");
eelam = eelam.replace(/û/g, "ரு");
eelam = eelam.replace(/á/g, "ரூ");
eelam = eelam.replace(/`W/g, "ரெ");
eelam = eelam.replace(/&W/g, "ரே");
eelam = eelam.replace(/'W/g, "ரை");
eelam = eelam.replace(/â/g, "ர்");
eelam = eelam.replace(/W/g, "ர");

eelam = eelam.replace(/`X\[/g, "லௌ");
eelam = eelam.replace(/&X"/g, "லோ");
eelam = eelam.replace(/`X"/g, "லொ");
eelam = eelam.replace(/X"/g, "லா");
eelam = eelam.replace(/ó/g, "லி");
eelam = eelam.replace(/ú/g, "லீ");
eelam = eelam.replace(/à/g, "லு");
eelam = eelam.replace(/è/g, "லூ");
eelam = eelam.replace(/`X/g, "லெ");
eelam = eelam.replace(/&X/g, "லே");
eelam = eelam.replace(/'X/g, "லை");
eelam = eelam.replace(/é/g, "ல்");
eelam = eelam.replace(/X/g, "ல");

eelam = eelam.replace(/`\[\[/g, "ளௌ");
eelam = eelam.replace(/&\["/g, "ளோ");
eelam = eelam.replace(/`\["/g, "ள");
eelam = eelam.replace(/\["/g, "ளா");
eelam = eelam.replace(/í/g, "ளி");
eelam = eelam.replace(/ø/g, "ளீ");
eelam = eelam.replace(/Ä/g, "ளு");
eelam = eelam.replace(/ì/g, "ளூ");
eelam = eelam.replace(/`\[/g, "ளெ");
eelam = eelam.replace(/&\[/g, "ளே");
eelam = eelam.replace(/'\[/g, "ளை");
eelam = eelam.replace(/å/g, "ள்");
eelam = eelam.replace(/\[/g, "ள");

eelam = eelam.replace(/`Y\[/g, "வௌ");
eelam = eelam.replace(/&Y"/g, "வோ");
eelam = eelam.replace(/`Y"/g, "வொ");
eelam = eelam.replace(/Y"/g, "வா");
eelam = eelam.replace(/ù/g, "வி");
eelam = eelam.replace(/ä/g, "வீ");
eelam = eelam.replace(/ë/g, "வு");
eelam = eelam.replace(/ö/g, "வூ");
eelam = eelam.replace(/`Y/g, "வெ");
eelam = eelam.replace(/&Y/g, "வே");
eelam = eelam.replace(/'Y/g, "வை");
eelam = eelam.replace(/ò/g, "வ்");
eelam = eelam.replace(/Y/g, "வ");

eelam = eelam.replace(/`Z\[/g, "ழௌ");
eelam = eelam.replace(/&Z"/g, "ழோ");
eelam = eelam.replace(/`Z"/g, "ழொ");
eelam = eelam.replace(/Z"/g, "ழா");
eelam = eelam.replace(/Å/g, "ழி");
eelam = eelam.replace(/î/g, "ழீ");
eelam = eelam.replace(/Ø/g, "ழு");
eelam = eelam.replace(/Æ/g, "ழூ");
eelam = eelam.replace(/`Z/g, "ழெ");
eelam = eelam.replace(/&Z/g, "ழே");
eelam = eelam.replace(/'Z/g, "ழை");
eelam = eelam.replace(/ü/g, "ழ்");
eelam = eelam.replace(/Z/g, "ழ");

eelam = eelam.replace(/`\\\[/g, "றௌ");
eelam = eelam.replace(/&\\"/g, "றோ");
eelam = eelam.replace(/`\\"/g, "றொ");
eelam = eelam.replace(/\\"/g, "றா");
eelam = eelam.replace(/Ü/g, "றி");
eelam = eelam.replace(/É/g, "றீ");
eelam = eelam.replace(/ï/g, "று");
eelam = eelam.replace(/ß/g, "றூ");
eelam = eelam.replace(/`\\/g, "றெ");
eelam = eelam.replace(/&\\/g, "றே");
eelam = eelam.replace(/'\\/g, "றை");
eelam = eelam.replace(/Ö/g, "ற்");
eelam = eelam.replace(/\\/g, "ற");


eelam = eelam.replace(/`a\[/g, "ஹௌ");
eelam = eelam.replace(/&a"/g, "ஹோ");
eelam = eelam.replace(/`a"/g, "ஹொ");
eelam = eelam.replace(/a"/g, "ஹா");
eelam = eelam.replace(/w/g, "ஹி");
eelam = eelam.replace(/Ú/g, "ஹீ");
eelam = eelam.replace(/`a/g, "ஹெ");
eelam = eelam.replace(/&a/g, "ஹே");
eelam = eelam.replace(/'a/g, "ஹை");
eelam = eelam.replace(/v/g, "ஹ்");
eelam = eelam.replace(/a/g, "ஹ");

eelam = eelam.replace(/`c\[/g, "ஷௌ");
eelam = eelam.replace(/&c"/g, "ஷோ");
eelam = eelam.replace(/`c"/g, "ஷொ");
eelam = eelam.replace(/c"/g, "ஷா");
eelam = eelam.replace(/ª/g, "ஷீ");
eelam = eelam.replace(/`c/g, "ஷெ");
eelam = eelam.replace(/&c/g, "ஷே");
eelam = eelam.replace(/'c/g, "ஷை");
eelam = eelam.replace(/Ì/g, "ஷ்");
eelam = eelam.replace(/c/g, "ஷ");

eelam = eelam.replace(/`b\[/g, "ஸௌ");
eelam = eelam.replace(/&b"/g, "ஸோ");
eelam = eelam.replace(/`b"/g, "ஸொ");
eelam = eelam.replace(/b"/g, "ஸா");
eelam = eelam.replace(/ÿ/g, "ஸி");
eelam = eelam.replace(/Í/g, "ஸீ");
eelam = eelam.replace(/`b/g, "ஸெ");
eelam = eelam.replace(/&b/g, "ஸே");
eelam = eelam.replace(/'b/g, "ஸை");
eelam = eelam.replace(/x/g, "ஸ்");
eelam = eelam.replace(/b/g, "ஸ");

eelam = eelam.replace(/A/g, "அ");
eelam = eelam.replace(/B/g, "ஆ");
eelam = eelam.replace(/C/g, "இ");
eelam = eelam.replace(/D/g, "ஈ");
eelam = eelam.replace(/E/g, "உ");
eelam = eelam.replace(/F/g, "ஊ");
eelam = eelam.replace(/G/g, "எ");
eelam = eelam.replace(/H/g, "ஏ");
eelam = eelam.replace(/I/g, "ஐ");
eelam = eelam.replace(/J/g, "ஒ")
eelam = eelam.replace(/K/g, "ஓ");
eelam = eelam.replace(/J\[/g, "ஔ");

eelam = eelam.replace(/¡/g, "மீ");//////////
eelam = eelam.replace(/¶/g, "ஷி");///
eelam = eelam.replace(/§/g, "யீ");/////

eelam = eelam.replace(/@/g, "ஃ");

eelam = eelam.replace(/~/g, "ஸ்ரீ");
eelam = eelam.replace(/ƒ/g, "‘");
eelam = eelam.replace(/†/g, "'");
eelam = eelam.replace(/…/g, "'");
eelam = eelam.replace(/º/g, "க்ஸ்");
eelam = eelam.replace(/d/g, "க்ஸ");
eelam = eelam.replace(/«/g, "க்ஸி");
eelam = eelam.replace(/»/g, "க்ஸீ");
eelam = eelam.replace(/>/g, "-");

document.yarlsuratha.box2.value=eelam;
}
//  End -->