// components/CustomBottomSheet.tsx

import React, { ReactNode, useMemo, forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

type CustomBottomSheetProps = {
  children: ReactNode;
  snapPoints?: (string | number)[];
};

const CustomBottomSheet = forwardRef<BottomSheetMethods, CustomBottomSheetProps>(
  ({ children, snapPoints = ['25%', '50%'] }, ref) => {
		
    const memoizedSnapPoints = useMemo(() => snapPoints, [snapPoints]);

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={memoizedSnapPoints}
        enablePanDownToClose
        backgroundStyle={styles.sheetBackground}
      >
        <View style={styles.contentContainer}>{children}</View>
      </BottomSheet>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 20,
		backgroundColor: '#161616',
  },
  sheetBackground: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    backgroundColor: '#fff',
  },
});

export default CustomBottomSheet;
