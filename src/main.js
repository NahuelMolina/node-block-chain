class myClass {
    constructor(nombre,mierda){
        this.name = nombre;
        this.edad = mierda;
    }

    diceName(){
        console.log('El nombre es: '+ this.name);
    }

    seDespide(){
        console.log('Adios '+ this.name+' joven de '+this.edad+' años');
    }
}

const minom = new myClass('Silvio',22);
console.log(minom.seDespide());
console.log('The end');