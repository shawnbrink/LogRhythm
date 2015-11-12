



module.exports = Backbone.Collection.extend({
    url: 'api/student',
   
    initialize: function() {
    	var _this = this;
    	this.fetch({
            success: function(resp){
            	_this.trigger('add-student');
            }
          
        });

    },

    saveModel:function(model){
    	model.set('id', _.uniqueId('stu'));
    	var _this = this;
    	_this.add(model);
    	model.save({}, { 
    	type: 'post'
		})

    	this.trigger('add-student');
    	
		

    },

    updateModel:function(model){
    	model.save({}, { 
    	type: 'put'
		})
    	
	

    },

     removeModel:function(model){
     	debugger
     	model.save({}, { 
    	type: 'delete' 
		})
    	this.remove(model);
    	this.trigger('add-student');
	

    },



   
});