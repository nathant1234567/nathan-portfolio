'use client';
import React from 'react';

export const BlackBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen bg-[#06090a] text-white">
            <div
                aria-hidden="true"
                className="min-h-screen pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(88,154,183,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(181,131,255,0.2),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(88,166,151,0.8),transparent_65%)] opacity-60"
            />
            <div aria-hidden="true" className=" relative">
                {children}
            </div>
        </div>
    );
};


// <div className="min-h-screen bg-nice-black text-white ">
//     {children}
// className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(88,154,183,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(181,131,255,0.2),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(88,166,151,0.8),transparent_65%)] opacity-60"
//
// 'use client';
// import React from 'react';
//
// export const BlackBackground = ({ children }: { children: React.ReactNode }) => {
//     return (
//         <div className="relative min-h-screen overflow-x-hidden bg-[#06090a] text-white">
//             <div
//                 aria-hidden="true"
//                 className=" min-h-screen pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(88,154,183,0.12),transparent_55%),radial-gradient(circle_at_80%_10%,rgba(181,131,255,0.2),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(88,166,151,0.8),transparent_65%)] opacity-60"
//             />
//             <div aria-hidden="true" className=" relative">
//                 {children}
//             </div>
//         </div>
//     );
// };
