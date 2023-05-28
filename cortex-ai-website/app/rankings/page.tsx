import RankingsSection from "@/components/RankingsSection";

export const metadata = {
  title: "Cortex AI - Rankings",
};

type toolListProps = {
  id: number;
  name: string;
  categoryName: string;
  description: string;
  keyFeatures: string;
  useCases: string;
  guide: string;
  rating: number;
  externalLink: string;
  downloads: number;
  imageLink: string;
  videoLink: string;
}[];

async function getTools() {
  const res = await fetch(`${process.env.BASE_URL}/api/getAllTools`, {
    cache: "no-store",
  });
  const jsonData = await res.json()

  if (!res.ok) {
    console.log(res);
  }
  return jsonData
}

export default async function Home() {
  const toolList = await getTools();

  return (
    <>
      <h1>Omglol</h1>
    </>
  );
}
