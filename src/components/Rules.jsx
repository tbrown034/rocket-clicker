import React from "react";
import { motion } from "framer-motion";

function Rules() {
  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const rules = [
    "Welcome, brave explorer! Your interstellar journey begins on our blue planet, Earth. When you're ready to defy gravity, click the 'Launch' button and start your epic adventure.",
    "Traveling through space isn't a small feat! You'll be venturing further away, with your distance increasing by 1 kilometer every second. Just imagine, you're following the same path as Wall-E towards the vast unknown!",
    "Feeling adventurous? Give your spacecraft a speed boost! Much like Wall-E zipping through space with his fire extinguisher, the 'Booster' will give you a swift 10 kilometer sprint each time you click it.",
    "Along your journey, you'll hit important milestones. These aren't just fancy markers; they actually increase your spacecraft's speed! Keep going, and you'll be as fast as Dash from The Incredibles!",
    "Each milestone isn't just a badge of honor, but also a ticket to a 'Bonus Boost'! Think of them as your own bunch of helium balloons from Up, lifting you to cover more distance. Use them wisely!",
    "Curious about your next milestone? We've got you covered! Just head over to the 'Milestones' section. It's your guide to the galaxy, telling you about the fascinating events awaiting you on your cosmic journey. Remember, 'Adventure is out there!' - as they say in Up.",
    "Longing for home? If you wish to return to Earth and start your journey anew, click the 'Back' button. Don't worry, the space-time continuum will reset your distance, speed, and all your boosts, so you can relive the adventure all over again!",
  ].map((rule, i) => (
    <motion.li
      className="mb-4"
      key={i}
      variants={listItem}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      {rule}
    </motion.li>
  ));

  return (
    <motion.div
      className="px-8 py-6 mb-4 text-blue-700 bg-blue-400 rounded-lg shadow-md bg-opacity-90"
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.1 }}
    >
      <h2 className="mb-6 text-2xl font-bold">Journey Guide</h2>
      <motion.ul className="pl-5 text-lg list-disc">{rules}</motion.ul>
    </motion.div>
  );
}

export default Rules;
