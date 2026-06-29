import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/d03c108a-cc98-4592-a493-0a03bd49edac.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/bbe81bbf-5d8f-440b-8efc-2d8ef434518d.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/1309bef1-41a9-49c8-834e-6af961ca7b57.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/d5a25129-f202-404a-a1b1-4b0266394c3d.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/50c4bcba-bebb-4af1-9fe4-684810875e4d.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/2d4a1f06-6927-4f20-96ea-599b3309b6dc.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/e54ce7bd-61bf-4cf7-b1ef-b13a30eae5be.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/a6818d5e-9b68-4226-8ece-cc0a1563bbc6.jpg",
    "https://cdn.poehali.dev/projects/6f065cd9-e88b-4e42-b9b2-f5f3c9fa0f1e/files/d3b80f07-203d-4851-9ad7-903568fe35d9.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;