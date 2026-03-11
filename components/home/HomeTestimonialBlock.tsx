type Props = { quote: string; attribution: string }

export default function HomeTestimonialBlock({ quote, attribution }: Props) {
  return (
    <section className="bg-[#f7f9fc] py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#566677] text-lg italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
        <p className="text-sm text-[#8898aa] mt-4">– {attribution}</p>
      </div>
    </section>
  )
}
