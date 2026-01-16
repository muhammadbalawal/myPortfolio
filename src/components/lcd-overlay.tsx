"use client";

import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function LCDOverlay() {
    const [uniqueUsers, setUniqueUsers] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [fontVisible, setFontVisible] = useState(true);

    useEffect(() => {
        let userId = localStorage.getItem("userId");
        if (!userId) {
            userId = uuidv4();
            localStorage.setItem("userId", userId);
        }

        async function registerAndFetch() {
            try {
                setIsLoading(true);
                await fetch("/api/unique-views", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ userId }),
                });

                const res = await fetch("/api/unique-views");
                const data = await res.json();
                if (res.ok) setUniqueUsers(data.uniqueVisitors);
                else console.error("API error:", data.error);
            } catch (error) {
                console.error("Fetch/register error:", error);
            } finally {
                setIsLoading(false);
            }
        }

        registerAndFetch();
    }, []);

    return (
        <div className="absolute inset-0 pointer-events-none [container-type:inline-size]">
            {/* Pulsing Button - Center */}
            <button
                onClick={() => setFontVisible(!fontVisible)}
                className="absolute top-[51.8%] left-[51.3%] -translate-x-1/2 -translate-y-1/2 pointer-events-auto rounded-full border-2 border-black bg-transparent hover:opacity-80 transition-opacity animate-pulse-scale"
                style={{ 
                    width: 'clamp(24px, 2.4cqw, 40px)',
                    height: 'clamp(24px, 2.4cqw, 40px)',
                    borderWidth: 'clamp(1px, 0.15cqw, 2px)',
                }}
                aria-label="Toggle font visibility"
            />

            {/* Green LCD Display Background - Top Right */}
            <div 
                className="absolute top-[28%] right-[3%] bg-green-500/90 rounded-sm backdrop-blur-sm shadow-lg"
                style={{ 
                    paddingTop: 'clamp(4px, 0.6cqw, 8px)',
                    paddingBottom: 'clamp(4px, 0.6cqw, 8px)',
                    paddingLeft: 'clamp(8px, 1.2cqw, 16px)',
                    paddingRight: 'clamp(12px, 1.8cqw, 20px)',
                }}
            >
                <div className="flex flex-col items-end" style={{ gap: 'clamp(4px, 0.5cqw, 8px)' }}>
                    <p 
                        className={`text-black transition-opacity ${fontVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                            fontFamily: '"hd44780", monospace',
                            fontFeatureSettings: '"liga" off',
                            fontSize: 'clamp(10px, 1.2cqw, 14px)',
                        }}
                    >
                        Unique Users:
                    </p>
                    <p 
                        className={`text-black font-bold transition-opacity ${fontVisible ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                            fontFamily: '"hd44780", monospace',
                            fontFeatureSettings: '"liga" off',
                            fontSize: 'clamp(14px, 1.8cqw, 20px)',
                        }}
                    >
                        {isLoading
                            ? "..."
                            : uniqueUsers !== null
                            ? uniqueUsers.toString()
                            : "0"}
                    </p>
                </div>
            </div>
        </div>
    );
}
