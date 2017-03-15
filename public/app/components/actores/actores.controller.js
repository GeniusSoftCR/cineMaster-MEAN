/*Actores*/
'use strict';
angular.module('cineApp').controller('actoresCtrl', actorController);

function actorController ($http, $location, $timeout, actoresService, ImageService, Upload) {
  var actoresCtrl = this;

  actoresCtrl.actores = actoresService.obtener();
  function init() {
    //cargar actores
  }

  this.traerActores = function() {
    actoresCtrl.actores = actoresService.obtener();
  };

  this.registrarActor = function () {
    actoresCtrl.loading = true;
    actoresCtrl.errorMsg = false;
    //localhost:3000/api/peliculas/crear
    //1ro: invoca la función de crear nuevo actor
    //2do: si el resultado es "positivo" muestra mensanje de exito y limpia el formulario
    //3ro: si el resultado es "negativo" muestra mensaje de fracaso
    actoresService.crear(actoresCtrl.actorData).then(function(info){
      if(info.data.success) {
        actoresCtrl.loading = false;
        //creamos success
        actoresCtrl.successMsg = info.data.message;
        actoresCtrl.actorData.nombre = null;
        actoresCtrl.actorData.ape1 = null;
        actoresCtrl.actorData.ape2 = null;
        actoresCtrl.actorData.premios = null;
        actoresCtrl.actorData.fechaNac = null;
        actoresCtrl.actorData.image = null;
      } else {
        console.log(info);
        actoresCtrl.loading = false;
        //create error message
        actoresCtrl.errorMsg = info.data.message;
      }
    });
  };

  this.consultarActor = function () {
    //primero se cargan los actores persistidos en el modelo
    traerActores();
  };

  this.modificarActor = function () {
    //penndiente
  };
  
}