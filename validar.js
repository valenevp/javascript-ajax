var alerta = "Seja Bem-Vindo";
  alert(alerta);

var tiposite = 0;
var desejados = 0;

var dateControl = document.querySelector('input[type="date"]');
  dateControl.value = '2022-10-03';

function carregarmapa() {
  var ponto = new google.maps.LatLng(41.1443657924901, -8.610909143506838);
  var opcoes = {
  zoom: 12,
  center: ponto,
  mapTypeId: google.maps.MapTypeId.ROADMAP};
  var m = new google.maps.Map(document.getElementById("mapa"), 
  opcoes); 
  var marca = new google.maps.Marker({ 
  position: ponto,
  map: m,
  title: "Porto"
  });
   
}    

//mapa//
function geo() {
  var geocoder = new google.maps.Geocoder();
  var direccao = $('#direccao').val();
  geocoder.geocode({'address': direccao}, 
function(results, status) {
  if (status == 'OK') {
  m.setCenter(results[0].geometry.location);
  var marker = newgoogle.maps.Marker({
  map: m,
  position: results[0].geometry.location  
});
  } else {
  alert('Morada não encontrada: ' + status);
}
});
}

//calculo//
function update() {
  var resultado = document.getElementById('resultado');
  var select = document.getElementById('pagina');
  var mes = Number(document.getElementById('mes').value);
  
  
  if(Number(select.value)==0){
    resultado.value = "";
  }
  else{
    if(mes>=4){
      resultado.value = (Number(select.value) + desejados)*0.8;//Desconto de 20%
    }
    else if(mes==3){
      resultado.value = (Number(select.value) + desejados)*0.85;//Desconto de 15%
    }
    else if(mes==2){
      resultado.value = (Number(select.value) + desejados)*0.9;//Desconto de 10%
    }
    else if(mes==1){
      resultado.value = (Number(select.value) + desejados)*0.95;//Desconto de 5%
    }
    else{
      resultado.value = Number(select.value) + desejados;//Sem Desconto
    }
  }

}
 
function add(_this){    
  var des = Number(_this.value);
 
  if(_this.checked){
    desejados = desejados + des;
  }else if(!_this.checked){
    desejados = desejados - des;
  }
  update();
  
}

function carregar() {
  var url = 'https://news.google.com/rss?hl=pt-PT&gl=PT&ceid=PT:pt-150';

$.ajax({

url:"https://api.rss2json.com/v1/api.json?rss_url=" + url,type: 'GET',success:

function (data) {objeto_json = eval(data);

var frase = "";
  for (i = 0; i < objeto_json.items.length; i++)
{
  frase = frase + "Título: <b>" +
  objeto_json.items[i].title + "</b><br/>";
  frase = frase +
  objeto_json.items[i].description + "<br/>";
}
$("#caixa").html(frase);
},

error: function (xhr, status) {
alert('Ocorreu um erro.');
}
});
}

//Enviar formulario//
function funcao()
{
alert("Formulário enviado com sucesso!");
}

//Apagar//
function clearForm() {
  document.getElementById("formulario").reset();
  document.getElementById("mensagem").value="";
  document.getElementById("date").value="";
}