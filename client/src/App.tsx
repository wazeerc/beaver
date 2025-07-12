"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  Play,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import "./index.css";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const availableLocales = [
    { value: "en", label: "English" },
    { value: "es", label: "Español" },
    { value: "fr", label: "Français" },
    { value: "de", label: "Deutsch" },
  ]
  const [currentLocale, setCurrentLocale] = useState<string>("en");
  function switchLocale(locale: string) {
    setCurrentLocale(locale);
    // Set new cookie
    document.cookie = `lingo-locale=${locale}; path=/; max-age=31536000;`;
    window.location.reload();
  }

  useEffect(() => {
    // Get current cookie
    const lingoCookie = document.cookie?.split("; ").find(row => row.startsWith("lingo-locale="));
    setCurrentLocale(lingoCookie ? lingoCookie.split("=")[1] : "en");

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Trigger loading animation
    setTimeout(() => setIsLoaded(true), 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-primary text-primary relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="cosmic-bg">
        <div className="cosmic-orb cosmic-orb-1"></div>
        <div className="cosmic-orb cosmic-orb-2"></div>
        <div className="cosmic-orb cosmic-orb-3"></div>
      </div>

      {/* Enhanced Floating Elements with Parallax */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-sky-light/10 rounded-full blur-xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-sky-medium/15 rounded-full blur-lg animate-float delay-200"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-16 h-16 bg-cream-medium/10 rounded-full blur-md animate-float delay-400"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        ></div>
        <div
          className="absolute bottom-40 right-10 w-40 h-40 bg-sky-dark/8 rounded-full blur-2xl animate-float delay-300"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        ></div>
        <div
          className="absolute bottom-20 left-20 w-28 h-28 bg-cream-light/8 rounded-full blur-xl animate-float delay-500"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        ></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full">
        <div className="glass-strong shadow-lg">
          <div className="container flex h-16 items-center justify-between">
            <div className={`flex items-center space-x-3 ${isLoaded ? "animate-fade-in-left" : "loading"}`}>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-sky shadow-lg hover-glow animate-pulse-glow">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">StreamLine</span>
            </div>

            <nav
              className={`hidden md:flex items-center space-x-8 ${isLoaded ? "animate-fade-in-up delay-200" : "loading"}`}
            >
              <a
                href="#features"
                className="text-sm font-medium text-secondary hover:text-sky-light transition-all duration-300 focus-ring rounded-lg px-3 py-2 hover-scale"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-secondary hover:text-sky-light transition-all duration-300 focus-ring rounded-lg px-3 py-2 hover-scale"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-secondary hover:text-sky-light transition-all duration-300 focus-ring rounded-lg px-3 py-2 hover-scale"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-secondary hover:text-sky-light transition-all duration-300 focus-ring rounded-lg px-3 py-2 hover-scale"
              >
                Contact
              </a>
            </nav>

            <div className={`flex items-center space-x-4 ${isLoaded ? "animate-fade-in-right delay-300" : "loading"}`}>
              <div className="select-container">
                <Select value={currentLocale} onValueChange={switchLocale}>
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent className="border-2">
                    <SelectGroup className="py-2 cursor-pointer hover:bg-accent focus:bg-accent rounded-sm bg-gray-800/80 text-slate-50">
                      {availableLocales.map((locale) => (
                        <SelectItem key={locale.value} value={locale.value} className="cursor-pointer">
                          {locale.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="ghost" size="icon" className="md:hidden rounded-xl focus-ring hover-glow">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 z-10 parallax-container">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge
                  className={`glass-light text-sky-light border-sky-light/30 rounded-full px-4 py-2 text-sm font-medium hover-glow ${isLoaded ? "animate-scale-in delay-400" : "loading"}`}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  New: AI-Powered Workflows
                </Badge>
                <h1 className={`hero-title text-primary ${isLoaded ? "animate-fade-in-up delay-500" : "loading"}`}>
                  Streamline Your
                  <span className="text-gradient-sky block mt-2">Workflow</span>
                </h1>
                <p
                  className={`text-xl text-secondary max-w-2xl leading-relaxed ${isLoaded ? "animate-fade-in-up delay-600" : "loading"}`}
                >
                  Boost productivity by 300% with our AI-powered project management platform. Automate tasks,
                  collaborate seamlessly, and deliver projects faster than ever.
                </p>
              </div>

              <div
                className={`flex flex-col sm:flex-row gap-4 ${isLoaded ? "animate-fade-in-up delay-700" : "loading"}`}
              >
                <Button size="lg" className="btn-primary text-lg px-8 rounded-2xl shadow-lg hover-lift focus-ring">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" className="btn-secondary text-lg px-8 rounded-2xl shadow-lg hover-lift focus-ring">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div
                className={`flex items-center space-x-8 text-sm text-secondary ${isLoaded ? "animate-fade-in-up delay-800" : "loading"}`}
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sky-medium" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-sky-medium" />
                  <span>No credit card required</span>
                </div>
              </div>
            </div>

            <div className={`relative ${isLoaded ? "animate-fade-in-right delay-600" : "loading"}`}>
              <div
                className="absolute inset-0 bg-gradient-sky-radial/20 rounded-3xl blur-3xl animate-pulse-glow"
                style={{ transform: `translateY(${scrollY * 0.1}px)` }}
              ></div>
              <div className="relative glass-strong rounded-3xl p-8 shadow-2xl hover-lift">
                <img
                  src="/render.jpg"
                  alt="StreamLine Dashboard"
                  className="rounded-2xl shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="glass-light text-sky-light border-sky-light/30 rounded-full px-4 py-2 text-sm font-medium animate-scale-in">
              Features
            </Badge>
            <h2 className="section-title text-primary animate-fade-in-up delay-200">Everything you need to succeed</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
              Powerful features designed to help teams collaborate better and deliver exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="feature-card rounded-3xl border-0 animate-fade-in-up delay-400">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-sky flex items-center justify-center mb-4 shadow-lg hover-glow">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-sky-light font-medium">01</span>
                </div>
                <CardTitle className="text-primary">AI-Powered Automation</CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  Automate repetitive tasks and workflows with our intelligent AI assistant that learns from your
                  patterns.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="feature-card rounded-3xl border-0 animate-fade-in-up delay-500">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-sky flex items-center justify-center mb-4 shadow-lg hover-glow">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-sky-light font-medium">02</span>
                </div>
                <CardTitle className="text-primary">Real-time Collaboration</CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  Work together seamlessly with live editing, instant messaging, and shared workspaces for your entire
                  team.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="feature-card rounded-3xl border-0 animate-fade-in-up delay-600">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-sky flex items-center justify-center mb-4 shadow-lg hover-glow">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-sky-light font-medium">03</span>
                </div>
                <CardTitle className="text-primary">Enterprise Security</CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  Bank-level security with end-to-end encryption, SSO integration, and compliance with industry
                  standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="feature-card rounded-3xl border-0 animate-fade-in-up delay-700">
              <CardHeader className="pb-4">
                <div className="h-14 w-14 rounded-2xl bg-gradient-sky flex items-center justify-center mb-4 shadow-lg hover-glow">
                  <BarChart3 className="h-7 w-7 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-sky-light font-medium">04</span>
                </div>
                <CardTitle className="text-primary">Advanced Analytics</CardTitle>
                <CardDescription className="text-secondary leading-relaxed">
                  Get deep insights into your team's performance with customizable dashboards and detailed reporting.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title text-primary animate-fade-in-up">See How Our Users Landed Their Dream Jobs</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              See how our users turned interview prep into dream job offers
            </p>
          </div>

          <div className="relative">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto">
              <Card className="glass-card rounded-3xl border-0 hover-lift animate-fade-in-left delay-300">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cream-medium text-cream-medium" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-secondary leading-relaxed">
                    "The portfolio presentation practice and design process questions were exactly what I faced in real
                    interviews. Went from junior to senior designer with a $45K salary jump. The confidence boost was
                    priceless."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-sky flex items-center justify-center text-white font-semibold">
                      JM
                    </div>
                    <div>
                      <p className="font-semibold text-primary">— Jennifer M</p>
                      <p className="text-sm text-muted">Product Designer</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="glass-card rounded-3xl border-0 hover-lift animate-fade-in-right delay-400">
                <CardHeader>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-cream-medium text-cream-medium" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-secondary leading-relaxed">
                    "Practicing with InterviewPal turned my portfolio presentation from average to amazing. Landed a
                    product design role at Spotify with zero prior experience. The behavioral interview question
                    predictions were spot-on!"
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-sky flex items-center justify-center text-white font-semibold">
                      LK
                    </div>
                    <div>
                      <p className="font-semibold text-primary">— Lakshmi K</p>
                      <p className="text-sm text-muted">Product Designer at Spotify</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button size="icon" className="glass-light rounded-full hover-glow">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button size="icon" className="bg-gradient-sky rounded-full hover-glow">
                <ChevronRight className="h-5 w-5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 relative z-10">
        <div className="container">
          <div className="text-center space-y-4 mb-8">
            <h2 className="section-title text-primary animate-fade-in-up">Simple, transparent pricing</h2>
            <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Choose the perfect plan for your team. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center mb-16 animate-scale-in delay-300">
            <div className="glass-light rounded-full p-1 flex items-center space-x-1">
              <Button className="bg-dark-tertiary text-secondary rounded-full px-6 py-2">Weekly</Button>
              <Button className="bg-gradient-sky text-white rounded-full px-6 py-2">Annual</Button>
              <Badge className="bg-sky-medium text-white rounded-full px-3 py-1 text-xs">Save 80%</Badge>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
            <Card className="pricing-card rounded-3xl border-0 animate-fade-in-up delay-400">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Free</CardTitle>
                <CardDescription className="text-secondary">
                  Perfect for testing out our platform and practicing basic interview questions to see if it's the right
                  fit for you.
                </CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary">$0</span>
                  <span className="text-secondary">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-sm text-sky-light font-medium">What's Included?</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Get 3 credits daily</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Free Job AI access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Free InterviewGPT access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Free Resume AI access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Free Cover Letter Generator access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Limited Weekly AI insights</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Limited company bank access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-secondary rounded-2xl shadow-lg hover-lift focus-ring">
                  Get a consultation
                </Button>
              </CardFooter>
            </Card>

            <Card className="pricing-card-popular rounded-3xl relative animate-fade-in-up delay-500">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-sky text-white rounded-full px-4 py-1 shadow-lg">
                Most popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Pro</CardTitle>
                <CardDescription className="text-secondary">
                  Ideal for active job seekers. Access a wide range of questions and receive detailed feedback on each
                  response to refine your performance.
                </CardDescription>
                <div className="mt-6">
                  <div className="text-sm text-muted line-through">$7.99</div>
                  <span className="text-4xl font-bold text-primary">$1.99</span>
                  <span className="text-secondary">/week</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-sm text-sky-light font-medium">What's Included?</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Unlimited credits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Access to all questions (20k+)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Full access to company tags</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Full access to company question banks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">AI enhanced responses</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Full Interview GPT access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Enhanced Weekly AI insights</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-primary rounded-2xl shadow-lg hover-lift focus-ring">
                  Get a consultation
                </Button>
              </CardFooter>
            </Card>

            <Card className="pricing-card rounded-3xl border-0 animate-fade-in-up delay-600">
              <CardHeader>
                <CardTitle className="text-primary text-2xl">Custom Plan</CardTitle>
                <CardDescription className="text-secondary">Perfect for groups & teachers.</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-primary">Request a quote</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-6">
                  <span className="text-sm text-sky-light font-medium">What's Included?</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Customized interview modules</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Customized performance tracker</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Customized response feedback</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-sky-medium" />
                    <span className="text-secondary">Customized AI weekly insights</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full btn-secondary rounded-2xl shadow-lg hover-lift focus-ring">
                  Get a consultation
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 relative z-10">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-cosmic relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-sky-radial rounded-full opacity-20 blur-3xl animate-pulse-glow"></div>
          </div>
        </div>
        <div className="container relative">
          <div className="text-center space-y-8 text-primary">
            <h2 className="section-title animate-fade-in-up">Real Questions From Top Hiring Companies</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
              Practice real questions top companies ask. Walk in confident, walk out prepared.
            </p>
            <div className="animate-scale-in delay-400">
              <Button size="lg" className="btn-primary text-lg px-8 rounded-2xl shadow-lg hover-lift focus-ring">
                Get a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="glass-strong text-primary py-16 relative z-10">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-sky shadow-lg">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">InterviewPal</span>
              </div>
              <p className="text-secondary leading-relaxed">
                Your interview success partner, offering personalized tools to give you the edge.
              </p>
              <div className="flex space-x-4">
                <Button size="icon" variant="ghost" className="hover-glow rounded-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Button>
                <Button size="icon" variant="ghost" className="hover-glow rounded-lg">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Account</h3>
              <ul className="space-y-2 text-secondary">
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Badges
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Subscription
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Interview AI Tools</h3>
              <ul className="space-y-2 text-secondary">
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Interview GPT
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Resume AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Job AI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Ask Away AI
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Job Search Tools</h3>
              <ul className="space-y-2 text-secondary">
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Resume Reviews
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Cover Letter Generator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Cover Letter Templates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-sky-light transition-colors focus-ring rounded px-1">
                    Request a feature
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700/50 mt-12 pt-8 text-center">
            <p className="text-secondary text-sm">© {new Date().getFullYear()} InterviewPal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
