import React, { useEffect } from 'react';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withDelay,
} from 'react-native-reanimated';

type Props = {
	children: React.ReactNode;
	index: number;
	delayPerItem?: number;
};

const FadeInItemCascade = ({ children, index, delayPerItem = 100 }: Props) => {
	const opacity = useSharedValue(0);
	const translateY = useSharedValue(10);

	useEffect(() => {
		opacity.value = withDelay(
			index * delayPerItem,
			withTiming(1, { duration: 200 })
		);
		translateY.value = withDelay(
			index * delayPerItem,
			withTiming(0, { duration: 100 })
		);
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}));

	return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

export default FadeInItemCascade;
