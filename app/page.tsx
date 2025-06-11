"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link2, BarChart3, Globe, Zap, Shield, Users, ArrowRight, MousePointer, MapPin } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function URLShortenerLanding() {
  const [url, setUrl] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Track clicks, geographic data, device info, and user behavior with detailed insights.",
      color: "text-blue-500",
    },
    {
      icon: Globe,
      title: "Smart Routing",
      description: "One short URL, multiple destinations. Route users based on location, device, or custom conditions.",
      color: "text-green-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant URL shortening with global CDN for maximum speed and reliability.",
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and spam protection.",
      color: "text-red-500",
    },
  ]

  const stats = [
    { number: "10M+", label: "URLs Shortened" },
    { number: "500M+", label: "Clicks Tracked" },
    //{ number: "99.9%", label: "Uptime" },
    //{ number: "150+", label: "Countries" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Link2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              url.mjxsh.in
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </Link>
            <Link href="#analytics" className="text-gray-600 hover:text-gray-900 transition-colors">
              Analytics
            </Link>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              Advanced URL Shortening Platform
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
              Shorten. Track.
              <br />
              <span className="text-4xl md:text-6xl">Route Smartly.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform long URLs into powerful short links with advanced analytics and intelligent routing. One short
              URL, infinite possibilities.
            </p>
          </div>

          {/* URL Shortener Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="max-w-2xl mx-auto mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="Enter your long URL here..."
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="flex-1 h-12 text-lg border-2 focus:border-blue-500 transition-colors"
                  />
                  <Button
                    size="lg"
                    className="h-12 px-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <Link2 className="w-5 h-5 mr-2" />
                    Shorten URL
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3 text-left">
                  Free • No registration required • Instant results
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div
            className={`transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Modern URLs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Go beyond simple URL shortening with advanced analytics and intelligent routing capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Showcase */}
      <section id="analytics" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics Dashboard
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                Deep Insights Into
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Every Click
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get comprehensive analytics on your shortened URLs. Track clicks, analyze geographic data, monitor
                device types, and understand user behavior patterns.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <MousePointer className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Real-time click tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Geographic analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">User behavior insights</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <span>Analytics Overview</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Total Clicks</span>
                        <span className="font-semibold">12,847</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">68%</div>
                        <div className="text-sm text-gray-600">Desktop</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">32%</div>
                        <div className="text-sm text-gray-600">Mobile</div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Top Locations</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">United States</span>
                          <span className="text-sm font-medium">45%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">India</span>
                          <span className="text-sm font-medium">23%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">United Kingdom</span>
                          <span className="text-sm font-medium">18%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Routing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-green-600" />
                    <span>Smart Routing Rules</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <div className="font-medium text-green-800">Location: United States</div>
                      <div className="text-sm text-green-600">→ https://example.com/us</div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <div className="font-medium text-blue-800">Location: Europe</div>
                      <div className="text-sm text-blue-600">→ https://example.com/eu</div>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                      <div className="font-medium text-purple-800">Device: Mobile</div>
                      <div className="text-sm text-purple-600">→ https://m.example.com</div>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                      <div className="font-medium text-orange-800">Default</div>
                      <div className="text-sm text-orange-600">→ https://example.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Smart Routing
              </Badge>
              <h2 className="text-4xl font-bold mb-6">
                One URL,
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Multiple Destinations
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Create intelligent short URLs that route users to different destinations based on their location, device
                type, language, or custom conditions you define.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">Location-based routing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-gray-700">Device-specific redirects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-gray-700">Custom condition rules</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
              >
                Learn More About Smart Routing
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your URLs?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust url.mjxsh.in for their URL shortening needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="h-12 px-8 text-lg">
              Get Started Free
            </Button>
            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Link2 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">url.mjxsh.in</span>
              </div>
              <p className="text-gray-400">
                Advanced URL shortening with powerful analytics and smart routing capabilities.
              </p>
            </div>

            {/* <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} url.mjxsh.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
