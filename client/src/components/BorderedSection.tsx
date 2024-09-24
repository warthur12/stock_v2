import React, { useState, useEffect, ReactNode } from 'react';

interface BorderedSectionProps {
    label: string;
    children: ReactNode;
    className?: string; // Optional className prop to allow for width control
}

const BorderedSection: React.FC<BorderedSectionProps> = ({ label, children, className = "" }) => {
    return (
        <div className={`relative border-solid border-white border-1 p-2 ${className}`}>
            <span className="absolute top-[-10px] left-2 bg-black text-white px-1">{label}</span>
            {children}
        </div>
    );
};

export default BorderedSection