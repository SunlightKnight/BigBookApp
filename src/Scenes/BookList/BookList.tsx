import { useNavigation } from "@react-navigation/native"
import { useTranslation } from "react-i18next"
import { Text, View } from "react-native"

export const BookList = () => {
  const navigation = useNavigation<any>()
  const { t } = useTranslation()
  
  return (
    <View style={{ padding: 10 }}>
      <Text>{t("book_list")}</Text>
    </View>
  )
}