import GalleryGrid from "@/components/gallery-grid"

const totsGalleryImages = [
  {
    src: "/galleries/nursery-images/tots/IMG_1514.webp",
    alt: "Tot 1",
    caption: "A cute tot enjoying playtime.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_1516-1024x768.webp",
    alt: "Tot 2",
    caption: "A happy tot with a bright smile.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_1519-1024x768.webp",
    alt: "Tot 3",
    caption: "A playful tot exploring the world.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3674.webp",
    alt: "Tot 4",
    caption: "A curious tot discovering new things.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3679.webp",
    alt: "Tot 5",
    caption: "A joyful tot sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3680.webp",
    alt: "Tot 6",
    caption: "A sweet tot having fun.",
  },

  {
    src: "/galleries/nursery-images/tots/IMG_3684.webp",
    alt: "Tot 4",
    caption: "A curious tot discovering new things.",
  },

  {
    src: "/galleries/nursery-images/tots/IMG_3685.webp",
    alt: "Tot 5",
    caption: "A joyful tot sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3688.webp",
    alt: "Tot 6",
    caption: "A sweet tot having fun.",
  },

  {
    src: "/galleries/nursery-images/tots/IMG_3690.webp",
    alt: "Tot 4",
    caption: "A curious tot discovering new things.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3884.webp",
    alt: "Tot 5",
    caption: "A joyful tot sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/tots/IMG_3899.webp",
    alt: "Tot 6",
    caption: "A sweet tot having fun.",
  },
  
  {
    src: "/galleries/nursery-images/tots/IMG_3900.webp",
    alt: "Tot 4",
    caption: "A curious tot discovering new things.",
  },
  {
    src: "/galleries/nursery-images/tots/Jelluy-Tots-Room-Toddlers.webp",
    alt: "Tot 5",
    caption: "A joyful tot sharing a moment.",
  },
  {
    src: "/galleries/nursery-images/tots/Jelly-Tots-Room-Baking-Cookies.webp",
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
