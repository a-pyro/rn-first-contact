import Ionicons from '@expo/vector-icons/Ionicons'
import { type PropsWithChildren, useState } from 'react'
import { StyleSheet, TouchableOpacity, useColorScheme } from 'react-native'

import { Colors } from '@/constants/colors'

import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

export const Collapsible = ({
  children,
  title,
}: PropsWithChildren & { title: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const theme = useColorScheme() ?? 'light'

  return (
    <ThemedView>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.heading}
        onPress={() => {
          setIsOpen((value) => !value)
        }}
      >
        <Ionicons
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen ? (
        <ThemedView style={styles.content}>{children}</ThemedView>
      ) : null}
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
})
