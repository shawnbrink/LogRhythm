var maintpl = require('../tpl/main.tpl');
var studenttpl = require('../tpl/student.tpl');
var statstpl = require('../tpl/stats.tpl');
var Model = require('../models/studentModel');
var Collection = require('../models/studentCollection');
module.exports = Backbone.View.extend({
     events: {
        "click .submitBtn":"formSubmit",
        'keydown #testScore': 'checkNumber',
        "click .close":"closeError",
        "click .list-group-item":"edit",
        "click .list-group-item button":"deleteStudent"
        },


    initialize: function(el){ 
      
        this.setElement(el.el)
        this.collection = new Collection();

        this.listenTo(this.collection,'add-student',this.addStudent);
        this.listenTo(this.collection,'delete-student',this.deleteStudent);
       

    	this.render();
    },
    render: function(){ 
    	this.$el.html(maintpl);
          

    },
    closeError:function(){
        $("#error").addClass('hide')
    },
    

    formSubmit:function(evt){
        var textBox =  $.trim( $('input[type=text]').val() );

        if (textBox === "") {
            this.error = $("#error").removeClass('hide');
            }else if(this.error){

            $("#error").addClass('hide')
            this.error = false;
        }
        var form = $('#studentForm');
        var data = $(form).serializeArray();

       

        var parsedData = _.object(_.map(data, _.values));
        console.log(parsedData);
        
        if(!this.error){
            var student = new Model();



            student.set(parsedData);
         var setInit = parseInt(student.get('testscore'));
            if(setInit >= 65){

                student.set('classgrade','pass');
              }else{
                student.set('classgrade','fail');

              }
            this.collection.saveModel(student);
          
            $(form).find("input[type=text]").val("");
            $(form).find("input[type=number]").val("");
        }
    },
    edit:function(e){
        var bool = false;

        if(!bool){
            bool = true;
            var id = $(e.currentTarget).attr("data-id");
            var model = this.collection.get(id);
            var first = id+'first';
            var last = id+'last'
            var score = id+'score'
            
          
            $('#'+first).editable('click', function(e){
              model.set('firstname',e.value);
            });

            $('#'+last).editable('click', function(e){
              model.set('lastname',e.value);
            });

             $('#'+score).editable('click', function(e){

                if(e.value == ""){
                    e.value = "0"

                }
              model.set('testscore',e.value);

           
              if(e.value >= 65){

                model.set('classgrade','pass');
              }else{
                model.set('classgrade','fail');

              }
            });

            if(model){
                 if(model.hasChanged('firstname')){
                 this.collection.updateModel(model)
                 this.addStudent();
                 this.renderStats();
                    }
                    if(model.hasChanged('lastname')){
                 this.collection.updateModel(model)
                 this.addStudent()
                 this.renderStats();
                    }
                      if(model.hasChanged('testscore')){
                 this.collection.updateModel(model)
                 this.addStudent()
                 this.renderStats();
                    }
                      if(model.hasChanged('classgrade')){
                 this.collection.updateModel(model)
                 this.addStudent()
                 this.renderStats();
                    }
            }

            

            bool = false;
        }
    },


    
    checkNumber:function(evt){


        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;


    },

   	addStudent:function(){

       
        var list = $(this.$el).find('#studentList');
        var data = this.collection.toJSON();
    
        var html = studenttpl(data);
        this.renderStats();
   
        list.html(html);

    },

    deleteStudent:function(e){
        var id = $(e.currentTarget).attr("data-id");
       var model = this.collection.get(id);
       this.collection.removeModel(model);
       this.collection.remove(model);
       var list = $(this.$el).find('#studentList');
        var data = this.collection.toJSON();
    
        var html = studenttpl(data);
        this.renderStats();
        
        list.html(html);

    },

    renderStats:function(){
        var statsModel = new Model({
            defaults: {
                minval:0,
                maxval:0,
                avgval:0
            }

        });
        var json = this.collection.toJSON();
     
        var min = _.min(json,function(item) {
            return parseInt(item.testscore);
        });
         var max = _.max(json,function(item) {
            return parseInt(item.testscore);
        })


       
        var avg = this.collection.reduce(function(memo, value) { 
            return memo + parseInt(value.get("testscore")) 
        }, 0)/ this.collection.length;

        var parseMax = parseInt(max.testscore);
        var parseMin = parseInt(min.testscore);
        var parseAvg = parseInt(avg);
       
        if(isNaN(parseMax)){
             parseMax = 0;
        }
         if(isNaN(parseMin)){
             parseMin = 0;
        }
         if(isNaN(parseAvg)){
             parseAvg = 0;
        }

       statsModel.set({'minval':parseMin,'maxval':parseMax,'avgval':parseAvg})
         var statsHtml = $(this.$el).find('#stats');
         var data = statsModel.toJSON();
        var html = statstpl(data);
        statsHtml.html(html);

    }

});