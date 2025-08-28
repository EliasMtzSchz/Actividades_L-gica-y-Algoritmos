const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

// Método de los dos punteros.
function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {

        // TODO: Compara las iniciales de los nombres en los punteros.
        x = arr[inicio].charAt(0);
        y = arr[siguiente].charAt(0);

        // Si coinciden, devuelve el par.
        if(x==y){
            return [arr[inicio], arr[siguiente]];
        
        // Si no coinciden, los contadores avanzan.
        }else if(x!=y){
            inicio++;
            siguiente++;
        }
    }

    return null; // Si no se encuentra ningún par.
}

console.log(encontrarPareja(invitados));

// Aproximación por Fuerza Bruta.
function fuerzaBruta(arr){
   for (let i=0;i<arr.length;i++){
        for (let j=i+1;j<arr.length;j++){
            x = arr[i].charAt(0);
            y = arr[j].charAt(0);
            // Si coinciden, devuelven el par.
            if (x==y){
                return `Los invitados ${arr[i]} y ${arr[j]} se sentarán al lado.`;
            }
        } 
    }
    // Si no coinciden, regresa "NO encontrado".
    return "NO encontrado";
}

console.log(fuerzaBruta(invitados));


