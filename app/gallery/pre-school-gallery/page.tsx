import GalleryGrid from "@/components/gallery-grid"

const preSchoolGalleryImages = [
  {
    src: "/galleries/nursery-images/pre-school/IMG_3677.webp",
    alt: "Pre-school activity 1",
    caption: "Children engaged in a learning activity.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3691.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3692.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3693.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3694.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3889.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3890.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/IMG_3898.webp",
    alt: "Pre-school activity 2",
    caption: "Kids playing with building blocks.",
  },
  {
    src: "/galleries/nursery-images/pre-school/Jelly-Beans-Room-Creating-Sensory-Bottles.webp",
    alt: "Pre-school activity 3",
    caption: "A group of children during story time.",
  },
  {
    src: "/galleries/nursery-images/pre-school/Jelly-Beans-Room-Exploring-Sensory-Cubes.webp",
    alt: "Pre-school activity 4",
    caption: "Creative art session with paint.",
  },
  {
    src: "/galleries/nursery-images/pre-school/Jelly-Beans-Room-Learning-Cutting-Skills.webp",
    alt: "Pre-school activity 5",
    caption: "Outdoor play on the playground.",
  },
  {
    src: "/galleries/nursery-images/pre-school/Jelly-Beans-Room-Play-Dough-Fun.webp",
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
