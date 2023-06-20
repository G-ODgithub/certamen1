$("#validar").validate({    

    rules:{
        correo: {
            email: true,
        },
        telefono: {
            minlength: 9,
            maxlength: 9,
        },
        descripcion: {
            maxlength: 300,
        }
    },
  
    messages: {
      nombre:{
        required: "Por favor indique su nombre",
      },
      apellidos:{
        required: "Por favor indique sus apellidos",
      }, 
      rut:{
        required: "Por favor indique su RUT",
      }, 
      correo: {
        required: "Por favor indique su correo electrónico",
        email: "Por favor indique un correo válido"
      },
      telefono: {
        required: "Por favor indique su número telefónico",
        maxlength: "El número debe tener 9 dígitos",
        minlength: "El número debe tener 9 dígitos",
      },
      descripcion: {
        required: "Por favor escriba su descripción",
        maxlength: "La descripción debe tener 300 caracteres como máximo",
      }
    },
  
    submitHandler: function(form) {
      form.submit();
    }
   });