import PublicHeader from "@/components/public/PublicHeader"
import PublicFooter from "@/components/public/PublicFooter"
import CoursesListing from "@/components/public/CoursesListing"

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <CoursesListing />
      <PublicFooter />
    </div>
  )
}
