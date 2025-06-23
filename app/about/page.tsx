import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import PublicHeader from "@/components/public/PublicHeader"
import PublicFooter from "@/components/public/PublicFooter"

const instructors = [
  {
    name: "Sarah Johnson",
    role: "Lead Web Development Instructor",
    image: "/placeholder.svg?height=200&width=200",
    bio: "8+ years of full-stack development experience at top tech companies",
  },
  {
    name: "Dr. Michael Chen",
    role: "Data Science Expert",
    image: "/placeholder.svg?height=200&width=200",
    bio: "PhD in Computer Science, former Google AI researcher",
  },
  {
    name: "Alex Rodriguez",
    role: "Mobile Development Specialist",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Senior mobile developer with 50+ published apps",
  },
  {
    name: "Emma Wilson",
    role: "UI/UX Design Lead",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Award-winning designer with 10+ years at design agencies",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PublicHeader />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">About CoderZonee</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize education and empower learners worldwide with high-quality, accessible,
            and practical skills training that transforms careers and lives.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              At CoderZonee, we believe that everyone deserves access to world-class education. Our platform connects
              passionate learners with expert instructors, creating an environment where knowledge flows freely and
              skills are developed through hands-on, practical experience.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We're committed to breaking down barriers to education by offering affordable, flexible, and comprehensive
              courses that fit into your busy lifestyle. Whether you're looking to advance your career, switch fields,
              or simply learn something new, we're here to support your journey.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Students learning together"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground">Students Enrolled</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Courses Available</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Expert Instructors</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Completion Rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Rest of the content remains the same but with CoderZonee name */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Expert Instructors</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from industry professionals who bring real-world experience to every lesson
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <Image
                    src={instructor.image || "/placeholder.svg"}
                    alt={instructor.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-semibold text-lg mb-2">{instructor.name}</h3>
                  <p className="text-primary font-medium mb-2">{instructor.role}</p>
                  <p className="text-sm text-muted-foreground">{instructor.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of students who have transformed their careers with CoderZonee
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Browse Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Become an Instructor
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <PublicFooter />
    </div>
  )
}
