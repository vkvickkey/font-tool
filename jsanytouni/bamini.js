﻿var eelam;
function startText1() {
	
eelam = document.yarlsuratha.box1.value;


eelam = eelam.replace(/\[§/g, "ஜு"); 
eelam = eelam.replace(/,/g, "இ");
eelam = eelam.replace(/\|/g, ";");
eelam = eelam.replace(/>/g, ",");
eelam = eelam.replace(/sp/g, "ளி");
eelam = eelam.replace(/hp/g, "ரி");
eelam = eelam.replace(/hP/g, "ரீ");
eelam = eelam.replace(/uP/g, "ரீ");
eelam = eelam.replace(/u;/g, "ர்");
eelam = eelam.replace(/h;/g, "ர்");
eelam = eelam.replace(/H/g, "ர்");

eelam = eelam.replace(/n~s/g, "க்ஷௌ");
eelam = eelam.replace(/N~h/g, "க்ஷோ");
eelam = eelam.replace(/n~h/g, "க்ஷொ");
eelam = eelam.replace(/~h/g, "க்ஷா");
eelam = eelam.replace(/~p/g, "க்ஷி");
eelam = eelam.replace(/~P/g, "க்ஷீ");
eelam = eelam.replace(/~§/g, "க்ஷு");
eelam = eelam.replace(/~_/g, "க்ஷூ");
eelam = eelam.replace(/n~/g, "க்ஷெ");
eelam = eelam.replace(/N~/g, "க்ஷே");
eelam = eelam.replace(/i~/g, "க்ஷை");
eelam = eelam.replace(/~;/g, "க்ஷ்");
eelam = eelam.replace(/~/g, "க்ஷ");

eelam = eelam.replace(/nfs/g, "கௌ");
eelam = eelam.replace(/Nfh/g, "கோ");
eelam = eelam.replace(/nfh/g, "கொ");
eelam = eelam.replace(/fh/g, "கா");
eelam = eelam.replace(/fp/g, "கி");
eelam = eelam.replace(/fP/g, "கீ");
eelam = eelam.replace(/F/g, "கு");
eelam = eelam.replace(/\$/g, "கூ");
eelam = eelam.replace(/nf/g, "கெ");
eelam = eelam.replace(/Nf/g, "கே");
eelam = eelam.replace(/if/g, "கை");
eelam = eelam.replace(/f;/g, "க்");
eelam = eelam.replace(/f/g, "க");

eelam = eelam.replace(/nqs/g, "ஙௌ");
eelam = eelam.replace(/Nqh/g, "ஙோ");
eelam = eelam.replace(/nqh/g, "ஙொ");
eelam = eelam.replace(/qh/g, "ஙா");
eelam = eelam.replace(/qp/g, "ஙி");
eelam = eelam.replace(/qP/g, "ஙீ");
eelam = eelam.replace(/nq/g, "ஙெ");
eelam = eelam.replace(/Nq/g, "ஙே");
eelam = eelam.replace(/iq/g, "ஙை");
eelam = eelam.replace(/q;/g, "ங்");
eelam = eelam.replace(/q/g, "ங");

eelam = eelam.replace(/nrs/g, "சௌ");
eelam = eelam.replace(/Nrh/g, "சோ");
eelam = eelam.replace(/nrh/g, "சொ");
eelam = eelam.replace(/rh/g, "சா");
eelam = eelam.replace(/rp/g, "சி");
eelam = eelam.replace(/rP/g, "சீ");
eelam = eelam.replace(/R/g, "சு");
eelam = eelam.replace(/#/g, "சூ");
eelam = eelam.replace(/nr/g, "செ");
eelam = eelam.replace(/Nr/g, "சே");
eelam = eelam.replace(/ir/g, "சை");
eelam = eelam.replace(/r;/g, "ச்");
eelam = eelam.replace(/r/g, "ச");


eelam = eelam.replace(/n\[s/g, "ஜௌ");
eelam = eelam.replace(/N\[h/g, "ஜோ");
eelam = eelam.replace(/n\[h/g, "ஜொ");
eelam = eelam.replace(/\[h/g, "ஜா");
eelam = eelam.replace(/\[p/g, "ஜி");
eelam = eelam.replace(/\[P/g, "ஜீ");

eelam = eelam.replace(/\[_/g, "ஜூ");
eelam = eelam.replace(/n\[/g, "ஜெ");
eelam = eelam.replace(/N\[/g, "ஜே");
eelam = eelam.replace(/i\[/g, "ஜை");
eelam = eelam.replace(/\[;/g, "ஜ்");
eelam = eelam.replace(/\[/g, "ஜ");

eelam = eelam.replace(/nQs/g, "ஞௌ");
eelam = eelam.replace(/NQh/g, "ஞோ");
eelam = eelam.replace(/nQh/g, "ஞொ");
eelam = eelam.replace(/Qh/g, "ஞா");
eelam = eelam.replace(/Qp/g, "ஞி");
eelam = eelam.replace(/QP/g, "ஞீ");
eelam = eelam.replace(/nQ/g, "ஞெ");
eelam = eelam.replace(/NQ/g, "ஞே");
eelam = eelam.replace(/iQ/g, "ஞை");
eelam = eelam.replace(/Q;/g, "ஞ்");
eelam = eelam.replace(/Q/g, "ஞ");

eelam = eelam.replace(/nls/g, "டௌ");
eelam = eelam.replace(/Nlh/g, "டோ");
eelam = eelam.replace(/nlh/g, "டொ");
eelam = eelam.replace(/lp/g, "டி");
eelam = eelam.replace(/lP/g, "டீ");
eelam = eelam.replace(/lh/g, "டா");
eelam = eelam.replace(/b/g, "டி");
eelam = eelam.replace(/B/g, "டீ");
eelam = eelam.replace(/L/g, "டு");
eelam = eelam.replace(/\^/g, "டூ");
eelam = eelam.replace(/nl/g, "டெ");
eelam = eelam.replace(/Nl/g, "டே");
eelam = eelam.replace(/il/g, "டை");
eelam = eelam.replace(/l;/g, "ட்");
eelam = eelam.replace(/l/g, "ட");

eelam = eelam.replace(/nzs/g, "ணௌ");
eelam = eelam.replace(/Nzh/g, "ணோ");
eelam = eelam.replace(/nzh/g, "ணொ");
eelam = eelam.replace(/zh/g, "ணா");
eelam = eelam.replace(/zp/g, "ணி");
eelam = eelam.replace(/zP/g, "ணீ");
eelam = eelam.replace(/Zh/g, "ணூ");
eelam = eelam.replace(/Z}/g, "ணூ");
eelam = eelam.replace(/nz/g, "ணெ");
eelam = eelam.replace(/Nz/g, "ணே");
eelam = eelam.replace(/iz/g, "ணை");
eelam = eelam.replace(/z;/g, "ண்");
eelam = eelam.replace(/Z/g, "ணு");
eelam = eelam.replace(/z/g, "ண");

eelam = eelam.replace(/njs/g, "தௌ");
eelam = eelam.replace(/Njh/g, "தோ");
eelam = eelam.replace(/njh/g, "தொ");
eelam = eelam.replace(/jh/g, "தா");
eelam = eelam.replace(/jp/g, "தி");
eelam = eelam.replace(/jP/g, "தீ");
eelam = eelam.replace(/Jh/g, "தூ");
eelam = eelam.replace(/Jh/g, "தூ");
eelam = eelam.replace(/J}/g, "தூ");
eelam = eelam.replace(/J/g, "து");
eelam = eelam.replace(/nj/g, "தெ");
eelam = eelam.replace(/Nj/g, "தே");
eelam = eelam.replace(/ij/g, "தை");
eelam = eelam.replace(/j;/g, "த்");
eelam = eelam.replace(/j/g, "த");

eelam = eelam.replace(/nes/g, "நௌ");
eelam = eelam.replace(/Neh/g, "நோ");
eelam = eelam.replace(/neh/g, "நொ");
eelam = eelam.replace(/eh/g, "நா");
eelam = eelam.replace(/ep/g, "நி");
eelam = eelam.replace(/eP/g, "நீ");
eelam = eelam.replace(/E}/g, "நூ");
eelam = eelam.replace(/Eh/g, "நூ");
eelam = eelam.replace(/E/g, "நு");
eelam = eelam.replace(/ne/g, "நெ");
eelam = eelam.replace(/Ne/g, "நே");
eelam = eelam.replace(/ie/g, "நை");
eelam = eelam.replace(/e;/g, "ந்");
eelam = eelam.replace(/e/g, "ந");


eelam = eelam.replace(/nds/g, "னௌ");
eelam = eelam.replace(/Ndh/g, "னோ");
eelam = eelam.replace(/ndh/g, "னொ");
eelam = eelam.replace(/dh/g, "னா");
eelam = eelam.replace(/dp/g, "னி");
eelam = eelam.replace(/dP/g, "னீ");
eelam = eelam.replace(/D}/g, "னூ");
eelam = eelam.replace(/Dh/g, "னூ");
eelam = eelam.replace(/D/g, "னு");
eelam = eelam.replace(/nd/g, "னெ");
eelam = eelam.replace(/Nd/g, "னே");
eelam = eelam.replace(/id/g, "னை");
eelam = eelam.replace(/d;/g, "ன்");
eelam = eelam.replace(/d/g, "ன");

eelam = eelam.replace(/ngs/g, "பௌ");
eelam = eelam.replace(/Ngh/g, "போ");
eelam = eelam.replace(/ngh/g, "பொ");
eelam = eelam.replace(/gh/g, "பா");
eelam = eelam.replace(/gp/g, "பி");
eelam = eelam.replace(/gP/g, "பீ");
eelam = eelam.replace(/G/g, "பு");
eelam = eelam.replace(/ng/g, "பெ");
eelam = eelam.replace(/Ng/g, "பே");
eelam = eelam.replace(/ig/g, "பை");
eelam = eelam.replace(/g;/g, "ப்");
eelam = eelam.replace(/g/g, "ப");

eelam = eelam.replace(/nks/g, "மௌ");
eelam = eelam.replace(/Nkh/g, "மோ");
eelam = eelam.replace(/nkh/g, "மொ");
eelam = eelam.replace(/kh/g, "மா");
eelam = eelam.replace(/kp/g, "மி");
eelam = eelam.replace(/kP/g, "மீ");
eelam = eelam.replace(/K/g, "மு");
eelam = eelam.replace(/%/g, "மூ");
eelam = eelam.replace(/nk/g, "மெ");
eelam = eelam.replace(/Nk/g, "மே");
eelam = eelam.replace(/ik/g, "மை");
eelam = eelam.replace(/k;/g, "ம்");
eelam = eelam.replace(/k/g, "ம");

eelam = eelam.replace(/nas/g, "யௌ");
eelam = eelam.replace(/Nah/g, "யோ");
eelam = eelam.replace(/nah/g, "யொ");
eelam = eelam.replace(/ah/g, "யா");
eelam = eelam.replace(/ap/g, "யி");
eelam = eelam.replace(/aP/g, "யீ");
eelam = eelam.replace(/A/g, "யு");
eelam = eelam.replace(/A\+/g, "யூ");
eelam = eelam.replace(/na/g, "யெ");
eelam = eelam.replace(/Na/g, "யே");
eelam = eelam.replace(/ia/g, "யை");
eelam = eelam.replace(/a;/g, "ய்");
eelam = eelam.replace(/a/g, "ய");

eelam = eelam.replace(/nus/g, "ரௌ");
eelam = eelam.replace(/Nuh/g, "ரோ");
eelam = eelam.replace(/nuh/g, "ரொ");
eelam = eelam.replace(/uh/g, "ரா");
eelam = eelam.replace(/up/g, "ரி");
eelam = eelam.replace(/U/g, "ரு");
eelam = eelam.replace(/&/g, "ரூ");
eelam = eelam.replace(/nu/g, "ரெ");
eelam = eelam.replace(/Nu/g, "ரே");
eelam = eelam.replace(/iu/g, "ரை");
eelam = eelam.replace(/u/g, "ர");

eelam = eelam.replace(/nys/g, "லௌ");
eelam = eelam.replace(/Nyh/g, "லோ");
eelam = eelam.replace(/nyh/g, "லொ");
eelam = eelam.replace(/yh/g, "லா");
eelam = eelam.replace(/yp/g, "லி");
eelam = eelam.replace(/yP/g, "லீ");
eelam = eelam.replace(/Yh/g, "லூ");
eelam = eelam.replace(/Y}/g, "லூ");
eelam = eelam.replace(/Y/g, "லு");
eelam = eelam.replace(/ny/g, "லெ");
eelam = eelam.replace(/Ny/g, "லே");
eelam = eelam.replace(/iy/g, "லை");
eelam = eelam.replace(/y;/g, "ல்");
eelam = eelam.replace(/y/g, "ல");

eelam = eelam.replace(/nss/g, "ளௌ");
eelam = eelam.replace(/Nsh/g, "ளோ");
eelam = eelam.replace(/nsh/g, "ளொ");
eelam = eelam.replace(/sh/g, "ளா");
eelam = eelam.replace(/sP/g, "ளீ");
eelam = eelam.replace(/\@/g, "ளூ");
eelam = eelam.replace(/S/g, "ளு");
eelam = eelam.replace(/ns/g, "ளெ");
eelam = eelam.replace(/Ns/g, "ளே");
eelam = eelam.replace(/is/g, "ளை");
eelam = eelam.replace(/s;/g, "ள்");
eelam = eelam.replace(/s/g, "ள");

eelam = eelam.replace(/ntt;/g, "வெவ்");
eelam = eelam.replace(/ntt/g, "வௌ");
eelam = eelam.replace(/Nth/g, "வோ");
eelam = eelam.replace(/nth/g, "வொ");
eelam = eelam.replace(/th/g, "வா");
eelam = eelam.replace(/tp/g, "வி");
eelam = eelam.replace(/tP/g, "வீ");
eelam = eelam.replace(/nt/g, "வெ");
eelam = eelam.replace(/Nt/g, "வே");
eelam = eelam.replace(/it/g, "வை");
eelam = eelam.replace(/t;/g, "வ்");
eelam = eelam.replace(/t/g, "வ");

eelam = eelam.replace(/noo/g, "ழௌ");
eelam = eelam.replace(/Noh/g, "ழோ");
eelam = eelam.replace(/noh/g, "ழொ");
eelam = eelam.replace(/oh/g, "ழா");
eelam = eelam.replace(/op/g, "ழி");
eelam = eelam.replace(/oP/g, "ழீ");
eelam = eelam.replace(/\*/g, "ழூ");
eelam = eelam.replace(/O/g, "ழு");
eelam = eelam.replace(/no/g, "ழெ");
eelam = eelam.replace(/No/g, "ழே");
eelam = eelam.replace(/io/g, "ழை");
eelam = eelam.replace(/o;/g, "ழ்");
eelam = eelam.replace(/o/g, "ழ");

eelam = eelam.replace(/nws/g, "றௌ");
eelam = eelam.replace(/Nwh/g, "றோ");
eelam = eelam.replace(/nwh/g, "றொ");
eelam = eelam.replace(/wh/g, "றா");
eelam = eelam.replace(/wp/g, "றி");
eelam = eelam.replace(/wP/g, "றீ");
eelam = eelam.replace(/Wh/g, "றூ");
eelam = eelam.replace(/W}/g, "றூ");
eelam = eelam.replace(/W/g, "று");
eelam = eelam.replace(/nw/g, "றெ");
eelam = eelam.replace(/Nw/g, "றே");
eelam = eelam.replace(/iw/g, "றை");
eelam = eelam.replace(/w;/g, "ற்");
eelam = eelam.replace(/w/g, "ற");

eelam = eelam.replace(/n``/g, "ஹௌ");
eelam = eelam.replace(/N`h/g, "ஹோ");
eelam = eelam.replace(/n`h/g, "ஹொ");
eelam = eelam.replace(/`h/g, "ஹா");
eelam = eelam.replace(/`p/g, "ஹி");
eelam = eelam.replace(/`P/g, "ஹீ");
eelam = eelam.replace(/`§/g, "ஹு");
eelam = eelam.replace(/`_/g, "ஹூ");
eelam = eelam.replace(/n`/g, "ஹெ");
eelam = eelam.replace(/N`/g, "ஹே");
eelam = eelam.replace(/i`/g, "ஹை");
eelam = eelam.replace(/`;/g, "ஹ்");
eelam = eelam.replace(/`/g, "ஹ");

eelam = eelam.replace(/n\\s/g, "ஷௌ");
eelam = eelam.replace(/N\\h/g, "ஷோ");
eelam = eelam.replace(/n\\h/g, "ஷொ");
eelam = eelam.replace(/\\h/g, "ஷா");
eelam = eelam.replace(/\\p/g, "ஷி");
eelam = eelam.replace(/\\P/g, "ஷீ");
eelam = eelam.replace(/\\§/g, "ஷு");
eelam = eelam.replace(/\\\_/g, "ஷூ");
eelam = eelam.replace(/n\\/g, "ஷெ");
eelam = eelam.replace(/N\\/g, "ஷே");
eelam = eelam.replace(/i\\/g, "ஷை");
eelam = eelam.replace(/\\;/g, "ஷ்");
eelam = eelam.replace(/\\/g, "ஷ");


eelam = eelam.replace(/n]s/g, "ஸௌ");
eelam = eelam.replace(/N]h/g, "ஸோ");
eelam = eelam.replace(/n]h/g, "ஸொ");
eelam = eelam.replace(/]h/g, "ஸா");
eelam = eelam.replace(/]p/g, "ஸி");
eelam = eelam.replace(/]P/g, "ஸீ");
eelam = eelam.replace(/]§/g, "ஸு");
eelam = eelam.replace(/]_/g, "ஸூ");
eelam = eelam.replace(/n]/g, "ஸெ");
eelam = eelam.replace(/N]/g, "ஸே");
eelam = eelam.replace(/i]/g, "ஸை");
eelam = eelam.replace(/];/g, "ஸ்");
eelam = eelam.replace(/]/g, "ஸ");



