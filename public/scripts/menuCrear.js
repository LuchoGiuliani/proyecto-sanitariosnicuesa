let categories = {
    baño: ["ducha", "inodoro", "bidet", "griferia", "lavatorio"],
    cocina: ["bacha", "horno", "griferiaCocina"],
    tanques: ["termotanques", "tanquesDeAgua"],
    calefaccion: ["salamandra", "caloventores", "aires acondicionados"],
    instalaciones: ["tubos", "cintas", "adhesivos"]
} //array de subcategorias segun la categoria elegida


function populate() {
    let s1 = document.getElementById("categoria"); // agarra el selector categoria
    let s2 = document.getElementById("subCategoria"); // agarra el selector subCategoria
    let optionArray = [] // variable que va a ser el listado de opciones

    s2.innerHTML = "elegir una opcion"; // hace que las opciones de subCategoria sean "elegir una opcion" cuando hay un cambio de categoria

    /*  da valor a optionArray dependiendo de cual sea el valor (opcion elegida) de categoria  */
    if (s1.value == "baño") {
        optionArray = categories.baño
    }

    else if (s1.value == "cocina") {
        optionArray = categories.cocina
    }

    else if (s1.value == "tanques") {
        optionArray = categories.tanques
    }

    else if (s1.value == "calefaccion") {
        optionArray = categories.calefaccion
    }

    else if (s1.value == "instalaciones") {
        optionArray = categories.instalaciones
    }

    let option1 = document.createElement("option"); // crea opcion para subCategoria
        option1.value = "";
        option1.innerHTML = "Elija subcategoria";
    s2.options.add(option1); // agrega nueva opcion al listao de opciones

    /*  bucle que agrega una opcion por cada elemento en el array optionArray  */
    for (let i = 0; i < optionArray.length; i++) {
        let newOption = document.createElement("option"); // crea opcion para subCategoria
        newOption.value = "";
        newOption.innerHTML = "opciones";
        newOption.value = optionArray[i]; // define el VALOR de la opcion
        newOption.innerHTML = optionArray[i]; // define el nombre de la opcion
        s2.options.add(newOption); // agrega nueva opcion al listao de opciones
    }
}

// function selected(value){
//     console.log(value);
//     let s1 = document.getElementById("categoria"); 
//     let s2 = document.getElementById("subCategoria"); 

//     s1.options.forEach(element => {
//         if(element.value == value ) {
//             element.setAttribute("selected", "selected");
//         }
//     });
//     s2.options.forEach(element => {
//         if(element.value == value ) {
//             element.setAttribute("selected", "selected");
//         }
//     });
// }


