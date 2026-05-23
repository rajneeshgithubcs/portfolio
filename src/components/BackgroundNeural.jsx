import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

const NeuralNode = ({ x, y }) => (
    <motion.circle
        cx={x}
        cy={y}
        r="1.5"
        fill="#ef4444"
        initial={{ opacity: 0.2 }}
        animate={{
            opacity: [0.2, 0.8, 0.2],
            r: [1.5, 2.5, 1.5]
        }}
        transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    />
);

const NeuralLine = ({ p1, p2 }) => (
    <motion.line
        x1={p1.x}
        y1={p1.y}
        x2={p2.x}
        y2={p2.y}
        stroke="#ef4444"
        strokeWidth="0.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.2, 0]
        }}
        transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "linear"
        }}
    />
);

export default function BackgroundNeural() {
    const nodes = useMemo(() => {
        return Array.from({ length: 40 }).map(() => ({
            x: Math.random() * 1000,
            y: Math.random() * 1000,
        }));
    }, []);

    const lines = useMemo(() => {
        const l = [];
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dist = Math.sqrt(
                    Math.pow(nodes[i].x - nodes[j].x, 2) +
                    Math.pow(nodes[i].y - nodes[j].y, 2)
                );
                if (dist < 150) {
                    l.push({ p1: nodes[i], p2: nodes[j] });
                }
            }
        }
        return l;
    }, [nodes]);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <svg viewBox="0 0 1000 1000" className="w-full h-full preserve-3d">
                <defs>
                    <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* Animated Lines */}
                {lines.map((line, i) => (
                    <NeuralLine key={`line-${i}`} p1={line.p1} p2={line.p2} />
                ))}

                {/* Glowing Nodes */}
                {nodes.map((node, i) => (
                    <NeuralNode key={`node-${i}`} x={node.x} y={node.y} />
                ))}
            </svg>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        </div>
    );
}
