"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { skills as allSkills } from "@/data/skills";

export default function SkillRotator() {
    const getRandomSkills = () =>
        allSkills.sort(() => 0.5 - Math.random()).slice(0, 4);

    const [skills, setSkills] = useState<string[]>(getRandomSkills());

    useEffect(() => {
        const timers: NodeJS.Timeout[] = [];

        skills.forEach((_, i) => {
            const updateSkill = () => {
                setSkills((prev) => {
                    const newSkills = [...prev];
                    let newWord;
                    do {
                        newWord = allSkills[Math.floor(Math.random() * allSkills.length)];
                    } while (newSkills.includes(newWord));
                    newSkills[i] = newWord;
                    return newSkills;
                });

                const nextDelay = Math.random() * (7000 - 3000) + 3000;
                timers[i] = setTimeout(updateSkill, nextDelay);
            };

            const initialDelay = Math.random() * (7000 - 3000) + 3000;
            timers[i] = setTimeout(updateSkill, initialDelay);
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
