"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Video, FileText, Upload, Plus, Trash2, Edit, Save, Eye, DollarSign } from "lucide-react"

const steps = [
  { id: 1, title: "Course Info", description: "Basic course information", completed: true },
  { id: 2, title: "Curriculum", description: "Course content and lessons", completed: false },
  { id: 3, title: "Pricing", description: "Set course price and offers", completed: false },
  { id: 4, title: "Publish", description: "Review and publish course", completed: false },
]

const courseCategories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Cybersecurity",
  "UI/UX Design",
  "Game Development",
]

const courseLevels = ["Beginner", "Intermediate", "Advanced", "Expert"]

const sampleLessons = [
  {
    id: 1,
    title: "Introduction to React",
    type: "video",
    duration: "15 min",
    completed: true,
    description: "Learn the basics of React and component-based architecture",
  },
  {
    id: 2,
    title: "Setting up Development Environment",
    type: "video",
    duration: "20 min",
    completed: true,
    description: "Install Node.js, npm, and create your first React app",
  },
  {
    id: 3,
    title: "JSX and Components",
    type: "video",
    duration: "25 min",
    completed: false,
    description: "Understanding JSX syntax and creating reusable components",
  },
  {
    id: 4,
    title: "Practice Exercise: Todo App",
    type: "assignment",
    duration: "45 min",
    completed: false,
    description: "Build a simple todo application using React",
  },
]

