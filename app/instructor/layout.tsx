import type React from "react"
import InstructorSidebar from "@/components/instructor/InstructorSidebar"
import InstructorHeader from "@/components/instructor/InstructorHeader"

export default function InstructorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <InstructorSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <InstructorHeader />
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  )
}
