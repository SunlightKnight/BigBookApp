import { useState } from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "../styles/colors"

type SimpleButtonProps = {
  title: string
  onButtonPress: () => void
}

export const SimpleButton = (props: SimpleButtonProps) => {
  const [isPressing, setIsPressing] = useState(false)

  return (
    <TouchableOpacity 
      activeOpacity={1} 
      onPress={props.onButtonPress}
      onPressIn={() => { setIsPressing(true) }}
      onPressOut={() => { setIsPressing(false) }}
      style={{
        ...style.button, 
        backgroundColor: isPressing ? colors.purple : colors.lightPurple,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text style={{color: colors.white, fontWeight: "bold"}}>{props.title}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 5,
    marginHorizontal: 30,
    marginVertical: 20
  }
})