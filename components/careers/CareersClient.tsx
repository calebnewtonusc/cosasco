'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Target,
  Globe,
  Cog,
  TrendingUp,
  Heart,
  PiggyBank,
  BookOpen,
  Baby,
  Stethoscope,
  Eye,
  Smile,
  BriefcaseBusiness,
} from 'lucide-react'

const cultureCards = [
  {
    icon: <Target className="w-8 h-8 text-[#f4a65d]" />,
    title: 'Mission-Driven Work',
    desc: "Contribute to technologies that protect critical infrastructure and ensure safety across the globe's most demanding industrial environments.",
  },
  {
    icon: <Globe className="w-8 h-8 text-[#f4a65d]" />,
    title: 'Global Reach',
    desc: 'Work alongside colleagues and customers across six continents. Cosasco operates in 110+ countries, offering true international exposure.',
  },
  {
    icon: <Cog className="w-8 h-8 text-[#f4a65d]" />,
    title: 'Engineering Excellence',
    desc: 'Join a team with 70+ years of corrosion monitoring expertise. We invest in R&D, precision manufacturing, and continuous technical innovation.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-[#f4a65d]" />,
    title: 'Growth & Development',
    desc: "Access mentorship, training programs, and career advancement pathways. As a Halma company, doors open to a wider network of 45+ businesses.",
  },
]

const ULTIPRO_URL =
  'https://recruiting2.ultipro.com/HAL1008HALMA/JobBoard/0e7d537d-b1af-425a-86ed-f2668deaf540/'

const DEPT_FILTERS = ['All', 'Engineering', 'Sales', 'Operations', 'Finance', 'HR', 'Field Services']

const jobs = [
  { title: 'Corrosion Application Engineer', dept: 'Engineering', location: 'Santa Fe Springs, CA' },
  { title: 'Sales Engineer — EMEA', dept: 'Sales', location: 'London, UK' },
  { title: 'Field Service Technician', dept: 'Field Services', location: 'Houston, TX' },
  { title: 'Product Manager — Corrosion Monitoring', dept: 'Engineering', location: 'Santa Fe Springs, CA' },
  { title: 'Regional Sales Manager — Asia Pacific', dept: 'Sales', location: 'Singapore' },
  { title: 'Quality Assurance Engineer', dept: 'Engineering', location: 'Santa Fe Springs, CA' },
  { title: 'Account Manager — Oil & Gas', dept: 'Sales', location: 'Calgary, Canada' },
  { title: 'Operations Coordinator', dept: 'Operations', location: 'Santa Fe Springs, CA' },
  { title: 'Financial Analyst', dept: 'Finance', location: 'Santa Fe Springs, CA' },
  { title: 'HR Business Partner', dept: 'HR', location: 'Santa Fe Springs, CA' },
]

const deptColors: Record<string, string> = {
  Engineering: 'bg-blue-100 text-blue-700',
  Sales: 'bg-green-100 text-green-700',
  Operations: 'bg-purple-100 text-purple-700',
  Finance: 'bg-yellow-100 text-yellow-700',
  HR: 'bg-pink-100 text-pink-700',
  'Field Services': 'bg-orange-100 text-orange-700',
}

