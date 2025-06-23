import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Clock, Globe, Headphones } from "lucide-react"

const benefits = [
  {
    icon: BookOpen,
    title: "Expert-Led Courses",
    description: "Learn from industry professionals with years of real-world experience",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a vibrant community of learners and get help when you need it",
  },
  {
    icon: Award,
    title: "Certificates",
    description: "Earn recognized certificates upon successful course completion",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to course materials",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access courses from anywhere in the world, anytime you want",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team",
  },
]

export default function Benefits() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose EduLearn?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best learning experience with features designed to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
