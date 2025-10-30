export interface EducationEntry {
    institution: string;
    degree: string;
    period: string;
    description?: string;
}

export const educationData: EducationEntry[] = [
    {
        institution: 'University of Kent',
        degree: 'BSc Computer Science',
        period: '2024 – 2028',
        description:
            'Currently pursuing a degree in Computer Science, focusing on software engineering, data structures, and web development. Involved in group projects and Java related coursework.',
    },
    {
        institution: 'College of Richard Collyer',
        degree: 'A-Levels in Maths, Geography, Music',
        period: '2022 – 2024',
        description:
            'Developed strong analytical and problem-solving skills while exploring programming fundamentals and building small web projects.',
    },
    {
        institution: 'Warden Park Secondary Academy',
        degree: '10 GCSEs',
        period: '2017 – 2022',
        description:
            'Completed GCSEs which included Maths, English and Computer Science.',
    },
];
