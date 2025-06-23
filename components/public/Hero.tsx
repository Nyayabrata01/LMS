"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Star, BookOpen, TrendingUp, Code, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-in slide-in-from-left duration-1000">
            <Badge variant="secondary" className="w-fit animate-pulse">
              🚀 Join 50,000+ Coders Worldwide
            </Badge>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Learn. Build. <span className="text-primary">Earn</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Master programming skills with CoderZonee - India's premier coding platform. Build real projects, earn
                through referrals, and launch your tech career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/courses">
                <Button size="lg" className="w-full sm:w-auto group">
                  Browse Courses
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/instructor">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Become Instructor
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="font-semibold">50K+ Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="font-semibold">4.9 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <span className="font-semibold">95% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative animate-in slide-in-from-right duration-1000">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Students coding together"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground rounded-lg shadow-lg p-4 animate-bounce">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  <span className="text-sm font-medium">Live Coding</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-card border rounded-lg shadow-lg p-4 animate-pulse">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">₹2,45,000 Earned</span>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-card border rounded-lg shadow-lg p-3">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  <span className="text-xs font-medium">Job Ready</span>
                </div>
              </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
