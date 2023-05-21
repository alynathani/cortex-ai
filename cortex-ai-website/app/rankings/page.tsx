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
    cache: "default",
  });
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const toolList = await getTools();

  return (
    <>
      <RankingsSection toolArray={toolList} />
    </>
  );
}
