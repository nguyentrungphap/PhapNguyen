import { Metadata } from "next"

export function constructMetadata({
    title = "Pháp Nguyễn",
    description = "Sales Representative Turned Code Maestro",
    image = "/thumbnail.png",
    icons = "/logo.svg",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [image]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@PhapNguyen"
      },
      icons,
      metadataBase: new URL('https://www.PhapNguyen.com'),
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }
  