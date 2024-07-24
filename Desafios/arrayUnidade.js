export function arrayUnidade() {

    var unidades = ["Programaçâo", "Cursos Alura", "Desenvolvimento de software", "Desenhar", "Musica"];
    var indiceAleatorio = Math.floor(Math.random() * unidades.length);

    function unidadeEscolhida(numero) {
        return unidades[numero];
    }

    console.log(unidadeEscolhida(indiceAleatorio));
};