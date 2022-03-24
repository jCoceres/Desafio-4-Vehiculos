class Vehiculo {
    constructor({
        ruedas,
        marcaDestino,
        carroceria
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

            else if (this.carroceria == "grande") costo = (base ** 2 + 850000) * 5 + 180000;
            

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

        document.write(`
        Vehiculo seleccionado: <b>${this.tipo}</b><br>
        Marca: <b>${this.marcaDestino}</b><br> 
        Carroceria: <b>${this.carroceria}</b><br> 
        Numero de ruedas: <b>${this.ruedas}</b><br>
        Numero de puertas: <b>${this.puertas}</b><br>
        `);
    }
}

const moto = new Vehiculo({ruedas: 2, carroceria: "mediana", marcaDestino: "BW"});


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()