import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  files: DS.hasMany(),
  parent: DS.belongsTo('folder', {inverse: 'folders'}),
  folders: DS.hasMany('folder', {inverse: 'parent'}),

  folderSizes: Ember.computed('folders.@each.size', function(){
    return this.get('folders').map((folder)=>{
      return parseInt(folder.get('size') || 0);
    })
  }),
  foldersSize: Ember.computed.sum('folderSizes'),
  fileSizes: Ember.computed('files.@each.size', function(){
    return this.get('files').map((file)=>{
      return parseInt(file.get('size') || 0);
    })
  }),
  filesSize: Ember.computed.sum('fileSizes'),
  size: Ember.computed('foldersSize', 'filesSize', function(){
    return parseInt(this.get('foldersSize')) + parseInt(this.get('filesSize'));
  })
});
