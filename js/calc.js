function calc(tipo,valor){
    
    if(tipo === 'acao'){

    if(valor === 'c'){
        //limpa o visor
        document.getElementById('result').value = ''
    }

    if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('result').value += valor
    }

    if(valor === '='){
        var valor_camp = eval(document.getElementById('result').value)
       
        document.getElementById('result').value = valor_camp
        //console.log(eval(valor_camp))
        //usaremos uma função nativa eval que trasforma a string orinda do html em uma operaçao aritimetica
    }

    }else if(tipo === 'valor'){

        //var valor_camp = document.getElementById('result').value
        //usando o += nao teremos necesidade de recuperar o valor com a var 
        document.getElementById('result').value += valor
    } 

}