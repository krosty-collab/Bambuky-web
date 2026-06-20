import Image from "next/image";
import Link from "next/link";

type Related = {
  title: string;
  href: string;
  image: string;
  alt: string;
};

const ALL: Related[] = [
  {
    title: "Newborn · Recién Nacido",
    href: "/fotografia-newborn-queretaro",
    image: "/images/newborn1.jpg",
    alt: "Sesión newborn Querétaro",
  },
  {
    title: "Maternidad",
    href: "/fotografia-maternidad-queretaro",
    image: "/images/maternidad3.jpg",
    alt: "Sesión maternidad Querétaro",
  },
  {
    title: "48 Horas Contigo",
    href: "/48-horas-contigo-queretaro",
    image: "/images/48hs01.jpg",
    alt: "Sesión 48 horas Querétaro",
  },
  {
    title: "Sitters",
    href: "/sitters-queretaro",
    image: "/images/sitters04.jpg",
    alt: "Sesión sitters Querétaro",
  },
  {
    title: "Smash the Cake",
    href: "/smash-cake-queretaro",
    image: "/images/smash05.jpg",
    alt: "Smash the Cake Querétaro",
  },
];

export default function RelatedServices({
  current,
  show,
}: {
  current: string;
  show: string[];
}) {
  const items = ALL.filter(
    (s) => s.href !== current && show.includes(s.href)
  );

  return (
    <section className="related-services">
      <div className="container">
        <div className="section-header">
          <p className="label">También te puede interesar</p>
          <h2 className="heading">Otras sesiones para tu familia</h2>
        </div>
        <div className="related-grid">
          {items.map((s) => (
            <Link href={s.href} className="related-card" key={s.href}>
              <div className="related-card-img">
                <Image src={s.image} alt={s.alt} fill sizes="(max-width: 768px) 92vw, 33vw" />
              </div>
              <h3>{s.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
