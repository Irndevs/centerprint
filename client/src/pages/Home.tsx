import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  ChevronRight,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const logo = "/images/centerprint-logo.png";
const papelariaProducts = "/images/papelaria-products.webp";
const papelariaGrid = "/images/papelaria-grid.webp";
const centertopGrid = "/images/centertop-grid.webp";
const produtosCores = "/images/produtos-cores.webp";
const produtosApontador = "/images/produtos-apontador.webp";
const produtosCanetas = "/images/produtos-canetas.webp";

const categories = [
  {
    label: "Papelaria",
    detail: "Escolar, escritório e criatividade",
    tone: "blue",
    icon: "✦",
  },
  {
    label: "Impressão",
    detail: "Xerox, plastificação e encadernação",
    tone: "red",
    icon: "▤",
  },
  {
    label: "Acessórios",
    detail: "Detalhes para completar seu look",
    tone: "pink",
    icon: "✧",
  },
  {
    label: "Presentes",
    detail: "Maquiagem, brinquedos e novidades",
    tone: "yellow",
    icon: "◌",
  },
];

const highlights = [
  {
    title: "Tudo para estudar",
    text: "Mochilas, estojos, lápis e canetas para deixar sua rotina mais colorida e organizada.",
    image: papelariaProducts,
    tag: "Papelaria",
  },
  {
    title: "Cores que inspiram",
    text: "Canetas, lápis de cor e materiais que transformam ideias em arte.",
    image: produtosCores,
    tag: "Material",
  },
  {
    title: "Praticidade no dia a dia",
    text: "Estojos, apontadores e acessórios pensados para facilitar sua rotina.",
    image: papelariaGrid,
    tag: "Essenciais",
  },
];

