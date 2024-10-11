function comprar() {
    document.getElementById('container').style.display = 'flex';
    document.getElementById('form').style.display = 'none';
    let carro1 = 15000;
    let carro2 = 20000;
    let carro3 = 25000;
    let valorCarro = document.getElementById('valorCarro').value;
    let valorParcela = document.getElementById('valorParcela').value;
    let valorTotal = 0;
    let numeroParcelas = 0;
    let quantParcelas = 0;

    document.getElementById('nomeCarro').innerHTML = ("Carro = " + valorCarro);

    switch(valorCarro) {
        case ('Fiat Uno'):
            valorCarro = carro1;
            break;
        case ('VW Gol'):
            valorCarro = carro2;
            break;
        case ('Ford KA'):
            valorCarro = carro3;
            break;
    }

    switch(valorParcela) {
        case "0x":
            valorTotal = valorCarro - (valorCarro * 0.2);
            quantParcelas = valorTotal;
            numeroParcelas = quantParcelas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;
            
        case "1x":
            valorTotal = valorCarro;
            quantParcelas = 1;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "2x":
            valorTotal = valorCarro;
            quantParcelas = 2;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "3x":
            valorTotal = valorCarro;
            quantParcelas = 3;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "4x":
            valorTotal = valorCarro;
            quantParcelas = 4;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "5x":
            valorTotal = valorCarro;
            quantParcelas = 5;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "6x":
            valorTotal = valorCarro;
            quantParcelas = 6;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "7x":
            valorTotal = valorCarro;
            quantParcelas = 7;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "8x":
            valorTotal = valorCarro;
            quantParcelas = 8;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "9x":
            valorTotal = valorCarro;
            quantParcelas = 9;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "10x":
            valorTotal = valorCarro;
            quantParcelas = 10;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;

        case "11x":
            valorTotal = valorCarro;
            quantParcelas = 11;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break;    
        
        case "12x":
            valorTotal = valorCarro + (valorCarro * 0.2);
            quantParcelas = 12;
            numeroParcelas = (valorTotal / quantParcelas).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'});
            break; 
    }

    valorTotal = valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})

    console.log(quantParcelas);
    document.getElementById('valorTotal').innerHTML = ("Valor da compra = " + valorTotal);
    document.getElementById('parcelas').innerHTML = ("Parcelas = " + valorParcela + " de " + numeroParcelas);
}