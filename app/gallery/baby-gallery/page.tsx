import GalleryGrid from "@/components/gallery-grid"

const babyGalleryImages = [
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Sensory-Play-with-Pumpkins.webp",
    alt: "Baby 4",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/IMG_3675.webp",
    alt: "Baby 1",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Babies-1.webp",
    alt: "Baby 2",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Babies-4.webp",
    alt: "Baby 3",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Leaf-Painting-1.webp",
    alt: "Baby 4",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Fun-Painting-Art-1.webp",
    alt: "Baby 5",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Sand-Play.webp",
    alt: "Baby 6",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Baby-Role-Play-1.webp",
    alt: "Baby 6",
    caption: "",
  },
  {
    src: "/galleries/nursery-images/babies/Jelly-Baby-Room-Nature-Feel-1.webp",
    alt: "Baby 6",
    caption: "",
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
