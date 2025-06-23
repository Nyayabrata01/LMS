import PublicHeader from "@/components/public/PublicHeader"
import PublicFooter from "@/components/public/PublicFooter"
import CourseDetail from "@/components/public/CourseDetail"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <CourseDetail courseId={params.id} />
      <PublicFooter />
    </div>
  )
}