export default function CourseBuilder() {
  const [currentStep, setCurrentStep] = useState(1)
  const [courseData, setCourseData] = useState({
    title: "Complete React Development Bootcamp",
    subtitle: "Master React from basics to advanced concepts",
    description:
      "Learn React.js from scratch and build amazing web applications. This comprehensive course covers everything from basic concepts to advanced patterns.",
    category: "Web Development",
    level: "Beginner",
    language: "English",
    price: 2999,
    originalPrice: 5999,
    duration: "12 weeks",
    totalLessons: 45,
    estimatedHours: 40,
  })

  const [lessons, setLessons] = useState(sampleLessons)

  const addNewLesson = () => {
    const newLesson = {
      id: lessons.length + 1,
      title: "New Lesson",
      type: "video",
      duration: "0 min",
      completed: false,
      description: "Add lesson description",
    }
    setLessons([...lessons, newLesson])
  }

  const deleteLesson = (id: number) => {
    setLessons(lessons.filter((lesson) => lesson.id !== id))
  }

  const getStepIcon = (stepId: number) => {
    switch (stepId) {
      case 1:
        return <BookOpen className="h-4 w-4" />
      case 2:
        return <Video className="h-4 w-4" />
      case 3:
        return <DollarSign className="h-4 w-4" />
      case 4:
        return <Eye className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Create New Course</h1>
        <p className="text-muted-foreground">
          Build and publish your course to share knowledge with students worldwide
        </p>
      </div>

      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Course Creation Progress</h3>
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {steps.length}
            </span>
          </div>
          <Progress value={(currentStep / steps.length) * 100} className="mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  currentStep === step.id
                    ? "border-primary bg-primary/5"
                    : step.completed
                      ? "border-green-500 bg-green-50 dark:bg-green-950"
                      : "border-muted"
                }`}
                onClick={() => setCurrentStep(step.id)}
              >
                <div className="flex items-center gap-2 mb-2">
                  {getStepIcon(step.id)}
                  <span className="font-medium">{step.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Course Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Course Title</label>
                  <Input
                    value={courseData.title}
                    onChange={(e) => setCourseData({ ...courseData, title: e.target.value })}
                    placeholder="Enter course title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subtitle</label>
                  <Input
                    value={courseData.subtitle}
                    onChange={(e) => setCourseData({ ...courseData, subtitle: e.target.value })}
                    placeholder="Brief description of your course"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={courseData.description}
                    onChange={(e) => setCourseData({ ...courseData, description: e.target.value })}
                    placeholder="Detailed course description"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={courseData.category}
                      onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}
                    >
                      {courseCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Level</label>
                    <select
                      className="w-full p-2 border rounded-md"
                      value={courseData.level}
                      onChange={(e) => setCourseData({ ...courseData, level: e.target.value })}
                    >
                      {courseLevels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input
                      value={courseData.duration}
                      onChange={(e) => setCourseData({ ...courseData, duration: e.target.value })}
                      placeholder="e.g., 8 weeks"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Total Lessons</label>
                    <Input
                      type="number"
                      value={courseData.totalLessons}
                      onChange={(e) => setCourseData({ ...courseData, totalLessons: Number.parseInt(e.target.value) })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Estimated Hours</label>
                    <Input
                      type="number"
                      value={courseData.estimatedHours}
                      onChange={(e) =>
                        setCourseData({ ...courseData, estimatedHours: Number.parseInt(e.target.value) })
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Course Thumbnail</label>
                  <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 2MB</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Course Curriculum</CardTitle>
                <Button onClick={addNewLesson}>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Lesson
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lessons.map((lesson, index) => (
                    <div key={lesson.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-muted-foreground">Lesson {index + 1}</span>
                          <Badge variant={lesson.type === "video" ? "default" : "secondary"}>
                            {lesson.type === "video" ? (
                              <Video className="h-3 w-3 mr-1" />
                            ) : (
                              <FileText className="h-3 w-3 mr-1" />
                            )}
                            {lesson.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => deleteLesson(lesson.id)}>
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <h4 className="font-medium mb-1">{lesson.title}</h4>
                      <p className="text-sm text-muted-foreground">{lesson.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Offers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Course Price (₹)</label>
                    <Input
                      type="number"
                      value={courseData.price}
                      onChange={(e) => setCourseData({ ...courseData, price: Number.parseInt(e.target.value) })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Original Price (₹)</label>
                    <Input
                      type="number"
                      value={courseData.originalPrice}
                      onChange={(e) => setCourseData({ ...courseData, originalPrice: Number.parseInt(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Pricing Preview</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">₹{courseData.price.toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{courseData.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive">
                      {Math.round((1 - courseData.price / courseData.originalPrice) * 100)}% OFF
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-4">Revenue Sharing</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Course Price:</span>
                      <span>₹{courseData.price.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Platform Fee (30%):</span>
                      <span>₹{Math.round(courseData.price * 0.3).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between font-medium">
                      <span>Your Earnings (70%):</span>
                      <span className="text-green-600">₹{Math.round(courseData.price * 0.7).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Publish</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">{courseData.title}</h4>
                  <p className="text-muted-foreground mb-4">{courseData.subtitle}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Category:</span>
                      <p className="font-medium">{courseData.category}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Level:</span>
                      <p className="font-medium">{courseData.level}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <p className="font-medium">{courseData.duration}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Lessons:</span>
                      <p className="font-medium">{lessons.length}</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Publishing Checklist</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Course information completed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">At least 5 lessons added</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-sm">Pricing configured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">!</span>
                      </div>
                      <span className="text-sm">Course thumbnail uploaded</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Save className="h-4 w-4 mr-2" />
                    Save as Draft
                  </Button>
                  <Button className="flex-1" variant="default">
                    Submit for Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{courseData.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{courseData.subtitle}</p>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Price:</span>
                  <span className="font-medium">₹{courseData.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Lessons:</span>
                  <span>{lessons.length}</span>
                </div>
                <div className="flex justify-between">
                  <span>Duration:</span>
                  <span>{courseData.duration}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tips for Success</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Create engaging video content with clear audio</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Include practical exercises and projects</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Respond to student questions promptly</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <p>Update content regularly to stay current</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
        >
          Previous
        </Button>
        <Button onClick={() => setCurrentStep(Math.min(4, currentStep + 1))} disabled={currentStep === 4}>
          Next
        </Button>
      </div>
    </div>
  )
}
