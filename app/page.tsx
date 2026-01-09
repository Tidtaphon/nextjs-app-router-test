import Image from "next/image";

export default function Home() {
  const items = [
    {
      name: "Btn Click Component Test",
      link: "/click",
    },
    {
      name: "Render Fruits Test",
      link: "/fruits",
    },
    {
      name: "Alert Btn Test",
      link: "/alertBtn",
    },
    {
      name: "Background Color Component Test",
      link: "/background",
    },
    {
      name: "Api Render Test",
      link: "/post",
    },
    {
      name: "Form Test",
      link: "/form",
    },
    {
      name: "Products Test",
      link: "/product",
    },
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
        padding: "16px",
      }}
    >
      {items.map((itm: any, idx: number) => (
        <div key={idx} className="cursor-pointer">
          <a href={itm.link} className="cursor-pointer">
            ({idx + 1}) {itm.name}
          </a>
        </div>
      ))}
    </div>
  );
}
