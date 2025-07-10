"use client"
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

interface AnimatedFadeUpProps {
    children: ReactNode;
    delay?: number;
}

const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.6,
        delay,
        ease: 'easeOut',
    },
    }),
};

const AnimatedFadeUp: React.FC<AnimatedFadeUpProps> = ({ children, delay = 0 }) => {
    const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    });

    return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
        custom={delay}
        className="transition-all"
        >
        {children}
        </motion.div>
    );
};

export default AnimatedFadeUp;