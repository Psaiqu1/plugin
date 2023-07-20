// Definindo o objeto do plugin
const MeuPlugin = {
  addNumbers: (num1, num2) => {
    // Implementação do gancho addNumbers
    const resultado = num1 + num2;
    return resultado;
  },
};

// Exemplo de uso do plugin
// Imagine que esse código está dentro do seu sistema ou aplicativo

// Importe ou inclua o arquivo que contém o plugin

// Use o gancho addNumbers
const resultadoAdicao = MeuPlugin.addNumbers(5, 3);
console.log("Resultado da Adição:", resultadoAdica
            o);
