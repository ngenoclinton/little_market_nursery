import GalleryGrid from "@/components/gallery-grid"

const totsGalleryImages = [
  {
    src: "/images/tots-gallery/image1.jpg",
    alt: "Tot 1",
    caption: "A cute tot enjoying playtime.",
  },
  {
    src: "/images/tots-gallery/image2.jpg",
    alt: "Tot 2",
    caption: "A happy tot with a bright smile.",
  },
  {
    src: "/images/tots-gallery/image3.jpg",
    alt: "Tot 3",
    caption: "A playful tot exploring the world.",
  },
  {
    src: "/images/tots-gallery/image4.jpg",
    alt: "Tot 4",
    caption: "A curious tot discovering new things.",
  },
  {
    src: "/images/tots-gallery/image5.jpg",
    alt: "Tot 5",
    caption: "A joyful tot sharing a moment.",
  },
  {
    src: "/images/tots-gallery/image6.jpg",
    alt: "Tot 6",
    caption: "A sweet tot having fun.",
  },
]

export default function TotsGalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-semibold text-center mb-8">Tots Gallery</h1>
      <GalleryGrid images={totsGalleryImages} />
    </div>
  )
}
