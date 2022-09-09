import { useEffect, useState } from "react";

const getWindowDimensions = () => {
	const { innerWidth: width, innerHeight: height } = window;

	return {
		width,
		height,
	}
}

export const useIsMobile = () => {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		const handleResize = () => {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, [])

	return windowDimensions.width < 640;
}