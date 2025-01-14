import { useDispatch,useSelector } from "react-redux";
import {nanoid} from "@reduxjs/toolkit";


import { notesSlice } from "./NotesSlice";
import {noteSelectors} from './NotesSlice';

const Notes = () => {

  const notes = useSelector(noteSelectors.selectAll);

  const dispatch = useDispatch();

 


  //Edit Notes
  function pushNote(e) {

    e.preventDefault();

    //Update Notes
    dispatch(notesSlice.actions.addNote({
      content:e.target.previousElementSibling.value,
      id:nanoid()
    }));

    //Clear Input Value
    e.target.previousElementSibling.value = '';

  }

  function removeNote(id) {

    // console.log ('remove fils de pute', id);

    dispatch(notesSlice.actions.removeNote(id));

  }






  return(
    <> 
    <section className="Notes infos">

      <h2>Notes pour la commande</h2>
      
      <form action="#" id="note">
         <textarea name="note" className="inputs" placeholder="Notes de commande" resize="none" />
         <button type="submit" className="btn submiter" onClick={(e) => pushNote(e)}>Enregistrer notes</button>

      </form>
      
      <ul className="notes-list">
        {notes ? (
          notes.map((note) => (
            <li key={note.id} data-id={note.id}>
              {note.content}
              <button className="btn remove" onClick={() => removeNote(note.id)}>❌ Supprimer</button>
            </li>
          ))
        ) : (
          <li>Notes non disponibles</li>
        )}
</ul>
      
    </section>   
  
    </>
  )
}
export default Notes