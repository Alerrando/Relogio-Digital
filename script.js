window.onload = function(){
    let data = new Date();
    let horas=00, minutos=00, segundos=00;
    let $horas = document.getElementById("hora");
    let $minutos = document.getElementById("minutos");
    let $segundos = document.getElementById("segundos");
    let $AMPM = document.getElementById("AMPM");

    horas = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();

    horas >= 12 ? $AMPM.innerHTML = "PM" : $AMPM.innerHTML = "AM";

    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = segundos;

    function startTimer(){
        segundos++;
        horasTime();
        minutosTime();
        segundosTime()
    }

    function horasTime(){
        if(horas == 00 || horas == 0)
        {
            horas = "00";
            $horas.innerHTML = horas;
        }
        else if(horas < 9) {$horas.innerHTML = "0" + horas};
    }

    function minutosTime(){
        if(minutos < 9) {$minutos.innerHTML = "0" + minutos};

        if(minutos > 60)
        {
            minutos = "00";
            $minutos.innerHTML = minutos;
            horas++;
            $horas.innerHTML = "0" + horas;
        }
    }

    function segundosTime(){
        if(segundos <= 9){$segundos.innerHTML = "0" + segundos};

        if(segundos > 9){$segundos.innerHTML = segundos};

        if(segundos > 60)
        {
            segundos = "00";
            minutos++;

            minutos <= 9 ? $minutos.innerHTML = "0" + minutos : $minutos.innerHTML = minutos;

            $segundos.innerHTML = segundos;
        }
    }

    setInterval(startTimer, 1000);
}