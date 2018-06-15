
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>    
    <script type="text/javascript" >
	$.getJSON("array.json", function(json) {
    console.log('id: ' + json.id);
    console.log('name: ' + json.name);
});
        $(document).ready(function() {
            function limpa_formulário_cep() {                
                $("#rua").val("");
                $("#bairro").val("");
                $("#cidade").val("");
                $("#uf").val("");                
            }         
            $("#cep").blur(function() {        
                var cep = $(this).val().replace(/\D/g, '');                
                if (cep != "") {                
                    var validacep = /^[0-9]{8}$/;               
                    if(validacep.test(cep)) {                     
                        $("#rua").val("");
                        $("#bairro").val("");
                        $("#cidade").val("");
                        $("#uf").val("");                   
                        $.getJSON("https://mid.webcontinental.com.br/intelipostwebhook/getConsultaFreteOracleProduto.json"+ cep +"/json/?callback=?", function(dados) {
                            if (!("erro" in dados)) {
                                $("#rua").val(dados.logradouro);
                                $("#bairro").val(dados.bairro);
                                $("#cidade").val(dados.localidade);
                                $("#uf").val(dados.uf);                                
                            }
                            else {
                                limpa_formulário_cep();
                                alert("CEP não encontrado.");
                            }
                        });
                    }
                    else {
                        limpa_formulário_cep();
                        alert("Formato de CEP inválido.");
                    }
                }
                else {
                    limpa_formulário_cep();
                }
            });
        });

    </script>
