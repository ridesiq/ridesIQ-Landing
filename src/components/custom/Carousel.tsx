"use client"
import React from "react";
import { motion } from "framer-motion";

const logos = [
	{
		Element:<h1 className="text-red-500">hello world</h1>,
	},
	{
		Element: <h1 className="text-4xl"> hello bb? </h1>,
	},
	{
		Element: "Prime",
	},
	{
		Element: "Trustpilot",
	},
	{
		Element: "Webflow",
	},
	{
		Element: "Vercel",
	},
	{
		Element: "Nextjs",
	},
	{
		Element: "Prime",
	},
	{
		Element: "Trustpilot",
	},
	{
		Element: "Webflow",
	},
	{
		Element: "Vercel",
	},
	{
		Element: "Nextjs",
	},
	{
		Element: "Prime",
	},
	{
		Element: "Trustpilot",
	},
	{
		Element: "Webflow",
	},
	{
		Element: "Vercel",
	},
	{
		Element: "Nextjs",
	},
	{
		Element: "Prime",
	},
	{
		Element: "Trustpilot",
	},
	{
		Element: "Webflow",
	},
];

const AnimatedLogoCloud = () => {
	return (
		<div className="w-full py-12 bg-black text-white">
			<div className="mx-auto w-full px-4 md:px-8">
				<div
					className="group relative mt-6 flex gap-6 overflow-hidden p-2"
					style={{
						maskImage: "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
					}}
				>
					{[1, 2, 3, 4, 5].map((index) => (
						<motion.div
							key={index}
							className="flex shrink-0 flex-row justify-around gap-20"
							animate={{
								x: [0, "-100%"],
								transition: {
									duration: 30,
									ease: "linear",
									repeat: Infinity,
									delay: (index - 1) * 12,
								},
							}}
						>
                            {logos.map((Componts, key) => (
                                <div className="flex items-center justify-center w-40 h-96  " key={key}>
                                    {Componts.Element}
                                </div>
							))}
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AnimatedLogoCloud;
