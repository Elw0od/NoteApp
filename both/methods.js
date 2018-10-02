Meteor.methods({ 
    insertNote(title, description) { 
        Notes.insert({
            ownerId : this.userId,
            title : title,
            description : description,
            createdAt : new Date(),
        });
    },
    updateNote(noteId, title, description){
        Notes.update({_id: noteId},{
            $set:
            {
                title: title,
                description: description
            }
        });
    },
    removeNote(noteId){
        Notes.remove({_id: noteId});
    }
});