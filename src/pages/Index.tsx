import { Linkedin, Youtube, Instagram, Play, FileText, Calendar, Users, Building2, Twitter } from "lucide-react";
import { LetsWorkTogether } from "@/components/ui/lets-work-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/hero.webp"
            alt="Background"
            className="h-full w-full object-cover"
            style={{ objectPosition: "center 20%" }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white text-center">
            Adilson Kremer Junior
          </h1>
          <p className="mt-4 font-body text-sm tracking-editorial uppercase text-white/80 text-center">
            Incorporador Imobiliário
          </p>
          <p className="mt-2 font-body text-xs tracking-wide-editorial uppercase text-white/60 text-center">
            Balneário Camboriú, SC
          </p>

          <div className="mt-10 flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/adilson-kremer-jr-384bb829a/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.instagram.com/adilson_kremer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
            >
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.youtube.com/@adilsona10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
            >
              <Youtube size={20} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.tiktok.com/@adilson.kremer.jr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-music"
              >
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
            <a
              href="https://x.com/adilsonkremer_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="h-12 w-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-110"
            >
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        {/* Quick Links / Destaques */}
        <div className="absolute -bottom-[11.5%] left-0 right-0 z-30 px-6">
          <div className="max-w-md mx-auto">
            <h3 className="font-body text-xs text-white/80 uppercase tracking-widest text-center mb-6">
              Links Recomendados
            </h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center justify-between p-4 bg-background/50 backdrop-blur-md border border-foreground/10 hover:border-foreground/30 transition-all duration-300 group rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <FileText size={20} strokeWidth={1} className="text-foreground/80" />
                  <span className="font-body text-sm tracking-wide text-foreground group-hover:text-foreground/80 transition-colors">
                    Dossiê: O Mercado de Luxo em SC
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-4 bg-background/50 backdrop-blur-md border border-foreground/10 hover:border-foreground/30 transition-all duration-300 group rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Users size={20} strokeWidth={1} className="text-foreground/80" />
                  <span className="font-body text-sm tracking-wide text-foreground group-hover:text-foreground/80 transition-colors">
                    Grupo VIP de Investidores
                  </span>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center justify-between p-4 bg-background/50 backdrop-blur-md border border-foreground/10 hover:border-foreground/30 transition-all duration-300 group rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Building2 size={20} strokeWidth={1} className="text-foreground/80" />
                  <span className="font-body text-sm tracking-wide text-foreground group-hover:text-foreground/80 transition-colors">
                    Solenne Tower - Pré Lançamento
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Presença Pública */}
      <section className="relative w-full max-w-7xl mx-auto">
        <div className="block">
          {/* Image Removed */}

          {/* Content Column */}
          <div className="px-6 py-24 lg:py-32 lg:px-20 flex flex-col justify-center">
            <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-16">
              Presença Pública
            </h2>

            <div className="space-y-12">
              <div className="border-t border-border pt-6">
                <a href="https://www.youtube.com/@adilsona10" target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between mb-8">
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-light text-foreground">
                      YouTube
                    </p>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      Conteúdo sobre mercado imobiliário e incorporação
                    </p>
                  </div>
                  <span className="font-body text-xs tracking-editorial uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Assistir
                  </span>
                </a>

                {/* Video Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Investimento Estratégico em SC",
                      thumbnail: "bg-neutral-800",
                    },
                    {
                      title: "O Futuro da Incorporação",
                      thumbnail: "bg-neutral-700",
                    },
                    {
                      title: "Bastidores: Residencial Horizon",
                      thumbnail: "bg-neutral-600",
                    },
                  ].map((video, index) => (
                    <div
                      key={index}
                      className="group/card cursor-pointer space-y-3"
                    >
                      <div className={`aspect-video w-full overflow-hidden relative ${video.thumbnail}`}>
                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/40 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 transform scale-90 group-hover/card:scale-100">
                          <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <Play size={20} className="text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>
                      <h3 className="font-display text-sm font-light text-foreground group-hover/card:text-muted-foreground transition-colors duration-300">
                        {video.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <a href="https://www.instagram.com/adilson_kremer/" target="_blank" rel="noopener noreferrer" className="group flex items-baseline justify-between">
                  <div>
                    <p className="font-display text-2xl sm:text-3xl font-light text-foreground">
                      Instagram
                    </p>
                    <p className="mt-2 font-body text-sm text-muted-foreground">
                      Bastidores, projetos e posicionamento
                    </p>
                  </div>
                  <span className="font-body text-xs tracking-editorial uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Seguir
                  </span>
                </a>
              </div>

              {/* Instagram Previews */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
                {[1, 2, 3].map((_, i) => (
                  <a
                    href="https://www.instagram.com/adilson_kremer/"
                    key={i}
                    className="group/insta block cursor-pointer aspect-square bg-neutral-800 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover/insta:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/insta:opacity-100 transition-opacity duration-300">
                      <Instagram size={24} className="text-white" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visão e Atuação */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image Column */}
          <div className="hidden lg:block relative min-h-[800px]">
            <img
              src="/presenca-publica.webp"
              alt="Visão e Atuação"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background" />
          </div>

          {/* Content Column */}
          <div className="px-6 py-24 lg:py-32 lg:px-20 flex flex-col justify-center">
            {/* Visão */}
            <div className="mb-20">
              <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-8">
                Visão
              </h2>
              <p className="font-display text-xl sm:text-2xl font-light leading-relaxed text-foreground/90">
                Construir empreendimentos que geram valor duradouro para investidores,
                moradores e para a cidade. Cada projeto é conduzido com rigor técnico,
                transparência e visão de longo prazo.
              </p>
            </div>

            {/* Atuação */}
            <div>
              <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-8">
                Atuação
              </h2>
              <ul className="space-y-4 font-body text-base text-foreground/80">
                <li className="border-t border-border pt-4">Incorporação residencial e mista</li>
                <li className="border-t border-border pt-4">Estruturação de empreendimentos</li>
                <li className="border-t border-border pt-4">Governança e gestão de obras</li>
                <li className="border-t border-border pt-4">Relação com investidores e parceiros</li>
                <li className="border-t border-b border-border py-4">Desenvolvimento urbano estratégico</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-16">
          Na Mídia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              source: "Gazeta do Povo",
              date: "Jan 2026",
              title: "Adilson Kremer Junior e o novo ciclo da incorporação no Paraná",
              image: "bg-neutral-200",
            },
            {
              source: "Valor Econômico",
              date: "Nov 2025",
              title: "Como a governança diferencia incorporadoras de alto padrão",
              image: "bg-neutral-300",
            },
            {
              source: "Folha de Londrina",
              date: "Set 2025",
              title: "A10 Empreendimentos anuncia novo empreendimento residencial",
              image: "bg-neutral-400",
            },
          ].map((news, index) => (
            <a key={index} href="#" className="group block">
              <div
                className={`aspect-[3/2] w-full mb-4 overflow-hidden relative ${news.image}`}
              >
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <p className="font-body text-xs text-muted-foreground/60 mb-2 uppercase tracking-wider">
                {news.source} — {news.date}
              </p>
              <p className="font-display text-lg font-light text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                {news.title}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Let's Work Together */}
      <LetsWorkTogether />



      {/* Rodapé */}
      <footer className="max-w-2xl mx-auto px-6 py-16 text-center">
        <p className="font-body text-xs text-muted-foreground/50 tracking-editorial uppercase">
          © {new Date().getFullYear()} Adilson Kremer Junior
          <br />
          Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
