var countDate = new Date('Jan 01 2024 00:00:00').getTime();
        function newYear(){
            var now = new Date().getTime();
            gap = countDate - now;

            var detik = 1000;
            var menit = detik * 60;
            var jam = menit * 60;
            var hari = jam * 24;
        
            var h = Math.floor(gap / (hari));
            var j = Math.floor((gap % (hari)) / (jam));
            var m = Math.floor((gap % (jam)) / (menit));
            var d = Math.floor((gap % (menit)) / (detik));
            document.getElementById('hari').innerText = h;
            document.getElementById('jam').innerText = j;
            document.getElementById('menit').innerText = m;
            document.getElementById('detik').innerText = d;
        }
        setInterval(function(){
            newYear();
        }, 1000)

