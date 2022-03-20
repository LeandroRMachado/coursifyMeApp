import React from "react";
import { StatusBar } from 'expo-status-bar'

export function StatusBarHeader() {
  return(
    <StatusBar
      style="dark"
      translucent
      backgroundColor="transparent"
    />
  )
}