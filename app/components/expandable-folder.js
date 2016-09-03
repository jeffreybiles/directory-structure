import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleExpansion(){
      this.toggleProperty('isExpanded')
    },
    edit(){
      this.set('isEditing', true);
    },
    save(){
      this.set('isEditing', false);
      this.get('folder').save();
    },
    destroy(){
      this.deleteWithChildren(this.get('folder'));
    }
  },
  deleteWithChildren(item){
    let folders = item.get('folders');
    folders.forEach((child)=>{
      this.deleteWithChildren(child);
    });
    let files = item.get('files');
    files.forEach((child)=>{
      child.destroyRecord();
    });
    // the children are promise-ing, so maybe do a RSVP.hash to make sure they're returned and then destroyRecord?
    // Record a portion first with current code and doing an error, then try the promise version
    item.destroyRecord();
  }
});
