import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  files: DS.hasMany(),
  parent: DS.belongsTo('folder', {inverse: 'folders'}),
  folders: DS.hasMany('folder', {inverse: 'parent'})
});
