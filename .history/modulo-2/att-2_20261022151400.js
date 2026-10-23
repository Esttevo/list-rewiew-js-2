const balanca = {
    currentWeight:0,
    maxWeight:5000,
    pesar(mass) {
        this.currentWeight = mass;
    }
    ,
    zerar() {
        this.currentWeight = 0;
    },

    verificarSobrecarga() {
        if (this.currentWeight > this.maxWeight) {
            return true
        } 
    }
}