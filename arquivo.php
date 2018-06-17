$(document).ready(function(){
    $("button").click(function(){
       $.ajax({
                    var myJSon = {"strCep":[], "id":[], "qtd":[] };
                    type: "POST",
                    url: 'https://mid.webcontinental.com.br/intelipostwebhook/getConsultaFreteOracleProduto.json',
                    dataType: "json",
                    data: JSON.stringify(myJSon),
                    sucess: function (data){
                        alert('Sucess');
                    },
                    error: function () {
                        alert('Error');
                    }
        });
    });
});
$.ajax({
    url: "https://mid.webcontinental.com.br/intelipostwebhook/getConsultaFreteOracleProduto.json",
    method: "POST",
    data: {cdb: cdb}
}).done(function(data){
    var retorno = data;
    
    if(retorno.success){
      $('#preco').html(retorno.data.preco);
      $('#entrega').html(retorno.data.tempo);
    }else{
      alert(retorno.message);
    };
}).fail(function(err){
    alert("Erro no request: "+err);
});
<?php
 echo "o valor deu " + $preco;
 echo "A data de entrega é de " + (2-$entrega) +" à "+(2+$entrega); 
?>