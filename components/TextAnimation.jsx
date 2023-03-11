import { motion } from "framer-motion";

const TextAnimation = () => {
  const textVariants = {
    hidden: {
      opacity: 0,
      x: "-100vw"
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        staggerChildren: 0.1,
        delay: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  const text = "Hi! It's just Esteban building";

  return (
    <motion.div className="flex justify-center" variants={textVariants} initial="hidden" animate="visible">
      {text.split("").map((char, index) => (
        <motion.h3 key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.h3>
      ))}
    </motion.div>
  );
};

export default TextAnimation;
