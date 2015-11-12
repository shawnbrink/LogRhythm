module.exports = Backbone.Collection.extend({
    url: 'api/student',

    initialize: function() {
        var _this = this;
        this.fetch({
            success: function(resp) {
                _this.trigger('add-student');
            }

        });

    },

    saveModel: function(savemodel) {


        var _this = this;
        _this.add(savemodel);
        console.log(this);
        savemodel.save({}, {
            type: 'post'
        })

        this.trigger('add-student');



    },

    updateModel: function(upmodel) {
        upmodel.save({}, {
            type: 'put'
        })



    },

    removeModel: function(removemodel) {

        removemodel.save({}, {
            type: 'delete'
        })
        this.remove(removemodel);
        this.trigger('add-student');


    },




});
