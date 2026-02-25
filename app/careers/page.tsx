'use client'

import type { Metadata } from 'next'
import { useState } from 'react'
import Link from 'next/link'
import { Target, Globe, Cog, TrendingUp, DollarSign, Heart, PiggyBank, Home, BookOpen, Plane } from "lucide-react";

const cultureCards = [
  {
    icon: <Target className="w-8 h-8 text-[#f4a65d]" />,
    title: "Mission-Driven Work",
    desc: "Contribute to technologies that protect critical infrastructure and ensure safety across the globe's most demanding industrial environments.",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#f4a65d]" />,
    title: "Global Reach",
    desc: "Work alongside colleagues and customers across six continents. Cosasco operates in 110+ countries, offering true international exposure.",
  },
  {
    icon: <Cog className="w-8 h-8 text-[#f4a65d]" />,
    title: "Engineering Excellence",
    desc: "Join a team with 70+ years of corrosion monitoring expertise. We invest in R&D, precision manufacturing, and continuous technical innovation.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#f4a65d]" />,
    title: "Growth & Development",
    desc: "Access mentorship, training programs, and career advancement pathways. As a Halma company, doors open to a wider network of 45+ businesses.",
  },
];

const jobs = [
  { title: "Corrosion Application Engineer", dept: "Engineering", location: "Santa Fe Springs, CA" },
  { title: "Sales Engineer — EMEA", dept: "Sales", location: "London, UK" },
  { title: "Field Service Technician", dept: "Operations", location: "Houston, TX" },
  { title: "Product Manager — Corrosion Monitoring", dept: "Engineering", location: "Santa Fe Springs, CA" },
  { title: "Regional Sales Manager — Asia Pacific", dept: "Sales", location: "Singapore" },
  { title: "Software Developer — FieldCom Platform", dept: "IT", location: "Santa Fe Springs, CA" },
  { title: "Quality Assurance Engineer", dept: "Operations", location: "Santa Fe Springs, CA" },
  { title: "Account Manager — Oil & Gas", dept: "Sales", location: "Calgary, Canada" },
];

const deptColors: Record<string, string> = {
  Engineering: "bg-blue-100 text-blue-700",
  Sales: "bg-green-100 text-green-700",
  Operations: "bg-purple-100 text-purple-700",
  IT: "bg-orange-100 text-orange-700",
};

const benefits = [
  { icon: <DollarSign className="w-6 h-6 text-[#f4a65d]" />, title: "Competitive Compensation", desc: "Market-leading salaries benchmarked across the industry, plus performance-based bonuses." },
  { icon: <Heart className="w-6 h-6 text-[#f4a65d]" />, title: "Comprehensive Healthcare", desc: "Full medical, dental, and vision coverage for you and your dependents from day one." },
  { icon: <PiggyBank className="w-6 h-6 text-[#f4a65d]" />, title: "401(k) with Match", desc: "Generous employer matching to help you build long-term financial security." },
  { icon: <Home className="w-6 h-6 text-[#f4a65d]" />, title: "Remote Work Options", desc: "Flexible hybrid and remote arrangements available for eligible roles." },
  { icon: <BookOpen className="w-6 h-6 text-[#f4a65d]" />, title: "Professional Development", desc: "Annual learning budget, certification reimbursement, and internal mentorship programs." },
  { icon: <Plane className="w-6 h-6 text-[#f4a65d]" />, title: "International Exposure", desc: "Collaborate across Halma's global network and participate in international projects." },
];

export default function CareersPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredJobs =
    activeFilter === 'All' ? jobs : jobs.filter((job) => job.dept === activeFilter);

  return (
    <div>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[72px] pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">
            Halma Company · Cosasco
          </p>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">Join Our Team</h1>
          <p className="text-lg text-[#8ab4d4] max-w-2xl mx-auto">
            Build your career at a global leader in industrial technology.
          </p>
        </div>
      </section>

      {/* BREADCRUMB */}
      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">Home</Link>
            <span className="text-[#d1d9e0]">›</span>
            <span className="text-[#1e2b3a] font-medium">Careers</span>
          </nav>
        </div>
      </div>

      {/* CULTURE */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0f2a4a]">Why Work at Cosasco?</h2>
            <p className="text-[#566677] mt-3 max-w-xl mx-auto">
              We combine decades of engineering legacy with the resources of a global parent company to give our people a unique place to grow.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cultureCards.map((card) => (
              <div
                key={card.title}
                className="bg-[#f7f9fc] border border-[#e8edf2] rounded-xl p-6"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="font-bold text-[#0f2a4a] text-base mb-2">{card.title}</h3>
                <p className="text-[#566677] text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN POSITIONS */}
      <section className="bg-[#f7f9fc] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-[#0f2a4a]">Current Openings</h2>
            <p className="text-[#566677] mt-3">Explore opportunities across our global organization.</p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["All", "Engineering", "Sales", "Operations", "IT"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={filter === activeFilter}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  filter === activeFilter
                    ? "bg-[#f4a65d] text-white border-[#f4a65d]"
                    : "bg-white text-[#374151] border-[#e8edf2] hover:border-[#f4a65d] hover:text-[#f4a65d]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Job cards */}
          <div className="flex flex-col gap-4">
            {filteredJobs.map((job) => (
              <div
                key={job.title}
                className="bg-white border border-[#e8edf2] rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <p className="font-bold text-[#0f2a4a] text-base">{job.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${deptColors[job.dept]}`}>
                      {job.dept}
                    </span>
                    <span className="text-[#566677] text-sm">{job.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:careers@cosasco.com?subject=Application: ${job.title}`}
                  className="bg-[#f4a65d] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e8954a] transition-colors whitespace-nowrap ml-4"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-[#0f2a4a]">Benefits & Perks</h2>
            <p className="text-[#566677] mt-3 max-w-xl mx-auto">
              We take care of our people so they can focus on doing their best work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4 p-6 bg-[#f7f9fc] border border-[#e8edf2] rounded-xl">
                <div className="mt-0.5 flex-shrink-0">{b.icon}</div>
                <div>
                  <h3 className="font-bold text-[#0f2a4a] text-sm mb-1">{b.title}</h3>
                  <p className="text-[#566677] text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Don&apos;t see a perfect fit?</h2>
          <p className="text-[#8ab4d4] mb-6">Send us your resume and we&apos;ll reach out when the right opportunity opens.</p>
          <a
            href="mailto:careers@cosasco.com"
            className="inline-block bg-[#f4a65d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
          >
            careers@cosasco.com
          </a>
        </div>
      </section>
    </div>
  );
}
