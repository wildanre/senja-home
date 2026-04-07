import { redirect } from "next/navigation";
import { getShortlinkUrl, isValidShortlink } from "@/config/shortlinks";
import type { Metadata } from "next";

interface ShortlinkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: ShortlinkPageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isValidShortlink(slug)) {
    return {
      title: `Redirecting to ${slug} | Senja Finance`,
      description: `Redirecting you to Senja Finance ${slug}`,
    };
  }

  return {
    title: "Senja Finance",
    description: "Decentralized Finance Platform",
  };
}

export default async function ShortlinkPage({ params }: ShortlinkPageProps) {
  const { slug } = await params;
  const destinationUrl = getShortlinkUrl(slug);

  if (destinationUrl) {
    redirect(destinationUrl);
  }
  redirect("/");
}
