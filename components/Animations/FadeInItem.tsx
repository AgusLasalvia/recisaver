import React, { useEffect } from 'react';
import Animated, {
	useSharedValue,
	useAnimatedStyle,
	withTiming,
	withDelay,
} from 'react-native-reanimated';

type Props = {
	children: React.ReactNode;
	style?: object;
};

const FadeInItem = ({ children, style }: Props) => {
	const opacity = useSharedValue(0);
	const translateY = useSharedValue(10);

	useEffect(() => {
		opacity.value = withDelay(500, withTiming(1, { duration: 150 }));
		translateY.value = withDelay(500, withTiming(0, { duration: 100 }));
	}, []);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}));

	return <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>;
};

export default FadeInItem;
