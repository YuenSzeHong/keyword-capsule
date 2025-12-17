"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Laptop } from "lucide-react"

const cycle = (current: string | undefined) => {
  if (!current || current === "system") return "light"
  if (current === "light") return "dark"
  return "system"
}

export function ThemeSwitcher() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="outline" size="sm" aria-label="切换主题" className="min-w-24">
        <Laptop className="mr-2" /> 系统
      </Button>
    )
  }

  const label = theme === "system" ? "系统" : theme === "light" ? "浅色" : "深色"
  const Icon = theme === "system" ? Laptop : theme === "light" ? Sun : Moon

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label="切换主题"
      className="min-w-24"
      onClick={() => setTheme(cycle(theme))}
      title={`当前：${label}（点击切换）`}
    >
      <Icon className="mr-2" /> {label}
    </Button>
  )
}
