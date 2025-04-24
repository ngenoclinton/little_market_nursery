import GalleryGrid from "@/components/gallery-grid"

const babyGalleryImages = [
  {
    src: "/images/baby/baby1.jpg",
    alt: "Baby 1",
    caption: "Cute baby playing with toys.",
  },
  {
    src: "/images/baby/baby2.jpg",
    alt: "Baby 2",
    caption: "Smiling baby in a crib.",
  },
  {
    src: "/images/baby/baby3.jpg",
    alt: "Baby 3",
    caption: "Baby sleeping peacefully.",
  },
  {
    src: "/images/baby/baby4.jpg",
    alt: "Baby 4",
    caption: "Baby eating food.",
  },
  {
    src: "/images/baby/baby5.jpg",
    alt: "Baby 5",
    caption: "Baby crawling on the floor.",
  },
  {
    src: "/images/baby/baby6.jpg",
    alt: "Baby 6",
    caption: "Baby with a teddy bear.",
  },
]

export default function BabyGalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Baby Gallery</h1>
      <GalleryGrid images={babyGalleryImages} />
    </div>
  )
}
