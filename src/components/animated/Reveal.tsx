import { FC, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

type RevealProps = {
  children: JSX.Element;
  className?: string;
  width: "fit-content" | "100%";
};

const Reveal: FC<RevealProps> = ({
  children,
  className,
  width = "fit-content",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div
      ref={ref}
      style={{ width, overflow: "hidden", position: "relative" }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial={"hidden"}
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial={"hidden"}
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="absolute top-4 bottom-4 left-0 right-0 z-50 bg-[#6953a1]"
      />
    </div>
  );
};

export default Reveal;
