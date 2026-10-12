import type { Metadata } from "next";

export function pageMetadata(title: string, description: string, path: string, image?: string): Metadata {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const base = configured ? new URL(configured) : undefined;
  const previewImage = image || "/og-image.png";
  return {
    title: title === "Ark Capital" ? { absolute: title } : title,
    description,
    ...(base ? { metadataBase: base, alternates: { canonical: path } } : {}),
    openGraph: {
      type: "website",
      siteName: "Ark Capital",
      title: title === "Ark Capital" ? title : `${title} | Ark Capital`,
      description,
      images: [{ url: previewImage, alt: "Ark Capital", ...(!image ? { width: 1200, height: 630 } : {}) }],
      ...(base ? { url: path } : {}),
    },
    twitter: { card: "summary_large_image", title: title === "Ark Capital" ? title : `${title} | Ark Capital`, description, images: [previewImage] },
  };
}
