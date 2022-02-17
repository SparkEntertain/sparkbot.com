
function talk() {
    var date = new Date();
    var h = date.getHours();
    var user = document.getElementById("userBox").value;
    document.getElementById("chatLog").innerHTML = user;
    if (user in know) {
        document.getElementById("chatLog").innerHTML += know[user];
    } else if (user == "") {
        document.getElementById("chatLog").innerHTML = "<h5>Kamu belum menulis sesuatu!!</h5>";
    }
    else if(user == " "){
        document.getElementById("chatLog").innerHTML = "<h5>Kamu belum menulis sesuatu!!</h5>";
    }
     else if (user == "putar musik yang berjudul thefatrat close to the sun") {
        document.getElementById("aud").style = "display:block";
    } else if (user == "Putar musik yang berjudul thefatrat close to the sun") {
        document.getElementById("aud").style = "display:block";
    } else if (user == "Stop musik") {
        document.getElementById("aud").style = "display:none";
    } else if (user == "stop musik") {
        document.getElementById("aud").style = "display:none";
    } else if (user == "pick color") {
        document.getElementById("col").style = "display : block";
    } else if (user == "Pick color") {
        document.getElementById("col").style = "display: block";
    } else if (user == "game") {
        document.getElementById("gallery1").style = "display:block";
    } else if (user == "Game") {
        document.getElementById("gallery1").style = "display:block";
    } else if (user == "games") {
        document.getElementById("gallery1").style = "display:block";
    } else if (user == "Games") {
        document.getElementById("gallery1").style = "display:block";
    } else if (user == "GAMES") {
        document.getElementById("gallery1").style = "display:block";
    } else if (user == "kuis") {
        document.getElementById("container").style = "display:block";
    } else if (user == "Kuis") {
        document.getElementById("container").style = "display:block";
    } else if (user == "Kuiz game") {
        document.getElementById("container").style = "display:block";
    } else if (user == "kuiz game") {
        document.getElementById("container").style = "display:block";
    } else if (user == "quis") {
        document.getElementById("container").style = "display:block";
    } else if (user == "Quis") {
        document.getElementById("container").style = "display:block";
    } else if (user == "quiz") {
        document.getElementById("container").style = "display:block";
    } else if (user == "Quiz") {
        document.getElementById("container").style = "display:block";
    } else if (user == "quiz game") {
        document.getElementById("container").style = "display:block";
    } else if (user == "Quiz game") {
        document.getElementById("container").style = "display:block";
    }
    else if(user == "quit game"){
        document.getElementById("gallery1").style = "display:none";
    }
    else if(user == "Quit game"){
        document.getElementById("gallery1").style = "display:none";
    }
    
    //Quotes hari ini
    else if(user == "Quotes hari ini"){
        
        quoteRandom(1, 20);
    }
    else if(user == "quotes hari ini"){
        
        quoteRandom(1, 20);
    }
    else if(user == "Quotes"){
        
        quoteRandom(1, 20);
    }
    else if(user == "quotes"){
        
        quoteRandom(1, 20);
    }
    else if(user == "kata bijak"){
        
        quoteRandom(1, 20);
    }
    else if(user == "Kata bijak"){
        
        quoteRandom(1, 20);
    }
    else if(user == "kata motivasi"){
        
        quoteRandom(1, 20);
    }
    else if(user == "Kata motivasi"){
       
        quoteRandom(1, 20);
    }
    else if(user == "kata mutiara"){
        
        quoteRandom(1, 20);
    }
    else if(user == "Kata mutiara"){
        
        quoteRandom(1, 20);
    }
    else if(user == "bukan kamu"){
        document.getElementById("chatLog").innerHTML="<h5>Wow, Sepertinya saya terlalu bersemangat</h5><h1>😅</h1>";
        setTimeout(function() {
            document.getElementById("chatLog").innerHTML="<h5>kalau bukan aku, lalu siapa?</h5><h1>🤔</h1>";
        }, 3000);
    }
    else if(user == "Bukan kamu"){
        document.getElementById("chatLog").innerHTML="<h5>Wow, Sepertinya saya terlalu bersemangat</h5><h1>😅</h1>";
        setTimeout(function() {
            document.getElementById("chatLog").innerHTML="<h5>kalau bukan aku, lalu siapa?</h5><h1>🤔</h1>";
        }, 3000);
    }
    else if(user == "bukan anda"){
        document.getElementById("chatLog").innerHTML="<h5>Wow, Sepertinya saya terlalu bersemangat</h5><h1>😅</h1>";
        setTimeout(function() {
            document.getElementById("chatLog").innerHTML="<h5>kalau bukan aku, lalu siapa?</h5><h1>🤔</h1>";
        }, 3000);
    }
    else if(user == "Bukan anda"){
        document.getElementById("chatLog").innerHTML="<h5>Wow, Sepertinya saya terlalu bersemangat</h5><h1>😅</h1>";
        setTimeout(function() {
            document.getElementById("chatLog").innerHTML="<h5>kalau bukan aku, lalu siapa?</h5><h1>🤔</h1>";
        }, 3000);
    }
    else if(user == "math"){

swal({
title: "fitur matematika",
text: "**(untuk perpangkatan), %(untuk persentase), /(untuk pembagian), *(perkalian), +(penjumlahan), -(pengurangan), caranya kamu bisa ketik angka yg kamu hitung contoh, 1+1,lalu tekan tombol chat",
icon:"success",
button:"next",
});
    }
    else if(user == "Math"){

swal({
title: "fitur matematika",
text: "**(untuk perpangkatan), %(untuk persentase), /(untuk pembagian), *(perkalian), +(penjumlahan), -(pengurangan), caranya kamu bisa ketik angka yg kamu hitung contoh, 1+1,lalu tekan tombol chat",
icon:"success",
button:"next",
});
    }
    else if(user == "Siapa namaku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
            
        }
    }
    else if(user == "siapa namaku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    
    else if(user == "Siapa nama saya"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "siapa nama saya"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Siapa nama aku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
        }
    }
    else if(user == "siapa nama aku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "aku adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Aku adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "saya adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Saya adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Siapa aku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "siapa aku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    
    else if(user == "Siapa saya"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "siapa saya"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    //im
else if(user == "aku siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Aku siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    
    else if(user == "saya siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Saya siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    //im
    else if(user == "namaku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Namaku"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "namaku adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Namaku adalah"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "namaku siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Namaku siapa"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "nama"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
         if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    else if(user == "Nama"){
        var nama = document.getElementById("nama").value;
        document.getElementById("chatLog").innerHTML="nama kamu adalah" + " " + nama;
        if(nama == ""){
            document.getElementById("chatLog").innerHTML="<h5 style='color:red'>Sepertinya kamu belum memberitahuku!!</h5>";
            setTimeout(function() {
                swal("mau konfirmasi nama??", {
  buttons: {
    catch: {
      text: "tidak",
      value: "catch",
    },
    iya: true,
  },
})
.then((value) => {
  switch (value) {
 
    case "iya":
      document.getElementById("nma").style="display:block";
      document.getElementById("nama").style="display:flex";
      break;
 
    case "catch":
      swal("baiklah");
      break;
 
    default:
      swal("-");
  }
});
            }, 2000);
        }
    }
    //keluar percakapan
    else if(user == "bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
    }
    else if(user == "bye-bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
}
else if(user == "bye - bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
}
else if(user == "Bye-bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
}
else if(user == "Bye - bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
}
    else if(user == "Bye"){
        var nama = document.getElementById("nama").value;
       swal({
title: "by spark",
text: "Terima kasih" + " " + nama + " " + "telah menggunakan layanan spark bot🥰",
button: "iya",
});
    }
    else {
        document.getElementById("chatLog").innerHTML += "<br><h5>maaf aku tidak mengerti!!<br>Kamu bisa ketik 'help' untuk melihat fitur secara lengkap, kalau jawabannya tidak tepat, berarti kata itu belum/tidak terdaftar, terima kasih<b><h1>🙂</h1></h5>";
    }}
    //panel kofirm nama
function nem(){
    document.getElementById("inp").style="display:none";
    var myTimeout = setTimeout(function() {
        document.getElementById("nma").style="display:block";
        swal({
title: "perhatian!!",
text: "konfirmasi nama hanya terjadi 1× setiap laman ini di muat",
icon: "warning",
button: "iya",
});
    },
        2000);
}
//batal konfirm
function hps(){
    document.getElementById("nama").style="display:none";
    document.getElementById("nma").style="display:none";
    swal({
title: "gagal",
text: "yaah aku jadi tidak tahu nama kamu😔",
button: "abaikan",
icon:"error"
});
document.getElementById("chatLog").innerHTML="<h5>Hai selamat datang di layanan spark chat</h5>";
    setTimeout(function() {
        document.getElementById("chatLog").innerHTML="<h5>Hai selamat datang di layanan spark chat&nbsp;ketik 'hello/hai' untuk memulai chat😊</h5>";
    }, 3500);
    document.getElementById("inp").style="display:flex";
}

function konfir(){
    var nama = document.getElementById("nama").value;
    document.getElementById("inp").style="display:flex";
    document.getElementById("nma").style="display:none";
    document.getElementById("chatLog").innerHTML="<h5>Hai selamat datang di layanan spark chat</h5>";
    setTimeout(function() {
        document.getElementById("chatLog").innerHTML="<h5>Hai selamat datang di layanan spark chat&nbsp;ketik 'hello/hai' untuk memulai chat😊</h5>";
    }, 3500);
    if(nama == ""){
        swal({
title: "gagal",
text: "yaah aku jadi tidak tahu nama kamu😔",
button: "abaikan",
icon:"error"
});
    }
    else if(nama == " "){
        swal({
title: "gagal",
text: "yaah aku jadi tidak tahu nama kamu😔",
button: "abaikan",
icon:"error"
});
    }
    else {
        document.getElementById("nama").style="display:none";
    document.getElementById("nma").style="display:none";
    swal({
title: "success",
text: "Terima kasih kak" + " " + nama + " " + "telah konfirm nama kamu, sekarang aku akan mengingat nama kamu😊",
button: "iya",
icon:"success"
});
    document.getElementById("chatLog").innerHTML="Senang bisa mengenal mu" + " " + nama;
    }
    
}
//matematika
function mtk() {
    var val = document.getElementById("userBox").value;
    if (val) {
        document.getElementById("userBox").value = eval(val);
        document.getElementById("chatLog").innerHTML = val;
    }
}
function pick() {
    var myTimeout = setTimeout(function() {
        swal({
title: "ini angka heksadecimal dari warna yang kamu pilih",
text: pick,
icon:"success",
button:"oke",
});
    },
        500);

    var pick = document.getElementById("color").value;
}
function rmv() {
    document.getElementById("col").style = "display: none";
}



var myInterval = setInterval(function() {

    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = "AM";

    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h: h;
    m = (m < 10) ? "0" + m: m;
    s = (s < 10) ? "0" + s: s;



    var time = h + ":" + m + ":" + s + "" + session;

    document.getElementById("MyClockDisplay").innerHTML = time;
}, 1000);


function restart() {
    document.getElementById("canv").style = "display: block";
    document.getElementById("start-btn").style = "display: block";
    document.getElementById("res").style = "display: none";




}

function keluar() {
    document.getElementById("res").style = "display:none";
}

//  var Timeout = setTimeout(function() {
//     document.getElementById("bod").style="background-image: url("bg.jpg")";

//   }, 6000);


function bro() {
    var myTimeout = setTimeout(function() {
        document.getElementById("start0").style = "display:block";
        document.getElementById("bhj").style = "display:block";
        document.getElementById("gallery1").style = "display:none";
    },
        1500);
}

//quotes
function quoteRandom(min, max){
       var inter =  document.getElementById("interaksi").innerHTML = Math.floor(Math.random() * (max - min)) + min;
       
       //logic
             if(inter == 1){
           document.getElementById("chatLog").innerHTML='<i><h5>"Waktumu terbatas, jadi jangan <br>sia-siakan dengan menjalani hidup orang lain.<br> Jangan terjebak oleh dogma – yaitu <br>hidup dengan hasil pemikiran orang lain.”<br><br> – Steve Jobs –</h5>';
       }else if(inter == 2){
           document.getElementById("chatLog").innerHTML='<i><h5>“Hidup tidak pernah mudah. <br>Ada pekerjaan yang harus dilakukan<br> dan kewajiban yang harus dipenuhi – <br>kewajiban terhadap kebenaran, keadilan, dan kebebasan.”<br><br> — John F. Kennedy —</h5>';
       }else if(inter == 3){
           document.getElementById("chatLog").innerHTML='<i><h5>“Teruslah tersenyum, karena hidup adalah hal yang indah<br> dan ada banyak hal untuk disyukuri.” <br><br>— Marilyn Monroe —</h5>';
       }else if(inter == 4){
           document.getElementById("chatLog").innerHTML='<i><h5>“Hidup itu sederhana, <br>kita yang membuatnya sulit.”<br><br> – Confucius —</h5>';
       }else if(inter == 5){
           document.getElementById("chatLog").innerHTML='<i><h5>“Tidak apa-apa untuk merayakan<br> kesuksesan tapi lebih penting untuk<br>memperhatikan pelajaran tentang kegagalan.” <br><br>– Bill Gates —</h5>';
       }else if(inter == 6){
           document.getElementById("chatLog").innerHTML='<i><h5>"Satu-satunya sumber dari pengetahuan<br>adalah pengalaman." <br><br>- Albert Einstein  -</h5>';
       }else if(inter == 7){
           document.getElementById("chatLog").innerHTML='<i><h5>“Yang membuatku terus berkembang <br><br>adalah tujuan-tujuan hidupku.” <br><br>- Muhammad Ali -</h5>';
       }else if(inter == 8){
           document.getElementById("chatLog").innerHTML='<i><h5>"Aku paling takut pada sapi, <br>sebab ia punya tanduk, namun tak punya akal."<br><br> -Ibnu Sina -</h5>';
       }else if(inter == 9){
           document.getElementById("chatLog").innerHTML='<i><h5>"Nafsu bisa membuat seorang Raja<br> menjadi Budak. Sementara sabar bisa<br> membuat seorang Budak menjadi Raja."<br><br> - Imam Al-Ghazali -</h5>';
       }else if(inter == 10){
           document.getElementById("chatLog").innerHTML='<i><h5> "Banyak orang yang telah meninggal,<br> tapi nama baik mereka tetap kekal. <br>Dan banyak orang yang masih hidup, <br>tapi seakan mereka orang mati yang tak berguna."<br><br> - Imam Syafi i -</h5>';
       }else if(inter == 11){
           document.getElementById("chatLog").innerHTML='<i><h5>"Lidah seseorang dapat menggambarkan<br> bagaimanakah hatinya."<br><br> - Ibnu Qayyim -</h5>';
       }else if(inter == 12){
           document.getElementById("chatLog").innerHTML='<i><h5>“Sukses mewakili 1% dari pekerjaan Anda<br> yang dihasilkan dari 99% yang disebut kegagalan.”<br><br>- Orville and Wilbur Wright -</h5>';
       }else if(inter == 13){
           document.getElementById("chatLog").innerHTML='<i><h5>“Jangan takut untuk membuat sebuah<br> kesalahan. Tapi pastikan Anda tidak<br> melakukan kesalahan yang sama dua kali.”<br><br> - Hellen Keller -</h5>';
       }else if(inter == 14){
           document.getElementById("chatLog").innerHTML='<i><h5>“Tidak ada dalam hidup yang perlu ditakuti,<br> itu hanya untuk dipahami. Sekaranglah<br> waktunya untuk lebih memahami, sehingga <br>rasa takut kita berkurang”<br><br>- Nicola Tesla -</h5>';
       }else if(inter == 15){
           document.getElementById("chatLog").innerHTML='<i><h5>"Banyak orang mengatakan bahwa<br> kecerdasanlah yang menjadikan seseorang<br> sebagai seorang ilmuwan hebat.<br> Mereka salah: karakterlah yang membuatnya."<br><br>- Albert Einstein -</h5>';
       }else if(inter == 16){
           document.getElementById("chatLog").innerHTML='<i><h5>"Jika kebetulan terjadi terlalu banyak,<br> seorang ilmuwan akan mencari pola, <br>dan seorang beriman akan mencari Tuhan."<br><br>- Ayu Utami -</h5>';
       }else if(inter == 17){
           document.getElementById("chatLog").innerHTML='<i><h5>"Risiko terbesar adalah tidak<br> mengambil risiko apa pun. Di dunia yang <br>berubah sangat cepat, satu-satunya strategi<br> yang dijamin gagal adalah tidak mengambil risiko."<br><br>- mark zuckerberg -</h5>';
       }else if(inter == 18){
           document.getElementById("chatLog").innerHTML='<i><h5>“Kenapa khawatir? Jika Anda telah<br> melakukan yang terbaik yang Anda bisa,<br> maka khawatir tidak akan <br>membuatnya menjadi lebih baik.”<br><br>- Walt Disney -</h5>';
       }else if(inter == 19){
           document.getElementById("chatLog").innerHTML='<i><h5>“Teruslah tersenyum, karena hidup itu indah<br> dan ada banyak hal yang bisa disyukuri.”<br><br>- Marilyn Monroe -</h5>';
       }else if(inter == 20){
           
           document.getElementById("chatLog").innerHTML='<i><h5>“Bekerja keras dan mencari tahu bagaimana<br> menjadi berguna dan jangan mencoba<br> meniru kesuksesan orang lain.<br> Cari tahu bagaimana melakukannya<br> untuk diri Anda sendiri.”<br><br>- Harrison Ford -</h5>';
       }
      }
      