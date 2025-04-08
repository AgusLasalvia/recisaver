// components/GlobalView.tsx
import React, { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import Animated, {
	useAnimatedKeyboard,
	useAnimatedStyle,
} from "react-native-reanimated";

type GlobalViewProps = {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
};

const GlobalView: React.FC<GlobalViewProps> = ({ children, style }) => {
	const keyboard = useAnimatedKeyboard();

	const animatedStyles = useAnimatedStyle(() => ({
		transform: [{ translateY: -keyboard.height.value }],
	}));

	return <Animated.View style={[style, animatedStyles]}>{children}</Animated.View>;
};

export default GlobalView;
