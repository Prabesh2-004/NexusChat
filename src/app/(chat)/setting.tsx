import { supabase } from '@/lib/supabase'
import { Button, StyleSheet, Text, View } from 'react-native'

const Setting = () => {
  const signout = () => {
    const { error } = supabase.auth.signOut()
    if(error) return;
  }
  return (
    <View>
      <Text>setting</Text>
      <Button title='Signout' onPress={signout} />
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})