"use strict"

function fRechnen() {

    var vKapital;
    var vKapitalEnd;
    var vRente;
    var vZinsen;
    var vZinssatz;
    var vZinsfaktor
    var vLaufzeit;
    var vAusgabeHtml;
    var vRentenendwert;



    vZinssatz = parseFloat(document.getElementById("idZinssatz").value);
    vRente = parseFloat(document.getElementById("idNachRente").value);
    vLaufzeit = parseFloat(document.getElementById("idLaufzeit").value);

    vZinssatz /= 100
    vZinsfaktor = 1 + vZinssatz

    function fRentenendwertRechnen(Laufzeit) {
        return vRente * (Math.pow(vZinsfaktor, Laufzeit) - 1) / (vZinsfaktor - 1)
    }

    vRentenendwert = fRentenendwertRechnen(vLaufzeit)

    vAusgabeHtml = "Der Rentenendwert beträgt: " + vRentenendwert.toFixed(2) + " € <br><br>"

    vAusgabeHtml = vAusgabeHtml + "<table border 1>"
    vAusgabeHtml = vAusgabeHtml + "<tr><th>Jahr</th>"
    vAusgabeHtml = vAusgabeHtml + "<th>Kapital am 1.1.</th>";
    vAusgabeHtml = vAusgabeHtml + "<th>Zinsen am 31.12.</th>"
    vAusgabeHtml = vAusgabeHtml + "<th>Rente am 31.12.</th>"
    vAusgabeHtml = vAusgabeHtml + "<th>Kapital am 31.12</th></tr>"

    for (let i = 0; i <= vLaufzeit; i++) {
        vKapital = fRentenendwertRechnen(i);
        vZinsen = vKapital * vZinssatz;
        vKapitalEnd = vKapital + vZinsen + vRente;
        //If Statement um die Letzten drei Zellen leeer zu haben.
        if (i !== vLaufzeit) {
            vAusgabeHtml = vAusgabeHtml + "<tr><td>" + i + "</td>";
            vAusgabeHtml = vAusgabeHtml + "<td>" + vKapital.toFixed(2) + " €" + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + vZinsen.toFixed(2) + " €" + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + vRente.toFixed(2) + " € " + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + vKapitalEnd.toFixed(2) + " € " + "</td>"
        } else {
            vAusgabeHtml = vAusgabeHtml + "<tr><td>" + i + "</td>";
            vAusgabeHtml = vAusgabeHtml + "<td>" + vKapital.toFixed(2) + " €" + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + "" + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + "" + "</td>"
            vAusgabeHtml = vAusgabeHtml + "<td>" + "" + "</td>"
        }
    }

    document.getElementById("idAusgabeHTML").innerHTML = vAusgabeHtml;
}
