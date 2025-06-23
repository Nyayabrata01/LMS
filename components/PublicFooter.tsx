import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react"

export default function PublicFooter() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-lg p-2">
                <Code className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">CoderZonee</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering coders across India with quality education, practical projects, and earning opportunities.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                  Browse Courses
                </Link>
              </li>
              <li>
                <Link href="/skill-paths" className="text-muted-foreground hover:text-primary transition-colors">
                  Skill Paths
                </Link>
              </li>
              <li>
                <Link href="/career-paths" className="text-muted-foreground hover:text-primary transition-colors">
                  Career Paths
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Earn */}
          <div className="space-y-4">
            <h3 className="font-semibold">Earn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/referral" className="text-muted-foreground hover:text-primary transition-colors">
                  Referral Program
                </Link>
              </li>
              <li>
                <Link href="/instructor" className="text-muted-foreground hover:text-primary transition-colors">
                  Become Instructor
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-muted-foreground hover:text-primary transition-colors">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="text-muted-foreground hover:text-primary transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Get the latest courses, tips, and opportunities delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button size="sm">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} CoderZonee. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
