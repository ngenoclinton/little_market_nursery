import GalleryGrid from "@/components/gallery-grid"

const preSchoolGalleryImages = [
  {
    src: "/images/pre-school/image1.jpg",
    alt: "Pre-school activity 1",
    caption: "Children engaged in a learning activity.",
  },
  {
    src: "/images/pre-school/image2.jpg",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/images/pre-school/image3.jpg",
    alt: "Pre-school activity 3",
    caption: "A group of children during story time.",
  },
  {
    src: "/images/pre-school/image4.jpg",
    alt: "Pre-school activity 4",
    caption: "Creative art session with paint.",
  },
  {
    src: "/images/pre-school/image5.jpg",
    alt: "Pre-school activity 5",
    caption: "Outdoor play on the playground.",
  },
  {
    src: "/images/pre-school/image6.jpg",
    alt: "Pre-school activity 6",
    caption: "Learning about shapes and colors.",
  },
]

export default function PreSchoolGalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Pre-School Gallery</h1>
      <GalleryGrid images={preSchoolGalleryImages} />
    </div>
  )
}
