class Vehiculo {
    constructor({
        ruedas,
        marcaDestino,
        carroceria,
        tipoDeAuto,
    }){
        const modeloVehiculo = ()=> {
            switch (this.ruedas) {
                case 2:
                    return "Moto"
                case 4:
                    return "Auto"
                case 5:
                    return "Camioneta"            
            }
        }

        const tipoVehiculo = ()=> {
            switch (this.ruedas) {
                case 2:
                    return 0;
                case 4:
                    return 5;
                case 5:
                    return 4;           
            }
        }

        const costoDeFabricacion = () => {
            let costo;
            let base = 5000;

            
         
            if (this.carroceria == "chica") costo = base * 2 + 5000;

            else if (this.carroceria == "mediana") costo = base ** 2 + 850000;

            else if (this.carroceria == "grande") {
                if (this.tipoDeAuto == "alta gama") {base += 70000}    
                costo = (base ** 2 + 850000) * 5 + 180000;
            }
            return costo;
        }

        this.ruedas = ruedas;
        this.carroceria = carroceria;
        this.marcaDestino = marcaDestino;
        this.puertas = tipoVehiculo();
        this.tipo = modeloVehiculo();
        this.costo = costoDeFabricacion();
        this.encendido = false;
        this.velocidad = 0;
        this.luces = false;
        this.tipoDeAuto = tipoDeAuto;

    };

    encenderVehiculo(){

        if(!this.encendido) {
            this.encendido = true;
        }
        return "El vehiculo esta encendido"; 
    }
    apagarVehiculo(){

        if(this.encendido) {
            this.encendido = false;
        }
        return "El vehiculo esta apagado"; 
    }

    realizarViaje(){

        if(this.encendido){
            this.velocidad += 50; 
            return `Su ${this.tipo} esta en movimiento. Velocidad ${this.velocidad}`;
        } else {
            this.velocidad = 0;
            return `Por favor, encienda su ${this.tipo}`;
        } 
    }

    frenar(){

        if (this.velocidad > 0) {
        this.velocidad = 0;  
        }
        return `Su ${this.tipo} se ha detenido. Velocidad ${this.velocidad}`;
    }

    encenderLuces(){

        if (!this.luces) { 
        this.luces = true;
        }
        return "Sus luces ya se encuentran encendidas";
    }

    apagarLuces(){

        if (this.luces){
        this.luces = false;
        }
        return "Sus luces ya se encuentran apagadas";
    }

    
    presentarVehiculo(){

        if (this.tipoDeAuto == "alta gama") {

            document.write(`
            Modelo seleccionado: <b>${this.tipo}</b><br>
            Marca: <b>${this.marcaDestino}</b><br> 
            Tipo de Carroceria: <b>${this.carroceria}</b><br> 
            Numero de ruedas: <b>${this.ruedas}</b><br>
            Numero de puertas: <b>${this.puertas}</b><br>
            `);

        } else {
         
            document.write(`
            Modelo seleccionado: <b>${this.tipo}</b><br>
            Marca: <b>${this.marcaDestino}</b><br> 
            Tipo de Carroceria: <b>${this.carroceria}</b><br> 
            Numero de ruedas: <b>${this.ruedas}</b><br>
            Numero de puertas: <b>${this.puertas}</b><br>
            `);
        }   
    }
}  

const auto = new Vehiculo ({ruedas: 4, carroceria : "grande", marcaDestino : "Audi", tipoDeAuto : "normal"})

const gama = new Vehiculo({ruedas: 4, carroceria : "grande", marcaDestino : "Audi", tipoDeAuto : "alta gama"})