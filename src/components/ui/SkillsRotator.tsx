"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills as allSkills } from "@/data/skills";

export default function SkillRotator() {
    const SKILL_COUNT = 4;

    const [skills, setSkills] = useState<string[]>(() => allSkills.slice(0, SKILL_COUNT));

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        const getRandomSkillExcluding = (exclude: string[]) => {
            let candidate: string;
            do {
                candidate = allSkills[Math.floor(Math.random() * allSkills.length)];
            } while (exclude.includes(candidate));
            return candidate;
        };

        const scheduleUpdate = (index: number, delay: number) => {
            const runUpdate = () => {
                setSkills((prev) => {
                    const next = [...prev];
                    next[index] = getRandomSkillExcluding(next);
                    return next;
                });

                const nextDelay = Math.random() * (7000 - 3000) + 3000;
                timers[index] = setTimeout(runUpdate, nextDelay);
            };
            timers[index] = setTimeout(runUpdate, delay);
        };

        Array.from({ length: SKILL_COUNT }, (_, index) => {
            const initialDelay = Math.random() * (7000 - 3000) + 3000;
            scheduleUpdate(index, initialDelay);
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="text-white/70">
            <p className="pt-2 text-2xl flex flex-wrap gap-x-1">
                Proficient in{" "}
                {skills.map((skill, i) => (
                    <AnimatePresence mode="wait" key={i}>
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.4 }}
                            className="inline-block text-white font-semibold"
                        >
                            {skill}
                            {i < skills.length - 1 && ", "}
                        </motion.span>
                    </AnimatePresence>
                ))}
            </p>
        </div>
    );
}
