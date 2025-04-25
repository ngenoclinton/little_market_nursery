import GalleryGrid from "@/components/gallery-grid"

const babyGalleryImages = [
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Sensory-Play-with-Pumpkins.webp",
    alt: "Baby 4",
    caption: "Baby eating food.",
  },
  {
    src: "/galleries/nursery-images/babies/IMG_3675.webp",
    alt: "Baby 1",
    caption: "Cute baby playing with toys.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Babies-1.webp",
    alt: "Baby 2",
    caption: "Smiling baby in a crib.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Babies-4.webp",
    alt: "Baby 3",
    caption: "Baby sleeping peacefully.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Leaf-Painting-1.webp",
    alt: "Baby 4",
    caption: "Baby eating food.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Fun-Painting-Art-1.webp",
    alt: "Baby 5",
    caption: "Baby crawling on the floor.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Sand-Play.webp",
    alt: "Baby 6",
    caption: "Baby with a teddy bear.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Baby-Role-Play-1.webp",
    alt: "Baby 6",
    caption: "Baby with a teddy bear.",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Nature-Feel-1.webp",
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
