module.exports = Backbone.Model.extend({
    url: 'api/student',
    initialize: function() {
        this.set('id', _.uniqueId('stu'))

    }
});
