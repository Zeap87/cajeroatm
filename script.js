function ingresar(form){
    if (form.user.value=="blank")
    { alert("seleccione un usuario");
    }

    if (form.user.value=="Athziry")
    { if (form.contra.value=="123"){
          location="user1.html";  
        } else {
        alert("error de contraseña");
    }
} 
if (form.user.value=="Andres")
    { if (form.contra.value=="456"){
          location="user2.html";  
        } else {
        alert("error de contraseña");
    }
} 
if (form.user.value=="Paco")
    { if (form.contra.value=="789"){
          location="user3.html";  
        } else {
        alert("error de contraseña");
    }
} 
}

function togglePistas() {
    var box = document.getElementById("pistas-box");
    if (box.style.display === "none") {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  }

function consulta() {
    var saldo = document.getElementById('saldot').value;
    var saldoSinSigno = saldo.replace('$', '').replace(',', ''); // Eliminar el signo de dolar y las comas
    var saldoMostrar = "$" + parseInt(saldoSinSigno).toLocaleString();
    document.getElementById('saldot').value = saldoMostrar;
    document.getElementById('saldot').style.display = 'block';
    document.getElementById('Ocultar').style.display = 'inline-block';
  }
  
  
  function ocultarSaldo() {
    document.getElementById('saldot').style.display = 'none';
    document.getElementById('Consulta').disabled = false;
    document.getElementById('Ocultar').style.display = 'none';
  }
  
  function deposito() {
    var monto = document.getElementById('montot').value;
    if (isNaN(monto)) {
        alert("El valor ingresado no es un número");
        return;
      }
    if (monto === "") { // verifica si el campo está vacío
        alert("Ingrese un monto para realizar un depósito");
        return;}
    var montoT = parseInt(monto.replace(/[^\d]/g, ''));
    var saldo = document.getElementById('saldot').value;
    var saldoT = parseInt(saldo.replace(/[^\d]/g, '').replace('$', ''));
    var result = saldoT + montoT;
    if (result > 990) {
      alert("El monto máximo para tu cuenta es de $990");
    } else {
      var saldoMostrar = "$" + result.toLocaleString();
      document.getElementById('saldot').value = saldoMostrar;
    }
    consulta();
  }
  
  function retiro() {
    var monto = document.getElementById('montot').value;
    if (isNaN(monto)) {
        alert("El valor ingresado no es un número");
        return;
      }
    if (monto === "") { // verifica si el campo está vacío
        alert("Ingrese un monto para realizar un retiro");
        return;}
    var montoT = parseInt(monto.replace(/[^\d]/g, ''));
    var saldo = document.getElementById('saldot').value;
    var saldoT = parseInt(saldo.replace(/[^\d]/g, '').replace('$', ''));
    var result = saldoT - montoT;
    if (result < 10) {
      alert("El monto mínimo para tu cuenta es de $10");
    } else {
      var saldoMostrar = "$" + result.toLocaleString();
      document.getElementById('saldot').value = saldoMostrar;
    }
    consulta();
  }