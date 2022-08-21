// Globle imports 
import { StyleSheet } from 'react-native';

//file imports
import {COLORS} from '../../utils/colors';
import {FONTSIZES , SIZES } from '../../utils/sizes';

export default Styles = StyleSheet.create({
   container : {
    flex: 1,
    backgroundColor:COLORS.darkBlue,
    paddingHorizontal:SIZES.md
  },
  searchcontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:SIZES.xxl
  },
  textinput:{
    flex:1,
    marginRight:SIZES.lg,
   }, 
   buttonstyle:{
    backgroundColor:COLORS.darkBlue,
    borderColor:COLORS.white,
    borderWidth:1,
    alignItems:"center",
    height:SIZES.xxl+20,
    width:SIZES.xxl+10,
  },
  buttontext:{
     color:COLORS.white,
     fontSize:FONTSIZES.xxl
   },
  itemstyle: {
    borderBottomColor:COLORS.gray,
    borderBottomWidth:SIZES.sm/4,
    marginVertical:SIZES.sm,
  },
  title: {
    fontSize:FONTSIZES.xl,
    color:"white",
  },
})