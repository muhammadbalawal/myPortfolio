"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface CircuitSVGProps extends React.SVGProps<SVGSVGElement> {}

const CircuitSVG = ({ ...props }: CircuitSVGProps) => {
  const [uniqueUsers, setUniqueUsers] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [dots, setDots] = useState("...");

  const fetchData = async () => {
    let userId = localStorage.getItem("userId");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("userId", userId);
    }

    try {
      setIsLoading(true);
      setDots("...");
      
      // Animate dots while loading
      const dotInterval = setInterval(() => {
        setDots((prev) => {
          if (prev === "...") return ". ..";
          if (prev === ". ..") return ".. .";
          if (prev === ".. .") return "... ";
          return "...";
        });
      }, 400);

      await fetch("/api/unique-views", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const res = await fetch("/api/unique-views");
      const data = await res.json();
      if (res.ok) setUniqueUsers(data.uniqueVisitors);
      else console.error("API error:", data.error);
      
      clearInterval(dotInterval);
    } catch (error) {
      console.error("Fetch/register error:", error);
    } finally {
      setIsLoading(false);
      setDots("...");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1180}
      height={430}
      viewBox="0 0 2947 1075"
      className="w-full h-auto max-w-[90%] sm:max-w-full"
      style={{ overflow: "visible" }}
      {...props}
    >
      <image
        href="https://raw.githubusercontent.com/muhammadbalawal/myPortfolio/refs/heads/main/public/circuit.png"
        x={0}
        y={0}
        width={2947}
        height={1075}
        preserveAspectRatio="xMidYMid meet"
        style={{ pointerEvents: "none" }}
      />
      <rect
        x={2039}
        y={470}
        width={790}
        height={210}
        rx={20}
        fill="#8fb43a"
        stroke="#6f8f2a"
        strokeWidth={11}
      />
      <text
        id="lcd_data"
        x={2080}
        y={550}
        fontFamily="hd44780, monospace"
        fontSize={64}
        fill="#1f2a10"
        style={{
          fontFeatureSettings: '"liga" off',
        }}
      >
        <tspan x={2080} dy="0">Unique Users:</tspan>
        <tspan x={2080} dy="80" fontWeight="bold">
          {isLoading
            ? dots
            : uniqueUsers !== null
            ? uniqueUsers.toString()
            : "0"}
        </tspan>
      </text>
      <g>
        <defs>
          <filter id="buttonShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.25"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="buttonGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <style>
            {`
              @keyframes ripple {
                0% {
                  transform: scale(1);
                  opacity: 0.8;
                }
                100% {
                  transform: scale(2.5);
                  opacity: 0;
                }
              }
              .continuous-ripple {
                transform-origin: 1580px 610px;
                animation: ripple 2s ease-out infinite;
              }
              .continuous-ripple-delay-1 {
                transform-origin: 1580px 610px;
                animation: ripple 2s ease-out infinite;
                animation-delay: 0.5s;
              }
              .continuous-ripple-delay-2 {
                transform-origin: 1580px 610px;
                animation: ripple 2s ease-out infinite;
                animation-delay: 1s;
              }
            `}
          </style>
        </defs>
        {/* Button shadow */}
        <circle
          cx={1580}
          cy={612}
          r={isPressed ? 38 : isHovered ? 42 : 40}
          fill="rgba(0, 0, 0, 0.15)"
          style={{
            pointerEvents: "none",
            transition: "all 0.3s ease",
            filter: "blur(3px)",
          }}
        />
        {/* Main button circle - hollow */}
        <circle
          cx={1580}
          cy={610}
          r={isPressed ? 38 : isHovered ? 42 : 40}
          fill="none"
          stroke={isHovered ? "#fff" : "#fff"}
          strokeWidth={isPressed ? 2.5 : isHovered ? 3 : 2.5}
          style={{
            cursor: "pointer",
            pointerEvents: "all",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            filter: isHovered ? "url(#buttonGlow)" : "url(#buttonShadow)",
          }}
          onClick={() => fetchData()}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
        />
        {/* Center dot indicator */}
        <circle
          cx={1580}
          cy={610}
          r={isPressed ? 4 : isHovered ? 5 : 4}
          fill="#fff"
          style={{
            pointerEvents: "none",
            transition: "all 0.3s ease",
            opacity: isHovered ? 1 : 0.8,
          }}
        />
        {/* Continuous ripple effects */}
        <circle
          cx={1580}
          cy={610}
          r={40}
          fill="none"
          stroke="#8fb43a"
          strokeWidth={5}
          className="continuous-ripple"
          style={{
            pointerEvents: "none",
          }}
        />
        <circle
          cx={1580}
          cy={610}
          r={40}
          fill="none"
          stroke="#8fb43a"
          strokeWidth={5}
          className="continuous-ripple-delay-1"
          style={{
            pointerEvents: "none",
          }}
        />
        <circle
          cx={1580}
          cy={610}
          r={40}
          fill="none"
          stroke="#8fb43a"
          strokeWidth={5}
          className="continuous-ripple-delay-2"
          style={{
            pointerEvents: "none",
          }}
        />
      </g>
    </svg>
  );
};

export default CircuitSVG;
