// Rules.jsx
import React from "react";

function Rules() {
  return (
    <div className="px-8 pt-6 pb-8 mb-4 rounded shadow-md">
      <h2 className="mb-6 text-2xl font-bold">Game Rules</h2>
      <ul className="pl-5 text-lg list-disc">
        <li className="mb-4">
          Your journey begins by launching your rocket. Click the 'Launch'
          button to start your mission.
        </li>
        <li className="mb-4">
          As you travel, your distance will increase by 1 kilometer every
          second.
        </li>
        <li className="mb-4">
          Increase your distance more rapidly by using the 'Booster'. This gives
          you an extra 10 kilometers each time you click it.
        </li>
        <li className="mb-4">
          As you reach certain milestones in your journey, your rocket's speed
          increases. Every time you reach a milestone, the speed of your rocket
          increases by 50%. These speed boosts will help you cover distance more
          rapidly.
        </li>
        <li className="mb-4">
          Each time you reach a milestone, you earn a 'Bonus Boost'. You can use
          these boosts to increase your distance by a certain amount. The amount
          of distance added depends on the milestone. Use them wisely!
        </li>
        <li className="mb-4">
          You can track the milestones you've reached in the 'Milestones'
          section. Each milestone tells you what significant event happened at a
          certain distance.
        </li>
        <li className="mb-4">
          If you wish to start your journey anew, click the 'Back' button. This
          will reset your distance, speed, and all your boosts.
        </li>
      </ul>
    </div>
  );
}

export default Rules;
