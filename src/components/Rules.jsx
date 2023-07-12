import React from "react";

function Rules() {
  const rules = [
    {
      heading: "Welcome, Adventurer!",
      description:
        "Your epic space journey begins here. Click 'Launch' to start.",
    },
    {
      heading: "How to Play",
      instructions: [
        "Travel 1 km every second. You're on an exciting path!",
        "Use the 'Booster' for a quick 10 km sprint. Zoom ahead!",
        "Reach milestones to increase your speed. Faster and faster you go!",
        "Milestones give 'Bonus Boosts'. Use them wisely for a speed surge!",
        "Check the 'Milestones' section to see what exciting event awaits next.",
        "Click 'Back' to return to Earth and start your journey anew.",
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-4 text-white bg-blue-700 rounded-2xl">
      <h2 className="text-2xl font-bold underline">Journey Guide</h2>
      {rules.map((rule, i) => (
        <div className="flex flex-col gap-1" key={i}>
          <h3 className="text-lg font-semibold">{rule.heading}</h3>
          <p className="text-sm">{rule.description}</p>
          {rule.instructions && (
            <ul className="pl-5 list-disc list-inside">
              {rule.instructions.map((instruction, j) => (
                <li key={j} className="py-1 text-sm">
                  {instruction}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default Rules;
