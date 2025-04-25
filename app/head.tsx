// app/head.tsx
export default function Head() {
    return (
      <>
        <meta charSet="utf-8" />
        <title>Little Market Nursery</title>
        {/* fallback: .ico */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* PNG, SVG, sizes attrs are optional */}
        <link
          rel="icon"
          href="/Nursery-logo.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/Nursery-logo.svg"
          type="image/svg+xml"
        />
      </>
    )
  }
  