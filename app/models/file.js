import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  folder: DS.belongsTo(),
  size: DS.attr('number'),

  displaySize: Ember.computed('size', function(){
    if(this.get('size')){
      return `${this.get('size')}kb`;
    } else {
      return 'unknown size'
    }
  })
});