const benefits = [
  {
    icon: <Stethoscope className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Medical Insurance',
    desc: 'Comprehensive medical coverage for you and your dependents, starting from day one.',
    featured: false,
  },
  {
    icon: <Smile className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Dental Insurance',
    desc: 'Full dental benefits including preventive, basic, and major restorative care.',
    featured: false,
  },
  {
    icon: <Eye className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Vision Insurance',
    desc: 'Vision plan covering eye exams, glasses, and contact lenses.',
    featured: false,
  },
  {
    icon: <PiggyBank className="w-6 h-6 text-[#f4a65d]" />,
    title: '401(k) Retirement Plan',
    desc: 'Employer-matched 401(k) to help you build lasting financial security for retirement.',
    featured: false,
  },
  {
    icon: <Heart className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Generous PTO',
    desc: 'Ample paid time off, plus paid holidays, so you can recharge and show up at your best.',
    featured: false,
  },
  {
    icon: <Baby className="w-6 h-6 text-white" />,
    title: '14 Weeks Paid Parental Leave',
    desc: 'Cosasco offers 14 weeks of fully paid maternity and paternity leave — one of the most generous parental leave policies in the industry.',
    featured: true,
  },
  {
    icon: <BookOpen className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Professional Development',
    desc: 'Annual learning budget, certification reimbursement, and internal mentorship programs.',
    featured: false,
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6 text-[#f4a65d]" />,
    title: 'Global Career Opportunities',
    desc: "As part of the Halma Group — 45+ companies worldwide — your career path extends far beyond Cosasco.",
    featured: false,
  },
]

export default function CareersClient() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredJobs =
    activeFilter === 'All' ? jobs : jobs.filter((job) => job.dept === activeFilter)

  return (
    <>
      {/* BREADCRUMB */}
      <div className="bg-[#f7f9fc] border-b border-[#e8edf2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3">
          <nav className="flex items-center gap-2 text-sm text-[#566677]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0f2a4a] transition-colors">
              Home
            </Link>
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
              We combine decades of engineering legacy with the resources of a global parent company
              to give our people a unique place to grow.
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
            <p className="text-[#566677] mt-3">
              Explore opportunities across our global organization.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {DEPT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={filter === activeFilter}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  filter === activeFilter
                    ? 'bg-[#f4a65d] text-white border-[#f4a65d]'
                    : 'bg-white text-[#374151] border-[#e8edf2] hover:border-[#f4a65d] hover:text-[#f4a65d]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Job cards */}
          <div className="flex flex-col gap-4">
            {filteredJobs.length === 0 ? (
              <p className="text-center text-[#566677] py-10">
                No open roles in this department right now.{' '}
                <a
                  href="mailto:careers@cosasco.com?subject=Job Alert Request"
                  className="text-[#f4a65d] underline hover:text-[#e8954a]"
                >
                  Set up a job alert
                </a>{' '}
                to be notified when one opens.
              </p>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.title}
                  className="bg-white border border-[#e8edf2] rounded-xl p-6 flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    <p className="font-bold text-[#0f2a4a] text-base">{job.title}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${deptColors[job.dept] ?? 'bg-gray-100 text-gray-700'}`}
                      >
                        {job.dept}
                      </span>
                      <span className="text-[#566677] text-sm">{job.location}</span>
                    </div>
                  </div>
                  <a
                    href={ULTIPRO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#f4a65d] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#e8954a] transition-colors whitespace-nowrap ml-4"
                  >
                    Apply Now →
                  </a>
                </div>
              ))
            )}
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

          {/* Featured parental leave card — full width, gold accent */}
          {benefits
            .filter((b) => b.featured)
            .map((b) => (
              <div
                key={b.title}
                className="mb-8 flex items-start gap-5 p-6 bg-[#0f2a4a] border border-[#1a3d66] rounded-2xl relative overflow-hidden"
              >
                {/* Gold badge */}
                <span className="absolute top-4 right-4 bg-[#f4a65d] text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                  Standout Benefit
                </span>
                <div className="mt-0.5 flex-shrink-0 w-11 h-11 rounded-full bg-[#f4a65d] flex items-center justify-center">
                  {b.icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-white text-lg mb-1">{b.title}</h3>
                  <p className="text-[#8ab4d4] text-sm leading-relaxed max-w-2xl">{b.desc}</p>
                </div>
              </div>
            ))}

          {/* Standard benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits
              .filter((b) => !b.featured)
              .map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-4 p-6 bg-[#f7f9fc] border border-[#e8edf2] rounded-xl"
                >
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

      {/* JOB ALERT CTA */}
      <section className="bg-[#f7f9fc] border-t border-[#e8edf2] py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-xl font-black text-[#0f2a4a] mb-2">Never miss an opening</h2>
          <p className="text-[#566677] mb-6 max-w-lg mx-auto">
            Send us a quick email and we&apos;ll notify you when a role matching your background
            becomes available.
          </p>
          <a
            href="mailto:careers@cosasco.com?subject=Job Alert Request"
            className="inline-block bg-[#0f2a4a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1a3d66] transition-colors"
          >
            Set Up a Job Alert
          </a>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Don&apos;t see a perfect fit?</h2>
          <p className="text-[#8ab4d4] mb-6">
            Send us your resume and we&apos;ll reach out when the right opportunity opens.
          </p>
          <a
            href="mailto:careers@cosasco.com"
            className="inline-block bg-[#f4a65d] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors"
          >
            careers@cosasco.com
          </a>
        </div>
      </section>
    </>
  )
}
