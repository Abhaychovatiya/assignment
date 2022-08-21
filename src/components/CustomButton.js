import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { COLORS } from '../utils/colors';
import { FONTSIZES ,SIZES } from '../utils/sizes';

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor:COLORS.darkBlue,
     borderColor:COLORS.white,
     borderWidth:1,
     alignItems:"center",
    height:SIZES.xxl+20,
     width:SIZES.xxl+10,
  },
  appButtonText: {
      fontSize:FONTSIZES.xxl,
      color:COLORS.white,
  }
});
export default CustomButton;