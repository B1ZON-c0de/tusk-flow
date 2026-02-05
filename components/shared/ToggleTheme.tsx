"use client"

import { Checkbox } from "@/components/ui/checkbox";
import { useTheme } from "next-themes";

const ToggleTheme = () => {
  const { setTheme } = useTheme()
  const handleThemeChange = (isChecked: boolean) => {
    if (isChecked){
      setTheme("dark");
    } else{
      setTheme("light");
    }
  }
  return (
    <div className="flex justify-between items-center">
      <p className="text-muted-foreground">DARK MODE</p>
      <Checkbox
        defaultChecked
        onCheckedChange={ (isChecked) => handleThemeChange(isChecked) }
      />
    </div>
  )
}
export default ToggleTheme
