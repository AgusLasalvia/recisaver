// components/FloatingImage.tsx
import React, { useEffect } from "react";
import { ImageSourcePropType, ImageStyle, StyleProp } from "react-native";
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withRepeat,
	withTiming,
	Easing,
} from "react-native-reanimated";

type FloatingImageProps = {
	source: ImageSourcePropType;
	style?: StyleProp<ImageStyle>;
	resizeMode?: "cover" | "contain" | "stretch" | "repeat" | "center";
	offset?: number;
	duration?: number;
};

const FloatingImage: React.FC<FloatingImageProps> = ({
	source,
	style,
	resizeMode = "contain",
	offset = 10,
	duration = 1500,
}) => {
	const floatY = useSharedValue(0);

	useEffect(() => {
		floatY.value = withRepeat(
			withTiming(-offset, {
				duration,
				easing: Easing.inOut(Easing.ease),
			}),
			-1,
			true
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateY: floatY.value }],
		};
	});

	return (
		<Animated.Image
			source={source}
			style={[style, animatedStyle]}
			resizeMode={resizeMode}
		/>
	);
};

export default FloatingImage;
