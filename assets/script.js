const entrada= document.querySelector(".input");
const showQr =document.querySelector(".button");
const qr=document.querySelector(".container-buttons");


function enterURL(){



if(entrada.value.trim() === ""){
    alert ("error");
}else

  /// LOGICA QR

  qr.innerHTML = "";
QRcode(entrada.value)
 
}

console.log(showQr);
showQr.addEventListener("click",enterURL);


function QRcode(inputValue) {
  const canvas = document.createElement("canvas");

 
  qr.appendChild(canvas);

  const download = document.createElement("button");

  download.textContent = "Download QR"

qr.appendChild(download);

download.addEventListener("click",function(){

  const dataURL = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href=dataURL
  link.download = "qrcode.png";
  link.click();

  console.log(dataURL)

});

  // Usar QRCode correctamente
  QRCode.toCanvas(canvas, inputValue, function (error) {
      if (error) {
          console.error("Error generating QR code:", error);
      } else {
          console.log("QR code generated successfully!");
      }
  });
}


