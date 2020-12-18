import IntervalCard from './IntervalCard';

const utilities = {
  eachIntervalNote(intervalNotes){
    return intervalNotes.map(note => {
      return <IntervalCard note={note} key={note._id}/> 
    })
  },
};

export default utilities;