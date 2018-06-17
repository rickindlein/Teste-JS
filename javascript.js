function muitoCurto(campo, nome, tamanho) {
    if (campo.value.length >= tamanho) return false;
    alert("O conteúdo do campo '" + nome
            + "' deveria ter pelo menos " + tamanho + " caracteres."
            + " Por favor, preencha-o corretamente.");
    return true;
}

function tamanhoErrado(campo, nome, tamanho) {
    if (campo.value.length === tamanho) return false;
    alert("O conteúdo do campo '" + nome
            + "' deveria ter exatamente " + tamanho + " caracteres. "
            + "Por favor, preencha-o corretamente.");
    return true;
}

function naoNumerico(campo, nome) {
    if (!isNaN(campo.value)) return false;
    alert("Digite somente números no campo '" + nome + "', por favor.");
    return true;
}

function diferentes(campo1, nome1, campo2, nome2) {
    if (campo1.value === campo2.value) return false;
    alert("Os campos '" + nome1 + "' e '" + nome2 + "' devem ser iguais.");
    return true;
}

function validarFormulario() {
    var cad = document.getElementById('cad');

    
    if (naoNumerico(cad.txtCep, 'CEP')) return;

    

function verificarCEP(strCep) {
    if (!/[0-9]{8}/.test(strCep)) return false;
    if (strCep === "00000000") return false;

    var soma = 0;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(strCep.substring(i - 1, i)) * (8 - i);
    }

    var resto = soma % 8;

    if (resto === 7 || resto === 8 || resto < 2) {
        resto = 0;
    } else {
        resto = 8 - resto;
    }

    if (resto !== parseInt(strCep.substring(4, 7))) {
        return false;
    }

    soma = 0;

    for (var i = 1; i <= 7; i++) {
        soma += parseInt(strCep.substring(i - 1, i)) * (9 - i);
    }
    resto = soma % 8;

    if (resto === 7 || resto === 8 || resto < 2) {
        resto = 0;
    } else {
        resto = 8 - resto;
    }
 
    if (resto !== parseInt(strCep.substring(7, 8))) {
        return false;
    }

    return true;
}
