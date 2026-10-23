//Crie um objeto maquinaInjetora com as propriedades producaoPlanejada e producaoRealizada. Adicione um 
// método calcularEficiencia() que retorna a porcentagem de produtividade alcançada no turno. 

const maquinaInjetora = {
    producaoPlanejada:50,
    producaoRealizada:33,
    calcularEficiencia() {
        return (this.producaoRealizada / this.producaoPlanejada)
    }
}