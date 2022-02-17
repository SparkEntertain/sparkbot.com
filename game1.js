
  var y = 200;

  var x = 200;

  var vy = 0;

  var kecepatanpipa = 10;

  var menang = true;

  var permainandimulai = false;

  window.addEventListener('click',kontrolmouse,false);

  
  //MEMBUAT PIPA

   //buat array pipa[x][ketinggian]

   pipa = [

   [400, Math.floor(Math.random() * 150) + 50, 0], //antara 50-200

   [500, Math.floor(Math.random() * 150) + 50, 0],

   [600, Math.floor(Math.random() * 150) + 50, 0],

   [700, Math.floor(Math.random() * 150) + 50, 0],

   [800, Math.floor(Math.random() * 150) + 50, 0]

   ];


  canv=document.getElementById("canv");

  ctx=canv.getContext("2d");

  var intv = setInterval(game, 1000/30);


  function game(){

   ctx.clearRect(0,0,canv.width,canv.height); //menghapus semua isi canvas

   
   vy += 1;

   y += vy;


   var image = new Image();

   image.src="flap.gif";

   ctx.drawImage(image, x, y,40,40);

   if(permainandimulai)

   {

    for(i = 0;i<5;i++)

    {
        
        //gradient color
        

var grd = ctx.createLinearGradient(0, 150, 0, 0);
grd.addColorStop(0, "gray");
grd.addColorStop(1, "black");
     //MEMBUAT PIPA

     ctx.fillStyle=grd;

     ctx.fillRect(pipa[i][0],0,50,pipa[i][1]); //pipa atas

     ctx.fillStyle=grd;

     ctx.fillRect(pipa[i][0],pipa[i][1] + 150, 50, 250 - pipa[i][1]); //pipa bawah
     //cek jika burung terkena pipa

     if(pipa[i][0] < 240 && pipa[i][0] > 160 && (pipa[i][1] > y || pipa[i][1] + 150 <= y + 30))

     {
      alert("Burung terkena pipa, Anda kalah.. !");
      document.getElementById("restart").style="display: block";
      document.getElementById("canv").style="display: none";
      document.getElementById("res").style="display: block";
      
    

     clearInterval(intv);

     }
     //MENYETTING KOORDINAT X PADA PIPA

     if(pipa[i][0] > -50) //jika masih terlihat di map

     {

      pipa[i][0] -= kecepatanpipa;

     }

     else if(pipa[i][0] == -50)  //jika sudah tidka terlihat, maka pindah pipa ke kanan

     {

      //pindah posisi

      pipa[i][0] = 450;

     }

    }
    if(y > 400)

    {
     vy = -10

    }
   }

   else

   {

    vy = 0;

    y = 200;

   }
  }
  function kontrolmouse(evt) //pemilihan menu

  {

   vy = -10;
  }
function startgame() {
    permainandimulai = true;
    document.getElementById("start-btn").style="display:none";
}