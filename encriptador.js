        
        const inputMensaje = document.querySelector('#mensaje');
        const inputResultado = document.querySelector('#resultado');
        const buttonEncriptar = document.querySelector('#encriptar');
        const buttonDesencriptar = document.querySelector('#desencriptar');
        const buttonCopiar = document.querySelector('#copiar');
        
        let mensaje;
        let mensajeEncriptado;
        let letras;
        let error;
        let msg;
        let img1 = document.getElementById('img-resultado');
        let img2 = document.getElementById('sufijo-resultado');
        let btn  = document.getElementById('copiar');
        let c2   = document.querySelector('#card-2');

        const encriptar = () => {
            if(!validarLetras()) { //Si el texto no es válido, no encripta el mensaje
                return;
            }
            mensaje = inputMensaje.value;
            mensajeEncriptado = mensaje.replaceAll('e','enter')
                                       .replaceAll('i','imes')
                                       .replaceAll('o','ober')
                                       .replaceAll('a','ai')
                                       .replaceAll('u','ufat');
            inputResultado.value = mensajeEncriptado;  
        }

        const desEncriptar = () => {
            if(!validarLetras()) {
                return;
            } 
            mensajeEncriptado = inputMensaje.value;
            mensaje = mensajeEncriptado.replaceAll('enter','e')
                                       .replaceAll('imes','i')
                                       .replaceAll('ober','o')
                                       .replaceAll('ai','a')
                                       .replaceAll('ufat','u');
            inputResultado.value = mensaje;  
        }

        const validarLetras = () => {
            mensaje = inputMensaje.value;
            letras = 'abcdefghijklmnñopqrstuvwxyz ';
            error = '';
            for(let i of mensaje) {
                if(!letras.includes(i)) {
                    alert(`La letra ingresada ${i} no es válida, escriba solo letras minúsculas`);
                    return false;
                }
                return true;
            }
        }

        const copiarTexto = () => {
            mensajeEncriptado = inputResultado.value;
            navigator.clipboard.writeText(mensajeEncriptado);
            inputMensaje.value = '';
        }
        const ocultar = () => {
            btn.style.visibility  = 'hidden';
            c2.style.visibility   = 'visible';
        }
        ocultar();

        buttonEncriptar.addEventListener('click', () => {
            encriptar();
            img1.style.visibility = 'hidden';
            img2.style.visibility = 'hidden';
            btn.style.visibility  = 'visible';
            c2.style.visibility   = 'visible';
        });

        buttonCopiar.addEventListener('click', () => {
            copiarTexto();
            img1.style.visibility = 'visible';
            img2.style.visibility = 'visible';
            btn.style.visibility  = 'hidden';
            inputResultado.value = '';
            c2.style.visibility   = 'hidden';
        });
        buttonDesencriptar.addEventListener('click', () => {
            img1.style.visibility = 'hidden';
            img2.style.visibility = 'hidden';
            btn.style.visibility  = 'visible';
            c2.style.visibility   = 'visible';
            desEncriptar();
        });
        