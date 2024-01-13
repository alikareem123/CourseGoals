import React, {useState} from 'react';

import GoalsList from './Components/GoalList/GoalsList';
import NewGoal from './Components/NewGoal/NewGoal';


const App = () => {
  let [courseGoals, setCourseGoals] = useState( [
    {id:'g1', text: 'Finish the course'},
    {id: 'g2', text: 'Learn all the topic'},
    {id: 'g3', text: 'Build a solid learning foundation'}
  ])

  const addNewGoalHandler = NewGoal =>{
    // setCourseGoals(courseGoals.concat(NewGoal));
    setCourseGoals((prevCourseState) =>{
      prevCourseState.concat(NewGoal);
    })
  }

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalsList Goals={courseGoals}/>
    </div>
  );
}

export default App;