eelam = eelam.replace(/m/g, "அ");
eelam = eelam.replace(/M/g, "ஆ");
eelam = eelam.replace(/</g, "ஈ");
eelam = eelam.replace(/c/g, "உ");
eelam = eelam.replace(/C/g, "ஊ");
eelam = eelam.replace(/v/g, "எ");
eelam = eelam.replace(/V/g, "ஏ");
eelam = eelam.replace(/I/g, "ஐ");
eelam = eelam.replace(/x/g, "ஒ")
eelam = eelam.replace(/X/g, "ஓ");
eelam = eelam.replace(/xs/g, "ஔ");



eelam = eelam.replace(/\//g, "ஃ");


eelam = eelam.replace(/=/g, "ஸ்ரீ");

eelam = eelam.replace(/¨/g, "௸");

eelam = eelam.replace(/T/g, "வு");


eelam = eelam.replace(/வு\+/g, "வூ");
eelam = eelam.replace(/ப\+/g, "பூ");
eelam = eelam.replace(/பு\+/g, "பூ");
eelam = eelam.replace(/யு\+/g, "யூ");
eelam = eelam.replace(/ய\+/g, "யூ");
eelam = eelam.replace(/சு\+/g, "சூ");
eelam = eelam.replace(/ச\+/g, "சூ");


eelam = eelam.replace(/h/g, "ா");
eelam = eelam.replace(/n/g, "ெ");
eelam = eelam.replace(/N/g, "ே");
eelam = eelam.replace(/i/g, "ை");
eelam = eelam.replace(/§/g, "ு");
eelam = eelam.replace(/_/g, "ூ");
eelam = eelam.replace(/p/g, "ி");
eelam = eelam.replace(/P/g, "ீ");


document.yarlsuratha.box2.value=eelam;
}
