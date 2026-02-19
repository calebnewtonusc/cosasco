'use client'
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      type="button"
      className="no-print flex items-center gap-2 border border-[#e8edf2] text-[#566677] hover:border-[#0f2a4a] hover:text-[#0f2a4a] rounded-lg px-4 py-2 text-sm font-medium transition-colors"
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.75 19.5m10.56-5.671.72.096m-.72-.096L17.25 19.5M9 10.5h1.5m3 0H15M12 3v3m0 0h3m-3 0H9m3 0v.75" />
      </svg>
      Print Spec Sheet
    </button>
  )
}
