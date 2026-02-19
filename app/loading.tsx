export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <div className="w-10 h-10 border-4 border-[#e8edf2] border-t-[#f4a65d] rounded-full animate-spin" />
        </div>
        <p className="text-[#8898aa] text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}
