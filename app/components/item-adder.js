import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    startItemNaming(){
      this.set('isEditing', true)
    },
    save(){
      this.set('isEditing', false)

      let parent = this.get('parent');
      let itemType = this.get('itemType');

      let item = this.get('store').createRecord(itemType, {
        name: this.get('name')
      })
      if(itemType == 'file'){
        item.set('folder', parent);
      } else {
        item.set('parent', parent);
      }
      item.save();
      if(parent){
        parent.save();
      }
    }
  }
});
