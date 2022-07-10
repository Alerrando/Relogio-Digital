window.onload = function(){
    data = new Date();
    var horas=00, minutos=00, segundos=00;
    var $horas = document.getElementById("hora");
    var $minutos = document.getElementById("minutos");
    var $segundos = document.getElementById("segundos");
    var $AMPM = document.getElementById("AMPM");

    horas = data.getHours();
    minutos = data.getMinutes();
    segundos = data.getSeconds();

    if(horas >= 12)
        $AMPM.innerHTML = "PM";
    else
        $AMPM.innerHTML = "AM";

    $horas.innerHTML = horas;
    $minutos.innerHTML = minutos;
    $segundos.innerHTML = segundos;

    function startTimer(){
        segundos++;

        if(horas == 0)
        {
            horas = "00";
            $horas.innerHTML = horas;
        }

        if(horas < 9)
        {
            $horas.innerHTML = "0" + horas;
        }

        if(minutos < 9)
        {
            $minutos.innerHTML = "0" + minutos;
        }

        if(minutos > 60)
        {
            minutos = "00";
            $minutos.innerHTML = minutos;
            horas++;
            $horas.innerHTML = "0" + horas;
        }

        if(segundos <= 9)
            $segundos.innerHTML = "0" + segundos;

        if(segundos > 9)
            $segundos.innerHTML = segundos;

        if(segundos > 60)
        {
            segundos = "00";
            minutos++;
            if(minutos <= 9)
                $minutos.innerHTML = "0" + minutos;
            else
                $minutos.innerHTML = minutos;

            $segundos.innerHTML = segundos;
        }

    }

    setInterval(startTimer, 1000);
}
