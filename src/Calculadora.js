class Calculadora{
    soma(x,y){
        return x+y;
    }
    subtracao(x,y){
        return x-y;
    }
    divisao(x,y){
        return x/y;
    }
    multpicacao(x,y){
        return x*y;
    }
}

module.exports = Calculadora

let calculadora = new Calculadora()
console.log(calculadora.soma(1,3));