<!-- Begin

var eelam;
function startText5() {
eelam = document.yarlsuratha.box1.value;

eelam = eelam.replace(/க்ஷ/g, "d");    
eelam = eelam.replace(/க்ஷா/g, "d\"");   
eelam = eelam.replace(/க்ஷை/g, "'d");   
eelam = eelam.replace(/க்ஷி/g, "«");    
eelam = eelam.replace(/க்ஷீ/g, "»");    
eelam = eelam.replace(/க்ஷு/g, "d#");   
eelam = eelam.replace(/க்ஷூ/g, "d$");   
eelam = eelam.replace(/க்ஷெ/g, "`d");   
eelam = eelam.replace(/க்ஷே/g, "&d");   
eelam = eelam.replace(/க்ஷொ/g, "`d\"");  
eelam = eelam.replace(/க்ஷோ/g, "&d\"");  
eelam = eelam.replace(/க்ஷௌ/g, "`d\["); 
eelam = eelam.replace(/க்ஷ்/g, "º");    
                                       
                                       
eelam = eelam.replace(/ஜௌ/g, "`\^\[");
eelam = eelam.replace(/ஜோ/g, "&\^\""); 
eelam = eelam.replace(/ஜொ/g, "`\^\""); 
eelam = eelam.replace(/ஜா/g, "\^\"");  
eelam = eelam.replace(/ஜி/g, "Õ");    
eelam = eelam.replace(/ஜீ/g, "õ");    
eelam = eelam.replace(/ஜு/g, "\^#");  
eelam = eelam.replace(/ஜூ/g, "\^$");  
eelam = eelam.replace(/ஜெ/g, "`\^");  
eelam = eelam.replace(/ஜே/g, "&\^");  
eelam = eelam.replace(/ஜை/g, "'\^");  
eelam = eelam.replace(/ஜ்/g, "Ò");    
eelam = eelam.replace(/ஜ/g, "\^");   

eelam = eelam.replace(/கௌ/g, "`L\["); 
eelam = eelam.replace(/கோ/g, "&L\"");  
eelam = eelam.replace(/கொ/g, "`L\"");  
eelam = eelam.replace(/கா/g, "L\"");   
eelam = eelam.replace(/கி/g, "f");    
eelam = eelam.replace(/கீ/g, "g");    
eelam = eelam.replace(/கு/g, "h");    
eelam = eelam.replace(/கூ/g, "i");    
eelam = eelam.replace(/கெ/g, "`L");   
eelam = eelam.replace(/கே/g, "&L");   
eelam = eelam.replace(/கை/g, "'L");   
eelam = eelam.replace(/க்/g, "e");    
eelam = eelam.replace(/க/g, "L");    
                                       
eelam = eelam.replace(/ஙௌ/g, "`M\["); 
eelam = eelam.replace(/ஙோ/g, "&M\"");  
eelam = eelam.replace(/ஙொ/g, "`M\"");  
eelam = eelam.replace(/ஙா/g, "M\"");   
eelam = eelam.replace(/ஙி/g, "›");    
eelam = eelam.replace(/ஙீ/g, "‰");    
eelam = eelam.replace(/ஙு/g, "Š");    
eelam = eelam.replace(/ஙூ/g, "š");    
eelam = eelam.replace(/ஙெ/g, "`M");   
eelam = eelam.replace(/ஙே/g, "&M");   
eelam = eelam.replace(/ஙை/g, "'M");   
eelam = eelam.replace(/ங்/g, "‹");    
eelam = eelam.replace(/ங/g, "M");    
                                       
eelam = eelam.replace(/சௌ/g, "`N\["); 
eelam = eelam.replace(/சோ/g, "&N\"");  
eelam = eelam.replace(/சொ/g, "`N\"");  
eelam = eelam.replace(/சா/g, "N\"");   
eelam = eelam.replace(/சி/g, "p");    
eelam = eelam.replace(/சீ/g, "q");    
eelam = eelam.replace(/சு/g, "r");    
eelam = eelam.replace(/சூ/g, "s");    
eelam = eelam.replace(/செ/g, "`N");   
eelam = eelam.replace(/சே/g, "&N");   
eelam = eelam.replace(/சை/g, "'N");   
eelam = eelam.replace(/ச்/g, "o");    
eelam = eelam.replace(/ச/g, "N");    
                                       
eelam = eelam.replace(/ஞௌ/g, "`O\["); 
eelam = eelam.replace(/ஞோ/g, "&O\"");  
eelam = eelam.replace(/ஞொ/g, "`O\"");  
eelam = eelam.replace(/ஞா/g, "O\"");   
eelam = eelam.replace(/ஞி/g, "Œ");    
eelam = eelam.replace(/ஞீ/g, "œ");    
eelam = eelam.replace(/ஞு/g, "“");    
eelam = eelam.replace(/ஞூ/g, "”");    
eelam = eelam.replace(/ஞெ/g, "`O");   
eelam = eelam.replace(/ஞே/g, "&O");   
eelam = eelam.replace(/ஞை/g, "'O");   
eelam = eelam.replace(/ஞ்/g, "Ÿ");    
eelam = eelam.replace(/ஞ/g, "O");    
                                       
eelam = eelam.replace(/டௌ/g, "`P\["); 
eelam = eelam.replace(/டோ/g, "&P\"");  
eelam = eelam.replace(/டொ/g, "`P\"");  
eelam = eelam.replace(/டா/g, "P\"");   
eelam = eelam.replace(/டி/g, "z");    
eelam = eelam.replace(/டீ/g, "{");    
eelam = eelam.replace(/டு/g, "\|");   
eelam = eelam.replace(/டூ/g, "}");    
eelam = eelam.replace(/டெ/g, "`P");   
eelam = eelam.replace(/டே/g, "&P");   
eelam = eelam.replace(/டை/g, "'P");   
eelam = eelam.replace(/ட்/g, "y");    
eelam = eelam.replace(/ட/g, "P");    
                                       
eelam = eelam.replace(/ணௌ/g, "`Q\["); 
eelam = eelam.replace(/ணோ/g, "&Q\"");  
eelam = eelam.replace(/ணொ/g, "`Q\"");  
eelam = eelam.replace(/ணா/g, "Q\"");   
eelam = eelam.replace(/ணி/g, "Â");    
eelam = eelam.replace(/ணீ/g, "È");    
eelam = eelam.replace(/ணு/g, "Ê");    
eelam = eelam.replace(/ணூ/g, "Ë");    
eelam = eelam.replace(/ணெ/g, "`Q");   
eelam = eelam.replace(/ணே/g, "&Q");   
eelam = eelam.replace(/ணை/g, "'Q");   
eelam = eelam.replace(/ண்/g, "À");    
eelam = eelam.replace(/ண/g, "Q");    
                                       
eelam = eelam.replace(/தௌ/g, "`R\["); 
eelam = eelam.replace(/தோ/g, "&R\"");  
eelam = eelam.replace(/தொ/g, "`R\"");  
eelam = eelam.replace(/தா/g, "R\"");   
eelam = eelam.replace(/தி/g, "Ï");    
eelam = eelam.replace(/தீ/g, "©");    
eelam = eelam.replace(/து/g, "®");    
eelam = eelam.replace(/தூ/g, "_");    
eelam = eelam.replace(/தெ/g, "`R");   
eelam = eelam.replace(/தே/g, "&R");   
eelam = eelam.replace(/தை/g, "'R");   
eelam = eelam.replace(/த்/g, "Î");    
eelam = eelam.replace(/த/g, "R");  

eelam = eelam.replace(/நௌ/g, "`S\["); 
eelam = eelam.replace(/நோ/g, "&S\"");  
eelam = eelam.replace(/நொ/g, "`S\"");  
eelam = eelam.replace(/நா/g, "S\"");   
eelam = eelam.replace(/நி/g, "k");    
eelam = eelam.replace(/நீ/g, "Ù");    
eelam = eelam.replace(/நு/g, "Û");    
eelam = eelam.replace(/நூ/g, "l");    
eelam = eelam.replace(/நெ/g, "`S");   
eelam = eelam.replace(/நே/g, "&S");   
eelam = eelam.replace(/நை/g, "'S");   
eelam = eelam.replace(/ந்/g, "j");    
eelam = eelam.replace(/ந/g, "S");    

eelam = eelam.replace(/னௌ/g, "`]\["); 
eelam = eelam.replace(/னோ/g, "&]\"");  
eelam = eelam.replace(/னொ/g, "`]\"");  
eelam = eelam.replace(/னா/g, "]\"");   
eelam = eelam.replace(/னி/g, "Á");    
eelam = eelam.replace(/னீ/g, "Ã");    
eelam = eelam.replace(/னு/g, "ã");    
eelam = eelam.replace(/னூ/g, "Ó");    
eelam = eelam.replace(/னெ/g, "`]");   
eelam = eelam.replace(/னே/g, "&]");   
eelam = eelam.replace(/னை/g, "']");   
eelam = eelam.replace(/ன்/g, "Ô");    
eelam = eelam.replace(/ன/g, "]");    

eelam = eelam.replace(/பௌ/g, "`T\["); 
eelam = eelam.replace(/போ/g, "&T\"");  
eelam = eelam.replace(/பொ/g, "`T\"");  
eelam = eelam.replace(/பா/g, "T\"");   
eelam = eelam.replace(/பி/g, "n");    
eelam = eelam.replace(/பீ/g, "t");    
eelam = eelam.replace(/பு/g, "Ç");    
eelam = eelam.replace(/பூ/g, "ç");    
eelam = eelam.replace(/பெ/g, "`T");   
eelam = eelam.replace(/பே/g, "&T");   
eelam = eelam.replace(/பை/g, "'T");   
eelam = eelam.replace(/ப்/g, "m");    
eelam = eelam.replace(/ப/g, "T");    
                                       
eelam = eelam.replace(/மௌ/g, "`U\["); 
eelam = eelam.replace(/மோ/g, "&U\"");  
eelam = eelam.replace(/மொ/g, "`U\"");  
eelam = eelam.replace(/மா/g, "U\"");   
eelam = eelam.replace(/மி/g, "ñ");                                     
eelam = eelam.replace(/மு/g, "¿");    
eelam = eelam.replace(/மூ/g, "¤");    
eelam = eelam.replace(/மெ/g, "`U");   
eelam = eelam.replace(/மே/g, "&U");   
eelam = eelam.replace(/மை/g, "'U");   
eelam = eelam.replace(/ம்/g, "Ñ");    
eelam = eelam.replace(/ம/g, "U");    
                                       
eelam = eelam.replace(/யௌ/g, "`V\["); 
eelam = eelam.replace(/யோ/g, "&V\"");  
eelam = eelam.replace(/ய/g, "`V\"");  
eelam = eelam.replace(/யா/g, "V\"");   
eelam = eelam.replace(/யி/g, "¥");                                           
eelam = eelam.replace(/யு/g, "u");    
eelam = eelam.replace(/யூ/g, "¢");    
eelam = eelam.replace(/யெ/g, "`V");   
eelam = eelam.replace(/யே/g, "&V");   
eelam = eelam.replace(/யை/g, "'V");    
eelam = eelam.replace(/ய்/g, "£");    
eelam = eelam.replace(/ய/g, "V"); 

eelam = eelam.replace(/ரௌ/g, "`W\["); 
eelam = eelam.replace(/ரோ/g, "&W\"");  
eelam = eelam.replace(/ரொ/g, "`W\"");  
eelam = eelam.replace(/ரா/g, "W\"");   
eelam = eelam.replace(/ரி/g, "ê");    
eelam = eelam.replace(/ரீ/g, "ô");    
eelam = eelam.replace(/ரு/g, "û");    
eelam = eelam.replace(/ரூ/g, "á");    
eelam = eelam.replace(/ரெ/g, "`W");   
eelam = eelam.replace(/ரே/g, "&W");   
eelam = eelam.replace(/ரை/g, "'W");   
eelam = eelam.replace(/ர்/g, "â");    
eelam = eelam.replace(/ர/g, "W");    
                                       
eelam = eelam.replace(/லௌ/g, "`X\["); 
eelam = eelam.replace(/லோ/g, "&X\"");  
eelam = eelam.replace(/லொ/g, "`X\"");  
eelam = eelam.replace(/லா/g, "X\"");   
eelam = eelam.replace(/லி/g, "ó");    
eelam = eelam.replace(/லீ/g, "ú");    
eelam = eelam.replace(/லு/g, "à");    
eelam = eelam.replace(/லூ/g, "è");    
eelam = eelam.replace(/லெ/g, "`X");   
eelam = eelam.replace(/லே/g, "&X");   
eelam = eelam.replace(/லை/g, "'X");    
eelam = eelam.replace(/ல்/g, "é");    
eelam = eelam.replace(/ல/g, "X");    
                                       
eelam = eelam.replace(/ளௌ/g, "`\[\[");
eelam = eelam.replace(/ளோ/g, "&\[\""); 
eelam = eelam.replace(/ள/g, "`\[\""); 
eelam = eelam.replace(/ளா/g, "\[\"");  
eelam = eelam.replace(/ளி/g, "í");    
eelam = eelam.replace(/ளீ/g, "ø");    
eelam = eelam.replace(/ளு/g, "Ä");    
eelam = eelam.replace(/ளூ/g, "ì");    
eelam = eelam.replace(/ளெ/g, "`\[");  
eelam = eelam.replace(/ளே/g, "&\[");  
eelam = eelam.replace(/ளை/g, "'\[");  
eelam = eelam.replace(/ள்/g, "å");    
eelam = eelam.replace(/ள/g, "\[");   
                                       
eelam = eelam.replace(/வௌ/g, "`Y\["); 
eelam = eelam.replace(/வோ/g, "&Y\"");  
eelam = eelam.replace(/வொ/g, "`Y\"");  
eelam = eelam.replace(/வா/g, "Y\"");   
eelam = eelam.replace(/வி/g, "ù");    
eelam = eelam.replace(/வீ/g, "ä");    
eelam = eelam.replace(/வு/g, "ë");    
eelam = eelam.replace(/வூ/g, "ö");    
eelam = eelam.replace(/வெ/g, "`Y");   
eelam = eelam.replace(/வே/g, "&Y");   
eelam = eelam.replace(/வை/g, "'Y");   
eelam = eelam.replace(/வ்/g, "ò");    
eelam = eelam.replace(/வ/g, "Y");    
                                       
eelam = eelam.replace(/ழௌ/g, "`Z\["); 
eelam = eelam.replace(/ழோ/g, "&Z\"");  
eelam = eelam.replace(/ழொ/g, "`Z\"");  
eelam = eelam.replace(/ழா/g, "Z\"");   
eelam = eelam.replace(/ழி/g, "Å");    
eelam = eelam.replace(/ழீ/g, "î");    
eelam = eelam.replace(/ழு/g, "Ø");    
eelam = eelam.replace(/ழூ/g, "Æ");    
eelam = eelam.replace(/ழெ/g, "`Z");   
eelam = eelam.replace(/ழே/g, "&Z");   
eelam = eelam.replace(/ழை/g, "'Z");   
eelam = eelam.replace(/ழ்/g, "ü");    
eelam = eelam.replace(/ழ/g, "Z");    

eelam = eelam.replace(/றௌ/g, "`\\\[")
eelam = eelam.replace(/றோ/g, "&\\\""); 
eelam = eelam.replace(/றொ/g, "`\\\"");
eelam = eelam.replace(/றா/g, "\\\"");
eelam = eelam.replace(/றி/g, "Ü");    
eelam = eelam.replace(/றீ/g, "É");    
eelam = eelam.replace(/று/g, "ï");    
eelam = eelam.replace(/றூ/g, "ß");    
eelam = eelam.replace(/றெ/g, "`\\");  
eelam = eelam.replace(/றே/g, "&\\");  
eelam = eelam.replace(/றை/g, "'\\");  
eelam = eelam.replace(/ற்/g, "Ö");    
eelam = eelam.replace(/ற/g, "\\");   
                                       
                                       
eelam = eelam.replace(/ஹௌ/g, "`a\["); 
eelam = eelam.replace(/ஹோ/g, "&a\"");  
eelam = eelam.replace(/ஹொ/g, "`a\"");  
eelam = eelam.replace(/ஹா/g, "a\"");   
eelam = eelam.replace(/ஹி/g, "w");    
eelam = eelam.replace(/ஹீ/g, "Ú");    
eelam = eelam.replace(/ஹெ/g, "`a");   
eelam = eelam.replace(/ஹே/g, "&a");   
eelam = eelam.replace(/ஹை/g, "'a");   
eelam = eelam.replace(/ஹ்/g, "v");    
eelam = eelam.replace(/ஹ/g, "a");    
                                       
eelam = eelam.replace(/ஷௌ/g, "`c\["); 
eelam = eelam.replace(/ஷோ/g, "&c\"");  
eelam = eelam.replace(/ஷொ/g, "`c\"");  
eelam = eelam.replace(/ஷா/g, "c\"");                                      
eelam = eelam.replace(/ஷீ/g, "ª");    
eelam = eelam.replace(/ஷெ/g, "`c");   
eelam = eelam.replace(/ஷே/g, "&c");   
eelam = eelam.replace(/ஷை/g, "'c");   
eelam = eelam.replace(/ஷ்/g, "Ì");    
eelam = eelam.replace(/ஷ/g, "c");  

eelam = eelam.replace(/ஸௌ/g, "`b\["); 
eelam = eelam.replace(/ஸோ/g, "&b\"");  
eelam = eelam.replace(/ஸொ/g, "`b\"");  
eelam = eelam.replace(/ஸா/g, "b\"");   
eelam = eelam.replace(/ஸி/g, "ÿ");    
eelam = eelam.replace(/ஸீ/g, "Í");    
eelam = eelam.replace(/ஸெ/g, "`b");   
eelam = eelam.replace(/ஸே/g, "&b");   
eelam = eelam.replace(/ஸை/g, "'b");   
eelam = eelam.replace(/ஸ்/g, "x");    
eelam = eelam.replace(/ஸ/g, "b");    
                                       
eelam = eelam.replace(/அ/g, "A");    
eelam = eelam.replace(/ஆ/g, "B");    
eelam = eelam.replace(/இ/g, "C");    
eelam = eelam.replace(/ஈ/g, "D");    
eelam = eelam.replace(/உ/g, "E");    
eelam = eelam.replace(/ஊ/g, "F");    
eelam = eelam.replace(/எ/g, "G");    
eelam = eelam.replace(/ஏ/g, "H");    
eelam = eelam.replace(/ஐ/g, "I");    
eelam = eelam.replace(/ஒ/g, "J");    
eelam = eelam.replace(/ஓ/g, "K");    
eelam = eelam.replace(/ஔ/g, "J\[");  
                                       
eelam = eelam.replace(/மீ/g, "¡");    
eelam = eelam.replace(/ஷி/g, "¶");    
eelam = eelam.replace(/யீ/g, "§");    
                                       
eelam = eelam.replace(/ஃ/g, "@");    
                                       
eelam = eelam.replace(/ஸ்ரீ/g, "~");      
eelam = eelam.replace(/க்ஸ்/g, "º");    
eelam = eelam.replace(/க்ஸ/g, "d");    
eelam = eelam.replace(/க்ஸி/g, "«");    
eelam = eelam.replace(/க்ஸீ/g, "»");    
eelam = eelam.replace(/-/g, ">");  

document.yarlsuratha.box2.value=eelam;
}
//  End -->