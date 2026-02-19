import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={item.label} className="flex items-center gap-1.5">
            {index > 0 && (
              <ChevronRight size={12} className="text-[#8ab4d4] shrink-0" />
            )}
            {isLast ? (
              <span className="text-white">{item.label}</span>
            ) : item.href ? (
              <Link
                href={item.href}
                className="text-[#8ab4d4] hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#8ab4d4]">{item.label}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
