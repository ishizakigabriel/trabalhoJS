$(document).ready(function(){
    var xhttp = new XMLHttpRequest();
    var myJson;
    var clickedCategory;
    var clickedItem;
    var col1 = '';
    var col2 = '';
    var col3 = '';
    xhttp.onreadystatechange = function(){
        if ((this.status == 200) && this.readyState == 4){
            myJson = JSON.parse(this.responseText);
            col1 = "<table>"
            for(var i = 0; i < myJson.categorias.length; i++){
                col1 += "<tr class='categoria'><td>" + myJson.categorias[i].nome + "</td></tr>"
            }
            col1 += "</table>"
            $("#coluna1").html(col1);
        }
        $(".categoria").click(function(){
          clickedCategory = myJson.categorias[$(this).index(".categoria")];
          col2 = "<table>"
          for(var j = 0; j < clickedCategory.content.length; j++) {
              col2 += "<tr class='item'><td>" + clickedCategory.content[j].nome + "</td></tr>"
          }
          col2 += "</table>"
          $("#coluna2").html(col2);
          $(".item").click(function(){
            clickedItem = clickedCategory.content[$(this).index(".item")];
            alert(clickedItem.criador);
          });
        });

    };
    xhttp.open("GET","produtos.json",true);
    xhttp.send();
});
