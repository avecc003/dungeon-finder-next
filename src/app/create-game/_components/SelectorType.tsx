import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectType() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a  vibe for your game"/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="Casual">Casual</SelectItem>
          <SelectItem value="Competitive">Competitive</SelectItem>
          <SelectItem value="Serious Casual">Serious Casual</SelectItem>
          <SelectItem value="LARP"> LARP </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
