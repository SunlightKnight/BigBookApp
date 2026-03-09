import { useNavigation } from "@react-navigation/native"
import { useContext, useState } from "react"
import { useTranslation } from "react-i18next"
import { Alert, Text, View, FlatList } from "react-native"
import { BackendContext } from "../../Services/BackendProvider"

export const BookList = () => {
  const navigation = useNavigation<any>()
  const backendService = useContext(BackendContext)
  const { t } = useTranslation()

  
  const fetchBookList = () => {
    backendService?.beService.getBookList("").then((listResponse) => {

    }).catch((error) => {
      Alert.alert("Error fetching book list", error.message)
    })
  }

  return (
    <View style={{ padding: 10 }}>
      <Text>{t("book_list")}</Text>

    </View>
  )
}