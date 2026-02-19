import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'News & Insights | Cosasco',
  description: 'Latest news, product updates, technical articles, and events from Cosasco.',
}

export default function NewsPage() {
  const filters = ["All", "Press Releases", "Product Updates", "Technical Articles", "Events"];

  const articles = [
    {
      title: "Cosasco Launches Next-Gen FieldCom 5.0 Wireless System",
      category: "Product Update",
      date: "Jan 15, 2026",
      excerpt:
        "The new FieldCom 5.0 delivers enhanced wireless range, sub-second data refresh rates, and an overhauled cloud dashboard — redefining real-time corrosion monitoring at scale.",
    },
    {
      title: "New Retractable ER Probe for High-Pressure Applications",
      category: "Product Update",
      date: "Jan 8, 2026",
      excerpt:
        "Cosasco introduces a fully retractable electrical resistance probe rated for pressures up to 3,000 PSI, enabling safe in-service retrieval without process shutdown.",
    },
    {
      title: "Cosasco Recognized as Leading Corrosion Monitor Supplier",
      category: "Press Release",
      date: "Dec 20, 2025",
      excerpt:
        "Independent industry analysts ranked Cosasco among the top three global suppliers of corrosion monitoring equipment for the fourth consecutive year.",
    },
    {
      title: "Best Practices for Chemical Injection System Maintenance",
      category: "Technical Article",
      date: "Dec 12, 2025",
      excerpt:
        "Our corrosion engineers outline a comprehensive maintenance framework for chemical injection systems, covering inspection intervals, seal selection, and data-driven dosing strategies.",
    },
    {
      title: "Cosasco at NACE Corrosion 2026 — Booth #1247",
      category: "Events",
      date: "Dec 5, 2025",
      excerpt:
        "Visit us at the world's largest corrosion conference. Live product demonstrations of FieldCom 5.0, retractable probes, and our new chemical injection lineup will be on display.",
    },
    {
      title: "Case Study: 63% Reduction in Pipeline Failures with ER Monitoring",
      category: "Technical Article",
      date: "Nov 28, 2025",
      excerpt:
        "A major North American midstream operator achieved a 63% reduction in unplanned pipeline failures after deploying a network of Cosasco electrical resistance probes across 400 miles of infrastructure.",
    },
    {
      title: "New Distribution Partnership in Southeast Asia",
      category: "Press Release",
      date: "Nov 15, 2025",
      excerpt:
        "Cosasco announces a strategic distribution agreement with PT Corrotech Solutions, expanding direct product access and technical support across Indonesia, Malaysia, Thailand, and Vietnam.",
    },
    {
      title: "Webinar Recap: Corrosion Management in Sour Gas Systems",
      category: "Events",
      date: "Nov 8, 2025",
      excerpt:
        "Over 1,200 engineers attended our live webinar on corrosion management in H₂S-rich environments. A full recording and slide deck are now available for download.",
    },
    {
      title: "ISO 9001:2015 Recertification Achieved",
      category: "Press Release",
      date: "Oct 30, 2025",
      excerpt:
        "Cosasco successfully completed its ISO 9001:2015 surveillance audit with zero nonconformances, reaffirming our commitment to quality management across all manufacturing operations.",
    },
    {
      title: "Understanding ER vs LPR Probe Technology",
      category: "Technical Article",
      date: "Oct 22, 2025",
      excerpt:
        "A deep-dive comparison of electrical resistance and linear polarization resistance probe technologies — helping engineers select the right sensor for their specific process conditions.",
    },
    {
      title: "Cosasco Q3 2025 Product Catalog Now Available",
      category: "Product Update",
      date: "Oct 10, 2025",
      excerpt:
        "The updated Q3 catalog includes 14 new SKUs across our probe, chemical injection, and access fitting product lines, along with revised technical specifications for legacy products.",
    },
    {
      title: "Interview: 70 Years of Corrosion Innovation",
      category: "Technical Article",
      date: "Sep 25, 2025",
      excerpt:
        "Cosasco's Chief Technology Officer reflects on seven decades of corrosion monitoring innovation — from early mechanical coupons to today's cloud-connected wireless sensor networks.",
    },
  ];

  const categoryColors: Record<string, string> = {
    "Product Update": "text-[#f4a65d] bg-[#f4a65d]/20",
    "Press Release": "text-emerald-400 bg-emerald-400/20",
    "Technical Article": "text-sky-400 bg-sky-400/20",
    Events: "text-violet-400 bg-violet-400/20",
  };

  const headerAccents: Record<string, string> = {
    "Product Update": "from-[#0f2a4a] to-[#1a3d6b]",
    "Press Release": "from-[#0f2a4a] to-[#0d3b2f]",
    "Technical Article": "from-[#0f2a4a] to-[#0c2a40]",
    Events: "from-[#0f2a4a] to-[#1e1a4a]",
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-[#0f2a4a] pt-[75px] pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#f4a65d] text-sm font-semibold tracking-widest uppercase mb-4">Stay Informed</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">News &amp; Insights</h1>
          <p className="text-[#8ab4d4] text-lg max-w-xl mx-auto">
            Product updates, press releases, technical articles, and events from Cosasco.
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="sticky top-0 z-30 bg-white border-b border-[#e8edf2] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3 no-scrollbar">
            {filters.map((f) => (
              <button
                key={f}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                  f === "All"
                    ? "bg-[#0f2a4a] text-white border-[#0f2a4a]"
                    : "bg-white text-[#374151] border-[#e8edf2] hover:border-[#0f2a4a] hover:text-[#0f2a4a]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <section className="bg-[#f7f9fc] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div
                key={article.title}
                className="bg-white border border-[#e8edf2] rounded-xl overflow-hidden hover:shadow-lg transition-all group cursor-pointer"
              >
                {/* Card header */}
                <div
                  className={`bg-gradient-to-br ${headerAccents[article.category] ?? "from-[#0f2a4a] to-[#1a3d6b]"} px-6 py-8 relative h-32`}
                >
                  <span
                    className={`absolute top-4 left-4 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[article.category]}`}
                  >
                    {article.category}
                  </span>
                  <span className="absolute bottom-4 left-6 text-[#8ab4d4] text-xs">{article.date}</span>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="font-bold text-[#0f2a4a] text-base leading-snug group-hover:text-[#f4a65d] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm mt-2 line-clamp-3 leading-relaxed">{article.excerpt}</p>
                  <p className="text-[#f4a65d] text-sm font-semibold mt-4 group-hover:underline">Read More →</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="bg-[#0f2a4a] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Stay Up to Date</h2>
          <p className="text-[#8ab4d4] mb-8 max-w-md mx-auto">
            Subscribe to receive the latest Cosasco product news, technical articles, and event announcements directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-[#8ab4d4] focus:outline-none focus:border-[#f4a65d]"
            />
            <button className="bg-[#f4a65d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e8954a] transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
