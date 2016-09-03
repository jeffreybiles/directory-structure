import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  actions: {
    edit(){
      this.set('isEditing', true)
    },
    save(){
      this.set('isEditing', false);
      this.get('file').save();
    },
    delete(){
      this.get('file').destroyRecord();
    }
  }
});
