import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Example: If using React Icons:
import { FaReact, FaPython, FaAws, } from 'react-icons/fa';
import { SiTerraform, SiDocker, SiGit, SiGithub } from 'react-icons/si';
// ...and so on

interface FlipCardProps {
    index: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
}

// Optionally, define a map of technology names to icons (React Icons, etc.)
const iconMap: Record<string, JSX.Element> = {
    React: <FaReact />,
    Python: <FaPython />,
    AWS: <FaAws />,
    Terraform: <SiTerraform />,
    Docker: <SiDocker />,
    Git: <SiGit />,
    Github: <SiGithub />,
    // ...
};

export const FlipCard: React.FC<FlipCardProps> = ({
    index,
    title,
    description,
    image,
    technologies,
}) => {
    const [isFlipped, setIsFlipped] = useState(false);

    // This controls the 3D flip. If isFlipped is true, rotate by 180 deg.
    // We'll use an inlined style for perspective and preserve-3d
    const containerVariants = {
        front: { rotateY: 0 },
        back: { rotateY: 180 },
    };

    // For the back and front faces, we can control visibility based on rotation:
    // - When front rotates beyond 90, it's hidden.
    // - When back rotates beyond 90, it's visible.
    // We'll do that with a bit of pointer-events trickery or clip it in the code.

    return (
        <div className="flip-card-wrapper max-w-[480px] w-full min-w-[320px]" style={{ height: '100%' }}>
            {/* Outer container with perspective */}
            <div
                className="relative w-full h-[500px]"
                style={{ perspective: 1000 }} // perspective for 3D effect
            >
                {/* The actual flipping card */}
                <motion.div
                    className="absolute w-full h-full transition-transform duration-700"
                    style={{
                        transformStyle: 'preserve-3d',
                    }}
                    animate={isFlipped ? 'back' : 'front'}
                    variants={containerVariants}
                >
                    {/* FRONT SIDE */}
                    <motion.div
                        className="absolute w-full h-full rounded-lg overflow-hidden"
                        style={{
                            backfaceVisibility: 'hidden',
                            border: `4px solid transparent`,
                            backgroundClip: 'padding-box',
                            // Create a "border" using a pseudo-element or an extra wrapper.
                            // One trick is to wrap the entire card in a container with the gradient background.
                        }}
                    >
                        {/* Gradient border using an extra wrapper or pseudo-element */}
                        <div
                            className="absolute inset-0 rounded-lg pointer-events-none -z-10"
                            style={{
                                background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${(index * 50 + 180) % 360
                                    }, 70%, 50%))`,
                                margin: '-4px',
                                borderRadius: 'inherit',
                            }}
                        />

                        {/* Front Content */}
                        <div className="flex flex-col h-full">
                            {/* Image set to fixed 320x320 */}
                            <div className="relative w-[320px] h-[320px] mx-auto my-4">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            </div>

                            {/* Title & More Details button */}
                            <div className="1 text-center">
                                <h1 className="text-xl font-semibold mb-2">{title}</h1>
                                <button
                                    onClick={() => setIsFlipped(true)}
                                    className="mt-2 px-4 py-2 text-white rounded bg-blue-600 hover:bg-blue-700"
                                >
                                    More Details
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* BACK SIDE */}
                    <motion.div
                        className="absolute w-full h-full bg-white rounded-lg p-4 flex flex-col"
                        style={{
                            backfaceVisibility: 'hidden',
                            rotateY: 180, // Keep back side inverted so we see it correctly on flip
                            border: `4px solid transparent`,
                        }}
                    >
                        {/* Gradient border wrapper for the back side */}
                        <div
                            className="absolute inset-0 rounded-lg pointer-events-none -z-10"
                            style={{
                                background: `linear-gradient(135deg, hsl(${(index * 50) % 360}, 70%, 50%), hsl(${(index * 50 + 180) % 360
                                    }, 70%, 50%))`,
                                margin: '-4px',
                                borderRadius: 'inherit',
                            }}
                        />

                        {/* Content wrapper that grows */}
                        <div className="flex-grow overflow-y-auto">
                            {/* Title & Description */}
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="mb-4">{description}</p>

                            {/* Technologies list in 2 columns */}
                            <div className="grid grid-cols-2 gap-2">
                                {technologies.map((tech) => (
                                    <div key={tech} className="flex items-center space-x-2">
                                        {/* If there's an icon match in iconMap, render it; else just fallback */}
                                        {iconMap[tech] ? iconMap[tech] : null}
                                        <span>{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Centered container for the close button */}
                        <div className="p-4 text-center">
                            <button
                                onClick={() => setIsFlipped(false)}
                                className="mb-4 px-4 py-2 text-white rounded bg-blue-600 hover:bg-blue-700"
                            >
                                Flip back
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};