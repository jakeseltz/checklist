'use strict';

/**
 * @ngdoc function
 * @name prodCheckApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the prodCheckApp
 */
angular.module('prodCheckApp')
  .controller('MainCtrl', function ($scope,ngDialog,$firebase) {


  	var ref = new Firebase("https://checklister.firebaseio.com/");
    // create an AngularFire reference to the data
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.data = sync.$asObject();
	


 

    $scope.todos = [
	   {simpleDesc: "Sample Project", 

	   list:[{item: "sample task", done:"false"}],
	   
	   toggle:false,
	   optionMenu:false
	}]
  

    $scope.addTodo = function(){

    	$scope.todos.push({simpleDesc: $scope.todo, 
    		list:[{item: "sample task",done:'false'}], 
    		toggle:false,
    		optionMenu:false

    	});

    	$scope.todo = '';	
    }

    $scope.completeCount = function(todo){
    	
    	var dones = [];
    	var d = {};

    	for(var i = 0; i < todo.list.length; i++){
    		 if(todo.list[i].done !== "false"){
    		 	dones.push(todo.list[i].done)
    		 }
    	}

    	d = (dones.length / todo.list.length) * 100;



    	/*if(d <= 40){
    		todo.progressColorCode = 'warning';
    	} else if(100 > d  && d > 40){
    		todo.progressColorCode = 'info';
    	} else if(d === 100){
    		todo.progressColorCode = 'success';
    	} */

    	return d
    }


    $scope.removeTodo = function(index){
    	 $scope.todos.splice(index, 1);

    }

    $scope.addItem = function(todo,task){
    	todo.list.push({item:task,done:'false'});
    	todo.list.item = '';
    	
    }

    $scope.itemCheck = function(task){
    	if(task.done === true){
    		task.done = false
    	} else{
    		task.done = true;
    	}

    }

    $scope.toggler = function(todo){
    	if(todo.toggle === true){
    		todo.toggle = false
    	} else if(todo.toggle === false){
    		todo.toggle = true;
    	}

    };

    $scope.optionMenuShow = function(todo){
    	if(todo.optionMenu === true){
    		todo.optionMenu = false
    	} else if(todo.optionMenu === false){
    		todo.optionMenu = true;
    	}

    };
 
    $scope.removeItem = function(todo,index){
    	 todo.list.splice(index,1);
    }



    /* ngDialog stuff */



  })


