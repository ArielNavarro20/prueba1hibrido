// Clases figuras
export abstract class FiguraGeometrica {
    nombre: string = ""
    constructor( nombre: string) {
        this.nombre = nombre
    }

    abstract calcularPerimetro(): number;
    
}

// Clase Circulo 
export class Circulo extends FiguraGeometrica {
    radio: number
   
    constructor(nombre: string, radio:number) {
        super('nombre')
        this.radio = radio
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

// Clase TrianguloEscaleno 

export class TrianguloEscaleno extends FiguraGeometrica {
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super('Triángulo Escaleno');
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    calcularArea(): number {
        // formula
        const s = this.calcularPerimetro() / 2;
        return Math.sqrt(s * (s - this.ladoA) * (s - this.ladoB) * (s - this.ladoC));
    }

    calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC;
    }
}


// Clase TrianguloEquilatero que hereda de TrianguloEscaleno
export class TrianguloEquilatero extends TrianguloEscaleno {
    constructor(ladoA: number) {
        super(ladoA, ladoA, ladoA);
        this.nombre = 'Triángulo Equilátero';
    }
};