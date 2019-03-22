$(document).ready(function(){
    var xhttp = new XMLHttpRequest();
    var myJson;
    var col1 = '';
    var col2 = '';
    var col3 = '';
    xhttp.onreadystatechange = function(){
        if ((this.status == 200) && this.readyState == 4){
            myJson = JSON.parse(this.responseText);
            col1 = "<table>"
            for(var i = 0; i < myJson.categorias.length; i++){
                col1 += "<tr'><td class='categoria'>" + myJson.categorias[i].nome + "</td></tr>"
            }
            col1 += "</table>"
            $("#coluna1").html(col1);
        }
        $(".categoria").click(function(){
            alert("clicou em " + $(this).html());
        });
    };
    xhttp.open("GET","produtos.json",true);   
    xhttp.send();
});