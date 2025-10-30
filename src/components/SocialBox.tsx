'use client';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';
import { MdMailOutline } from "react-icons/md";

interface SocialBoxProps {
    className?: string;
}

export default function SocialBox({ className = "" }: SocialBoxProps) {
    const socials = [
        { name: 'GitHub', icon: <FaGithub size={24} />, link: 'https://github.com/nathant1234567' },
        { name: 'LinkedIn', icon: <FaLinkedin size={24} />, link: 'https://www.linkedin.com/in/nathan-t-30903518a/' },
        { name: 'Instagram', icon: <FaInstagram size={24} />, link: 'https://www.instagram.com/nahannn.n/' },
        { name: 'Email', icon: <MdMailOutline size={24} />, link: 'mailto:nathanthompson256@outlook.com' },
    ];

    return (
        <div
            className={`rounded-2xl border border-gray-500 bg-black/10 p-3 flex flex-col items-start gap-4 ${className}`}
        >
            <div className="flex flex-wrap gap-4">
                {socials.map(({ name, icon, link }) => (
                    <a
                        key={name}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-600 hover:border-white hover:bg-white/10 transition-colors duration-200"
                    >
                        {icon}
                        <span>{name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