const gallery = [
  { src: papelariaProducts, alt: "Kit Capivara — mochila, estojo e lapiseiras" },
  { src: produtosCores, alt: "Lápis de cor Super Leo & Leo" },
  { src: centertopGrid, alt: "Canetas coloridas em destaque" },
  { src: papelariaGrid, alt: "Estojo rosa com lápis e canetas" },
  { src: produtosApontador, alt: "Apontadores coloridos CIS" },
  { src: produtosCanetas, alt: "Canetas e acessórios fofos" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-[#17213b]">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#17213b]/8 bg-[#fbfaf7]/92 shadow-[0_8px_32px_rgba(23,33,59,.06)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
          <a
            href="#inicio"
            className="flex items-center gap-3"
            aria-label="Center Print e Centertop início"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-white shadow-md ring-1 ring-[#17213b]/5">
              <img
                src={logo}
                alt="Logo Papelaria Center Print"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden leading-none sm:block">
              <span className="block font-display text-lg font-bold tracking-tight text-[#1732c2]">
                CENTER PRINT
              </span>
              <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.2em] text-[#e62b2b]">
                &amp; CENTERTOP
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a
              className="text-[#17213b]/80 transition-colors hover:text-[#e62b2b]"
              href="#marcas"
            >
              Marcas
            </a>
            <a
              className="text-[#17213b]/80 transition-colors hover:text-[#e62b2b]"
              href="#destaques"
            >
              Destaques
            </a>
            <a
              className="text-[#17213b]/80 transition-colors hover:text-[#e62b2b]"
              href="#galeria"
            >
              Galeria
            </a>
            <a
              className="text-[#17213b]/80 transition-colors hover:text-[#e62b2b]"
              href="#contato"
            >
              Contato
            </a>
          </nav>

          <a
            href="https://wa.me/558892243296"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#e62b2b] px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(230,43,43,.28)] transition hover:-translate-y-0.5 hover:bg-[#c92020] active:scale-[0.98]"
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Fale conosco</span>
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(23,50,194,.11),transparent_32%),radial-gradient(circle_at_90%_28%,rgba(230,43,43,.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(243,182,31,.08),transparent_40%)]" />
          <div className="pointer-events-none absolute -right-20 top-24 -z-10 h-64 w-64 rounded-full border-[24px] border-[#1732c2]/[0.06] sm:h-80 sm:w-80 sm:border-[28px]" />
          <div className="pointer-events-none absolute -left-16 bottom-10 -z-10 h-48 w-48 rounded-full border-[18px] border-[#e62b2b]/[0.05]" />

          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10">
            <div className="max-w-2xl animate-rise">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1732c2]/12 bg-white/80 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#1732c2] shadow-sm backdrop-blur-sm">
                <Sparkles size={14} className="text-[#e62b2b]" />
                Dois universos, uma só vitrine
              </div>

              <h1 className="font-display text-[clamp(2.8rem,7.5vw,6.5rem)] font-black leading-[0.88] tracking-[-0.06em] text-[#17213b]">
                Ideias que{" "}
                <span className="text-[#1732c2]">ganham</span> forma
                <span className="text-[#e62b2b]">.</span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-[#536078] sm:text-lg">
                Papelaria, impressões, presentes e achadinhos para deixar seu
                dia mais prático — e muito mais bonito.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#marcas"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1732c2] px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_rgba(23,50,194,.25)] transition hover:-translate-y-1 hover:bg-[#10259a] active:scale-[0.98]"
                >
                  Conheça as lojas
                  <ArrowUpRight size={17} />
                </a>
                <a
                  href="https://www.instagram.com/papelaria_centerprint/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#17213b]/12 bg-white/80 px-6 py-3.5 text-sm font-bold text-[#17213b] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#e62b2b]/40 hover:text-[#e62b2b] active:scale-[0.98]"
                >
                  <Instagram size={17} />
                  Ver no Instagram
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-[#69738b]">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-[#e62b2b]" />
                  Ibicuitinga — CE
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={16} className="text-[#1732c2]" />
                  Seg. a sáb. · 7h–12h | 13h40–17h30
                </span>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative mx-auto w-full max-w-[460px] animate-float lg:mr-0">
              <div className="absolute -left-2 top-6 z-20 rounded-2xl bg-[#e62b2b] px-4 py-3 text-white shadow-xl sm:-left-6">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">
                  desde 1999
                </span>
                <span className="block font-display text-lg font-black sm:text-xl">
                  Feito perto de você
                </span>
              </div>

              <div className="relative rotate-[2deg] overflow-hidden rounded-[1.75rem] border-[8px] border-white bg-white shadow-[0_28px_60px_rgba(23,33,59,.18)] sm:border-[10px]">
                <img
                  src={papelariaProducts}
                  alt="Produtos de papelaria Center Print — mochilas e materiais escolares"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-2 z-20 rounded-2xl bg-[#1732c2] px-4 py-3.5 text-white shadow-xl sm:-right-8">
                <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">
                  duas lojas
                </span>
                <span className="block font-display text-lg font-black sm:text-xl">
                  muitas possibilidades
                </span>
              </div>

              {/* Floating logo badge */}
              <div className="absolute -bottom-2 left-4 z-20 h-16 w-16 overflow-hidden rounded-full border-4 border-white shadow-lg sm:h-20 sm:w-20">
                <img
                  src={logo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Marcas */}
        <section
          id="marcas"
          className="border-y border-[#17213b]/6 bg-white py-16 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-[#69738b]">Escolha seu universo</p>
                <h2 className="section-title mt-2">
                  Duas marcas.
                  <br />
                  <span className="text-[#1732c2]">Um só endereço.</span>
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-[#69738b]">
                Tudo o que você procura em um só lugar, com atendimento próximo
                e novidades toda semana.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {/* Center Print card */}
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-[#1732c2] p-6 text-white shadow-[0_16px_40px_rgba(23,50,194,.18)] transition duration-300 hover:-translate-y-1 sm:p-8">
                <div className="relative z-10 max-w-[58%]">
                  <span className="eyebrow text-white/55">
                    @papelaria_centerprint
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-black leading-[0.95] sm:text-4xl lg:text-5xl">
                    Papelaria
                    <br />
                    <span className="text-[#ffb4ae]">Center Print</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/75">
                    Para estudar, criar, organizar e colocar suas ideias no
                    papel.
                  </p>
                  <a
                    href="https://www.instagram.com/papelaria_centerprint/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#1732c2] transition hover:bg-[#ffdbd8]"
                  >
                    <Instagram size={15} />
                    @papelaria_centerprint
                  </a>
                </div>
                <img
                  src={papelariaProducts}
                  alt="Produtos coloridos de papelaria"
                  className="absolute -bottom-6 -right-8 h-[85%] w-[55%] rounded-l-[1.5rem] object-cover opacity-90 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1732c2] via-[#1732c2]/85 to-transparent" />
              </article>

              {/* Centertop card */}
              <article className="group relative overflow-hidden rounded-[1.75rem] bg-[#f3b61f] p-6 text-[#17213b] shadow-[0_16px_40px_rgba(243,182,31,.2)] transition duration-300 hover:-translate-y-1 sm:p-8">
                <div className="relative z-10 max-w-[58%]">
                  <span className="eyebrow text-[#17213b]/50">
                    @centertop_variedades
                  </span>
                  <h3 className="mt-3 font-display text-3xl font-black leading-[0.95] sm:text-4xl lg:text-5xl">
                    Centertop
                    <br />
                    <span className="text-[#e62b2b]">Variedades</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#17213b]/70">
                    Acessórios, beleza, brinquedos e presentes que fazem
                    sorrir.
                  </p>
                  <a
                    href="https://www.instagram.com/centertop_variedades/"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#17213b] px-4 py-2.5 text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-[#e62b2b]"
                  >
                    <Instagram size={15} />
                    @centertop_variedades
                  </a>
                </div>
                <img
                  src={centertopGrid}
                  alt="Canetas e produtos da Centertop"
                  className="absolute -bottom-6 -right-8 h-[85%] w-[55%] rounded-l-[1.5rem] object-cover opacity-90 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#f3b61f] via-[#f3b61f]/80 to-transparent" />
              </article>
            </div>
          </div>
        </section>

        {/* Categorias */}
        <section className="bg-[#fbfaf7] py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10">
              <p className="eyebrow text-[#69738b]">Do básico ao inesperado</p>
              <h2 className="section-title mt-2">
                Tem um pouco de{" "}
                <span className="text-[#e62b2b]">tudo.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {categories.map((category) => (
                <div
                  key={category.label}
                  className={`category-card category-${category.tone}`}
                >
                  <span className="mb-6 block text-2xl sm:mb-8 sm:text-3xl">
                    {category.icon}
                  </span>
                  <h3 className="font-display text-lg font-black sm:text-xl lg:text-2xl">
                    {category.label}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed opacity-70 sm:mt-2 sm:text-sm">
                    {category.detail}
                  </p>
                  <ChevronRight
                    size={16}
                    className="mt-4 opacity-50 sm:mt-5"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Destaques */}
        <section
          id="destaques"
          className="bg-[#17213b] py-16 text-white sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10 flex flex-col justify-between gap-4 sm:mb-12 sm:flex-row sm:items-end">
              <div>
                <p className="eyebrow text-[#ffb4ae]">Olha só o que chegou</p>
                <h2 className="section-title mt-2 text-white">
                  Destaques da
                  <br />
                  <span className="text-[#f3b61f]">semana.</span>
                </h2>
              </div>
              <a
                href="https://www.instagram.com/papelaria_centerprint/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/65 transition hover:text-white"
              >
                Ver mais no Instagram
                <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="grid gap-4 sm:gap-5 md:grid-cols-3">
              {highlights.map((item, index) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[1.5rem] bg-white/[0.06] ring-1 ring-white/10 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <div className="relative aspect-[1.15] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#17213b] shadow-sm">
                      0{index + 1} / {item.tag}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-display text-xl font-black sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Galeria — Carrossel */}
        <section id="galeria" className="bg-white py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <div className="mb-10 flex flex-col items-center justify-between gap-4 text-center sm:mb-12 sm:flex-row sm:text-left">
              <div>
                <p className="eyebrow text-[#69738b]">Nosso Instagram</p>
                <h2 className="section-title mt-2">
                  Produtos que{" "}
                  <span className="text-[#1732c2]">encantam.</span>
                </h2>
              </div>
              <a
                href="https://www.instagram.com/papelaria_centerprint/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#1732c2] transition hover:text-[#e62b2b]"
              >
                <Instagram size={16} />
                Ver no Instagram
                <ArrowUpRight size={16} />
              </a>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-3 sm:-ml-4">
                {gallery.map((item, i) => (
                  <CarouselItem
                    key={i}
                    className="basis-[78%] pl-3 sm:basis-1/2 sm:pl-4 md:basis-1/3 lg:basis-1/4"
                  >
                    <a
                      href="https://www.instagram.com/papelaria_centerprint/"
                      target="_blank"
                      rel="noreferrer"
                      className="group relative block aspect-square overflow-hidden rounded-2xl bg-[#f0eee9] shadow-sm ring-1 ring-[#17213b]/5 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-[#1732c2]/0 opacity-0 transition duration-300 group-hover:bg-[#1732c2]/45 group-hover:opacity-100">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/95 shadow-md">
                          <Instagram size={22} className="text-[#1732c2]" />
                        </span>
                      </div>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-6 flex items-center justify-center gap-3">
                <CarouselPrevious className="static translate-y-0 border-[#17213b]/15 bg-white text-[#17213b] shadow-sm hover:bg-[#1732c2] hover:text-white hover:border-[#1732c2]" />
                <CarouselNext className="static translate-y-0 border-[#17213b]/15 bg-white text-[#17213b] shadow-sm hover:bg-[#1732c2] hover:text-white hover:border-[#1732c2]" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* Contato */}
        <section
          id="contato"
          className="relative overflow-hidden bg-[#e62b2b] py-16 text-white sm:py-20 lg:py-24"
        >
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[28px] border-white/10 sm:h-96 sm:w-96 sm:border-[35px]" />
          <div className="absolute -bottom-20 -left-12 h-56 w-56 rounded-full border-[20px] border-white/8" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-10">
            <div>
              <p className="eyebrow text-white/60">Passe por aqui</p>
              <h2 className="section-title mt-2 max-w-2xl text-white">
                Sua próxima descoberta
                <br />
                <span className="text-[#f3b61f]">começa aqui.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
                Estamos em Ibicuitinga, prontos para ajudar você a encontrar o
                que precisa — para a escola, para casa ou para presentear.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:w-[360px] lg:grid-cols-1">
              <a
                href="https://wa.me/558892243296"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <MessageCircle size={19} className="shrink-0" />
                <span>
                  <b>WhatsApp</b>
                  <small>(88) 9224-3296</small>
                </span>
                <ArrowUpRight size={18} className="ml-auto shrink-0 opacity-70" />
              </a>
              <a
                href="https://www.instagram.com/papelaria_centerprint/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <Instagram size={19} className="shrink-0" />
                <span>
                  <b>Papelaria Center Print</b>
                  <small>@papelaria_centerprint</small>
                </span>
                <ArrowUpRight size={18} className="ml-auto shrink-0 opacity-70" />
              </a>
              <a
                href="https://www.instagram.com/centertop_variedades/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <AtSign size={19} className="shrink-0" />
                <span>
                  <b>Centertop Variedades</b>
                  <small>@centertop_variedades</small>
                </span>
                <ArrowUpRight size={18} className="ml-auto shrink-0 opacity-70" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#121a2e] py-8 text-white/50">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt=""
              className="h-8 w-8 rounded-full object-cover ring-1 ring-white/20"
            />
            <span>Center Print + Centertop Variedades</span>
          </div>
          <span>Ibicuitinga — Ceará · 7h às 12h | 13h40 às 17h30</span>
        </div>
      </footer>
    </div>
  );
}
