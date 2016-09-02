import Ember from 'ember';

export default Ember.Controller.extend({
  rootFolders: Ember.computed.filterBy('model', 'parent.content', null),
  actions: {
    saveItem(itemType, name, parent){
      let item = this.store.createRecord(itemType, {
        name: name
      })
      if(itemType == 'file'){
        item.set('folder', parent);
      } else {
        item.set('parent', parent);
      }
      item.save();
      parent.save();
    }
  }
});
