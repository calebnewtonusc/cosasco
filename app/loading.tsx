export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="whirl-arc-double" role="status" aria-label="Loading" />
        <p className="text-sm font-medium" style={{ color: '#94aabb' }}>Loading…</p>
      </div>
    </div>
  )
}
