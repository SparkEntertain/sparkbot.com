        //WRONG1
        function wrong1() {
            document.getElementById("answer-button1").style = "display:none";
             swal({
title: "Wrong",
text: "ouch, jawaban kamu kurang tepat, kamu dapat mencobanya nanti 😁",
icon:"error",
button:"oke",
});
            document.getElementById("next1").style = "display:block";
            document.getElementById("a").innerHTML = "<b ='color:red'>0</b>";
        }

        function func() {
            
            document.getElementById("start0").style = "display: none";
            document.getElementById("container").style = "display:block";
        }
        //RIGHT1
        function right1() {
            document.getElementById("next1").style = "display:block";
            document.getElementById("answer-button1").style = "display:none";
             swal({
title: "Good job",
text: "penjelasan: tetap 20 menit karena kamu bisa merebus 10 butir telur bersamaan",
icon:"success",
button:"oke",
});
            document.getElementById("a").innerHTML = 10;
        }
        //NEXT BUTTON
        function soal2() {
            document.getElementById("question1").style = "display:none";
            document.getElementById("next1").style = "display:none";
            document.getElementById("answer-button2").style = "display:grid";
            document.getElementById("question2").style = "display:block";
        }
        function soal3() {
            document.getElementById("question2").style = "display:none";
            document.getElementById("next2").style = "display:none";
            document.getElementById("answer-button3").style = "display:grid";
            document.getElementById("question3").style = "display:block";
        }

        function soal4() {
            document.getElementById("question3").style = "display:none";
            document.getElementById("next3").style = "display:none";
            document.getElementById("answer-button4").style = "display:grid";
            document.getElementById("question4").style = "display:block";
        }
        function soal5() {
            document.getElementById("question4").style = "display:none";
            document.getElementById("next4").style = "display:none";
            document.getElementById("answer-button5").style = "display:grid";
            document.getElementById("question5").style = "display:block";
        }
        function soal6() {
            document.getElementById("question5").style = "display:none";
            document.getElementById("next5").style = "display:none";
            document.getElementById("answer-button6").style = "display:grid";
            document.getElementById("question6").style = "display:block";
        }
        function soal7() {
            document.getElementById("question6").style = "display:none";
            document.getElementById("next6").style = "display:none";
            document.getElementById("answer-button7").style = "display:grid";
            document.getElementById("question7").style = "display:block";
        }
        function soal8() {
            document.getElementById("question7").style = "display:none";
            document.getElementById("next7").style = "display:none";
            document.getElementById("answer-button8").style = "display:grid";
            document.getElementById("question8").style = "display:block";
        }
        function soal9() {
            document.getElementById("question8").style = "display:none";
            document.getElementById("next8").style = "display:none";
            document.getElementById("answer-button9").style = "display:grid";
            document.getElementById("question9").style = "display:block";
        }
        function soal10() {
            document.getElementById("question9").style = "display:none";
            document.getElementById("next9").style = "display:none";
            document.getElementById("answer-button10").style = "display:grid";
            document.getElementById("question10").style = "display:block";
        }
        //SOAL 2
        function right2() {
            document.getElementById("next2").style = "display:block";
            document.getElementById("answer-button2").style = "display:none";
            swal({
title: "Nice!!",
text: "penjelasan: karena huruf keempat dari A-B-J-A-D yaitu A",
icon:"success",
button:"oke",
});
            document.getElementById("b").innerHTML = 10;
        }
        function wrong2() {
            document.getElementById("answer-button2").style = "display:none";
            swal({
title: "Ouch",
text: "coba lebih teliti lagi ya😄",
icon:"error",
button:"oke",
});
            document.getElementById("next2").style = "display:block";
            document.getElementById("b").innerHTML = "<b style='color:red'>0</b>";
        }
        //SOAL 3
        function right3() {
            document.getElementById("next3").style = "display:block";
            document.getElementById("answer-button3").style = "display:none";
            swal({
title: "Correct",
text: "penjelasan: karena 2 benda itu sama sama kilo!!",
icon:"success",
button:"oke",
});
            document.getElementById("c").innerHTML = 10;
        }
        function wrong3() {
            document.getElementById("answer-button3").style = "display:none";
            swal({
title: "Salah",
text: "waah, seperti nya jawaban kamu kurang tepat",
icon:"error",
button:"oke",
});
            document.getElementById("next3").style = "display:block";
            document.getElementById("c").innerHTML = "<b style='color:red'>0</b>";
        }
        //SOAL 4
        function right4() {
            document.getElementById("next4").style = "display:block";
            document.getElementById("answer-button4").style = "display:none";
            swal({
title: "wow genius🤩",
text: "penjelasan: karena tidak mungkin, jika menyalakan obor atau lilin tanpa api😉",
icon:"success",
button:"oke",
});            
            document.getElementById("d").innerHTML = 10;
        }
        function wrong4() {
            document.getElementById("answer-button4").style = "display:none";
            swal({
title: "wrong",
text: "lebih berhati-hatilah dalam membaca soal",
icon:"error",
button:"oke",
});
            document.getElementById("next4").style = "display:block";
            document.getElementById("d").innerHTML = "<b style='color:red'>0</b>";
        }
        //soal 5

        function right5() {
            document.getElementById("next5").style = "display:block";
            document.getElementById("answer-button5").style = "display:none";
            swal({
title: "mantap",
text: "penjelasan: tidak mungkin kalau membuka pintu geser dengan cara di dorong",
icon:"success",
button:"oke",
});
            document.getElementById("e").innerHTML = 10;
        }
        function wrong5() {
            document.getElementById("answer-button5").style = "display:none";
            swal({
title: "salah",
text: "seperti nya jawaban kamu kurang tepat",
icon:"error",
button:"oke",
});
            document.getElementById("next5").style = "display:block";
            document.getElementById("e").innerHTML = "<b style='color:red'>0</b>";
        }
        //soal 6
        function right6() {
            document.getElementById("next6").style = "display:block";
            document.getElementById("answer-button6").style = "display:none";
            swal({
title: "You smart",
text: "penjelasan: karena pohon besar susah di cabut",
icon:"success",
button:"oke",
});
            document.getElementById("f").innerHTML = 10;
        }
        function wrong6() {
            document.getElementById("answer-button6").style = "display:none";
            swal({
title: "Ouch",
text: "jawaban kamu kurang tepat, coba lagi nanti",
icon:"error",
button:"oke",
});
            document.getElementById("next6").style = "display:block";
            document.getElementById("f").innerHTML = "<b style='color:red'>0</b>";
        }
        //soal 7
        function right7() {
            document.getElementById("next7").style = "display:block";
            document.getElementById("answer-button7").style = "display:none";
            swal({
title: "Good job",
text: "penjelasan: karena pelanet Hollywood adalah tempat yang banyak pengunjungnya",
icon:"success",
button:"oke",
});
            document.getElementById("g").innerHTML = 10;
        }
        function wrong7() {
            document.getElementById("answer-button7").style = "display:none";
       swal({
title: "ouch salah",
text: "jawaban kamu kurang tepat!!",
icon:"error",
button:"oke",
});
            document.getElementById("next7").style = "display:block";
            document.getElementById("g").innerHTML = "<b style='color:red'>0</b>";
        }

        //soal8
        function right8() {
            document.getElementById("next8").style = "display:block";
            document.getElementById("answer-button8").style = "display:none";
            swal({
title: "Well played",
text: "penjelasan: karena korek dapat menimbulkan api🔥",
icon:"success",
button:"oke",
});
            document.getElementById("h").innerHTML = 10;
        }
        function wrong8() {
            document.getElementById("answer-button8").style = "display:none";
            swal({
title: "Ouch, sedikit lagi!!",
text: "sepertinya jawaban kamu kurang tepat",
icon:"error",
button:"oke",
});
            document.getElementById("next8").style = "display:block";
            document.getElementById("h").innerHTML = "<b style='color:red'>0</b>";
        }

        //soal 9
        function right9() {
            document.getElementById("next9").style = "display:block";
            document.getElementById("answer-button9").style = "display:none";
            swal({
title: "waah, smart people",
text: "penjelasan: karena sapi selalu diperas susunya, kasihan si sapi :(",
icon:"success",
button:"oke",
});
            document.getElementById("i").innerHTML = 10;
        }
        function wrong9() {
            document.getElementById("answer-button9").style = "display:none";
            swal({
title: "Ouch",
text: "jawaban anda salah",
icon:"error",
button:"oke",
});
            document.getElementById("next9").style = "display:block";
            document.getElementById("i").innerHTML = "<b style='color:red'>0</b>";
        }

        //soal10
        function right10() {
            document.getElementById("next10").style = "display:block";
            document.getElementById("answer-button10").style = "display:none";
            swal({
title: "pasti anak IPA",
text: "penjelasan: CH3OH",
icon:"success",
button:"oke",
});
            document.getElementById("j").innerHTML = 10;
            document.getElementById("repe").style = "display:block";
            document.getElementById("don").style = "display:block";
        }
        function wrong10() {
            document.getElementById("answer-button10").style = "display:none";
            swal({
title: "Ouch",
text: "belajar lebih giat lagi ya",
icon:"error",
button:"oke",
});
            document.getElementById("next10").style = "display:block";
            document.getElementById("j").innerHTML = "<b style='color:red'>0</b>";
            document.getElementById("repe").style = "display:block";
            document.getElementById("don").style = "display:block";

        }

        function views() {
            document.getElementById("score").style = "display:block";

            var p1 = document.getElementById("a").value;
            var p2 = document.getElementById("b").value;
            var p3 = document.getElementById("c").value;
            var p4 = document.getElementById("d").value;
            var p5 = document.getElementById("e").value;
            var p6 = document.getElementById("f").value;
            var p7 = document.getElementById("g").value;
            var p8 = document.getElementById("h").value;
            var p9 = document.getElementById("i").value;
            var p10 = document.getElementById("j").value;
        }
        function rep() {
            document.getElementById("question10").style = "display:none";
            document.getElementById("question1").style = "display:block";
            document.getElementById("answer-button1").style = "display:grid";
            document.getElementById("repe").style = "display:none";
            document.getElementById("next10").style = "display:none";
            document.getElementById("score").style = "display:none";
            document.getElementById("don").style = "display:none";
        }
        function sele() {
            document.getElementById("score").style = "display:none";
            document.getElementById("next10").style = "display:none";
            document.getElementById("question10").style = "display:none";
            document.getElementById("repe").style = "display:none";
            document.getElementById("don").style = "display:none";
            document.getElementById("container").style = "display:none";
        }