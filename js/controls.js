
//Tamil Text copy Script
function copy() {
  let textarea = document.getElementById("transliterateDiv");
  textarea.select();
  document.execCommand("copy");
}

function copy1() {
  let textarea = document.getElementById("textout");
  textarea.select();
  document.execCommand("copy");
}




//Save Text File Script


let saveFile = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('transliterateDiv');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by https://tamilfontconverter.in';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Tamil.html';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}



let saveFile1 = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('textout');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by https://tamilfontconverter.in';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/plain' });
  const sFileName = 'Tamil.html';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}




//Save Doc File Script


let saveDocAsFile = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('transliterateDiv');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by https://tamilfontconverter.in';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/Doc' });
  const sFileName = 'Tamil-2.html';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}


let saveDocAsFile1 = () => {

  // Get the data from each element on the form.

  const msg = document.getElementById('textout');

  // This variable stores all the data.
  let data = '' + msg.value;

  // Web Link

  data += "\r\n";
  data += "\r\n";
  var about_link = 'This Document Typed/Converted by https://tamilfontconverter.in';
  data = data + about_link;

  // Convert the text to BLOB.
  const textToBLOB = new Blob([data], { type: 'text/Doc' });
  const sFileName = 'Tamil-2.html';	   // The file to save the data.

  let newLink = document.createElement("a");
  newLink.download = sFileName;

  if (window.webkitURL != null) {
    newLink.href = window.webkitURL.createObjectURL(textToBLOB);
  }
  else {
    newLink.href = window.URL.createObjectURL(textToBLOB);
    newLink.style.display = "none";
    document.body.appendChild(newLink);
  }

  newLink.click();
}

//Print Script

function printTextArea() {
  childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
  childWindow.document.open();
  childWindow.document.write('<html><head></head><body>');
  childWindow.document.write(document.getElementById('transliterateDiv').value.replace(/\n/gi, '<br>'));
  childWindow.document.write('<br><br>This Document Typed/Converted by <a href="index.html">https://tamilfontconverter.in</a> ');
  childWindow.document.write('</body></html>');
  childWindow.print();
  childWindow.document.close();
  childWindow.close();
}


function printTextArea1() {
  childWindow = window.open('', 'childWindow', 'location=yes, menubar=yes, toolbar=yes');
  childWindow.document.open();
  childWindow.document.write('<html><head></head><body>');
  childWindow.document.write(document.getElementById('textout').value.replace(/\n/gi, '<br>'));
  childWindow.document.write('<br><br>This Document Typed/Converted by <a href="index.html">https://tamilfontconverter.in</a> ');
  childWindow.document.write('</body></html>');
  childWindow.print();
  childWindow.document.close();
  childWindow.close();
}

//Whatsapp Share Script


function whatsapp_share() {

  var whatsapp_content = document.getElementById("transliterateDiv").value;

  var url = "https://web.whatsapp.com/send?text="
    + whatsapp_content + "This Document Typed/Converted by https://tamilfontconverter.in";

  window.open(url, '_blank').focus();
}


function whatsapp_share1() {

  var whatsapp_content = document.getElementById("textout").value;

  var url = "https://web.whatsapp.com/send?text="
    + whatsapp_content + "This Document Typed/Converted by https://tamilfontconverter.in";

  window.open(url, '_blank').focus();
}









//AdBlocker Script


// (() => {
//   "use strict";
//   //   value declaration
//   let hashValue = "";
//   const hash = -1722915916;

//   //   to create a modal
//   function createModal(message = "We pay to run this website for you to use, please support us. Disable ad blocker and refresh the page", title = "!</br>We notice you're using an AdBlocker") {
//     const div = document.createElement("div");
//     div.setAttribute("id", "adDetect");
//     div.innerHTML = `
//     <div class="modal" style="display: grid; place-items: center; position: fixed; z-index: 1; left: 0; top: 1; right: 0; bottom: 0; width: 100%; height: 100%; overflow: auto; background-color:#222222d1;">
	
//   <div class="modal-content" style="background-color: #ffffff; color: #ff0000; text-align: center; margin: auto; padding: 60px; border: 1px solid #888; width: 40%; border-radius: 10px;">
//       <h1>${title}</h1>
//       <p>
//         <strong>
//           <span class="adblock-detected">${message}</span>
//         </strong>
//       </p>
//     </div>
//   </div>
//     `;

//     return document.body.appendChild(div);
//   }

//   //  to check hash value
//   function stringToHash(string) {
//     let hash = 0;
//     if (string.length == 0) return hash;
//     for (let i = 0; i < string.length; i++) {
//       let char = string.charCodeAt(i);
//       hash = (hash << 5) - hash + char;
//       hash = hash & hash;
//     }
//     return hash;
//   }

//   //  check weather modal is there or not
//   function checkWeatherModal() {
//     const IsCreateModel = document.getElementById("adDetect");
//     if (!IsCreateModel) return createModal();
//     if (IsCreateModel) {
//       IsCreateModel.style.display = "block"
//       hashValue = stringToHash(IsCreateModel.innerHTML);
//       if (hashValue !== hash) {
//         document.body.removeChild(IsCreateModel);
//         return createModal();
//       }
//     }
//   }

//   //  adblock is on or off 
//   async function detectAdBlock() {
//     let adBlockEnabled = false;
//     const googleAdUrl =
//       "../pagead2.googlesyndication.com/pagead/js/f.txt";
//     try {
//       await fetch(new Request(googleAdUrl)).catch(
//         (_) => (adBlockEnabled = true)
//       );
//     } catch (e) {
//       adBlockEnabled = true;
//     } finally {
//       if (adBlockEnabled) return checkWeatherModal();
//       return null;
//     }
//   }

//   //   interval to check weather modal is there or not
//   setInterval(() => detectAdBlock(), 5000);

// })();