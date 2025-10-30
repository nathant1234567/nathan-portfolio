'use client';
import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import {ChevronDown, ChevronUp} from "lucide-react";

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
                    <h3 className="text-2xl font-semibold">{school}</h3>
                    <p className="text-sm text-grey-400 italic">{period}</p>
                </div>
                {isOpen ? (
                    <ChevronUp className="text-grey-300" />
                ) : (
                    <ChevronDown className="text-grey-300" />
                )}
            </div>
        </div>
    )
}