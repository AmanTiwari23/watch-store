import * as React from "react"
import { cn } from "../../lib/utils"

export function Card({ className, ...props }) {
  return (
    <div className={cn("rounded-xl border bg-white shadow", className)} {...props} />
  )
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={cn("border-b p-4 font-semibold", className)} {...props} />
  )
}

export function CardTitle({ className, ...props }) {
  return (
    <h2 className={cn("text-lg font-bold leading-none", className)} {...props} />
  )
}

export function CardContent({ className, ...props }) {
  return <div className={cn("p-4", className)} {...props} />
}