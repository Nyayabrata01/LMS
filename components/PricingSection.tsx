"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, Rocket } from "lucide-react"

const pricingPlans = [
  {
    name: "Basic",
    price: 999,
    originalPrice: 1999,
    duration: "month",
    description: "Perfect for beginners starting their coding journey",
    icon: Star,
    popular: false,
    features: [
      "Access to 50+ basic courses",
      "Community support",
      "Basic project templates",
      "Mobile app access",
      "Certificate of completion",
      "Email support",
    ],
    subjects: ["HTML & CSS", "JavaScript Basics", "Python Fundamentals", "Git & GitHub"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Pro",
    price: 2499,
    originalPrice: 4999,
    duration: "month",
    description: "Most popular choice for serious learners",
    icon: Zap,
    popular: true,
    features: [
      "Access to 200+ courses",
      "Live coding sessions",
      "Advanced project portfolio",
      "1-on-1 mentorship (2 hours/month)",
      "Priority support",
      "Downloadable resources",
      "Job placement assistance",
      "Industry certifications",
    ],
    subjects: [
      "Full Stack Development",
      "React & Node.js",
      "Data Science & AI",
      "Mobile Development",
      "DevOps & Cloud",
      "System Design",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Enterprise",
    price: 4999,
    originalPrice: 9999,
    duration: "month",
    description: "For teams and organizations",
    icon: Crown,
    popular: false,
    features: [
      "Unlimited course access",
      "Custom learning paths",
      "Team analytics dashboard",
      "Dedicated account manager",
      "Custom integrations",
      "White-label solutions",
      "24/7 priority support",
      "Advanced reporting",
      "Bulk user management",
      "Custom content creation",
    ],
    subjects: [
      "Enterprise Architecture",
      "Advanced System Design",
      "Leadership & Management",
      "Custom Technology Stacks",
      "Security & Compliance",
      "Team Collaboration Tools",
    ],
    color: "from-amber-500 to-orange-500",
  },
]

const additionalSubjects = [
  {
    name: "Web Development Mastery",
    price: 1499,
    duration: "3 months",
    icon: Rocket,
    description: "Complete frontend and backend development",
    topics: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
  },
  {
    name: "Data Science & AI",
    price: 1999,
    duration: "4 months",
    icon: Zap,
    description: "Machine learning and data analysis",
    topics: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    name: "Mobile App Development",
    price: 1799,
    duration: "3 months",
    icon: Star,
    description: "iOS and Android app development",
    topics: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    name: "DevOps & Cloud Computing",
    price: 2199,
    duration: "3 months",
    icon: Crown,
    description: "Infrastructure and deployment automation",
    topics: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
]

export default function PricingSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            💰 Special Launch Offer - 50% Off
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Choose Your <span className="text-primary">Learning Path</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unlock your potential with our comprehensive coding courses. Start your journey today with our affordable
            pricing plans designed for every learner.
          </p>
        </div>

        {/* Main Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon
            return (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  plan.popular ? "ring-2 ring-primary scale-105" : ""
                } group`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    🔥 Most Popular
                  </div>
                )}

                <CardHeader className={`${plan.popular ? "pt-12" : "pt-6"} pb-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${plan.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    {plan.popular && <Badge variant="default">Best Value</Badge>}
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold">₹{plan.price.toLocaleString()}</span>
                      <span className="text-lg text-muted-foreground line-through">
                        ₹{plan.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-muted-foreground">per {plan.duration}</p>
                    <Badge variant="destructive" className="mt-2">
                      {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>

                  {/* Subjects */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Subjects:</h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.subjects.map((subject, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">What's included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-gradient-to-r from-primary to-primary/80" : ""
                    } group-hover:scale-105 transition-transform`}
                    size="lg"
                  >
                    {plan.popular ? "Start Learning Now" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Subject Courses */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Individual Subject Courses</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Focus on specific technologies with our specialized courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalSubjects.map((subject, index) => {
              const Icon = subject.icon
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline">{subject.duration}</Badge>
                    </div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{subject.description}</p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <span className="text-2xl font-bold">₹{subject.price.toLocaleString()}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {subject.topics.slice(0, 3).map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {subject.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{subject.topics.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground mb-8">Have questions? We've got answers.</p>
          <Button size="lg" variant="outline">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  )
}
