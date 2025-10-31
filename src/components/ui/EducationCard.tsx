'use client';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import Avatar from "@/components/ui/Avatar";

export interface EducationCardProps {
    school: string;
    degree: string;
    period: string;
    description?: string;
}

export default function EducationCard({ school, degree, period, description }: EducationCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`rounded-2xl border border-gray-600 bg-black/20 hover:bg-white/5 transition-all cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex justify-between items-center p-6">
                <div>
                    <a
                        href={"https://www.kent.ac.uk/"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center text-2xl font-semibold text-white transition-all  hover:underline"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {school}
                        <ExternalLink
                            className="ml-2 h-4 w-4 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </a>
                    <p className="text-sm text-grey-400 italic">{period}</p>
                </div>

                {isOpen ? (
                    <ChevronUp className="text-grey-300" />
                ) : (
                    <ChevronDown className="text-grey-300" />
                )}
            </div>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="flex justify-between items-center px-10 pb-6">
                            <div>
                                <p className="text-grey-300 text-lg">{degree}</p>
                                {description && (
                                    <p className="text-grey-400 mt-2">{description}</p>
                                )}
                            </div>
                            <Avatar
                                src="https://media.licdn.com/dms/image/v2/C4E0BAQFm0m0tHm7bsQ/company-logo_200_200/company-logo_200_200/0/1663777988087/university_of_kent_logo?e=1763596800&v=beta&t=80T-trzQdhUNbIoKNB3O6MnKL5bHWgyET-vzpAH-48w"
                                size={60}
                                border={true}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}