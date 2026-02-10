import { Linkedin, Youtube, Instagram } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-foreground">
          Rafael Monteiro
        </h1>
        <p className="mt-4 font-body text-sm tracking-editorial uppercase text-muted-foreground">
          Incorporador Imobiliário
        </p>
        <p className="mt-2 font-body text-xs tracking-wide-editorial uppercase text-muted-foreground/60">
          São Paulo, Brasil
        </p>

        <div className="mt-10 flex items-center gap-6">
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Youtube size={18} strokeWidth={1.5} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Instagram size={18} strokeWidth={1.5} />
          </a>
        </div>
      </section>

      {/* Presença Pública */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-16">
          Presença Pública
        </h2>

        <div className="space-y-12">
          <div className="border-t border-border pt-6">
            <a href="#" className="group flex items-baseline justify-between">
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
          </div>

          <div className="border-t border-border pt-6">
            <a href="#" className="group flex items-baseline justify-between">
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
        </div>
      </section>

      {/* Visão */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-12">
          Visão
        </h2>
        <p className="font-display text-xl sm:text-2xl font-light leading-relaxed text-foreground/90">
          Construir empreendimentos que geram valor duradouro para investidores,
          moradores e para a cidade. Cada projeto é conduzido com rigor técnico,
          transparência e visão de longo prazo.
        </p>
      </section>

      {/* Atuação */}
      <section className="max-w-2xl mx-auto px-6 py-24">
        <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-12">
          Atuação
        </h2>
        <ul className="space-y-4 font-body text-base text-foreground/80">
          <li className="border-t border-border pt-4">Incorporação residencial e mista</li>
          <li className="border-t border-border pt-4">Estruturação de empreendimentos</li>
          <li className="border-t border-border pt-4">Governança e gestão de obras</li>
          <li className="border-t border-border pt-4">Relação com investidores e parceiros</li>
          <li className="border-t border-b border-border py-4">Desenvolvimento urbano estratégico</li>
        </ul>
      </section>

      {/* Transição Corporativa — A10 */}
      <section className="border-t border-border">
        <div className="max-w-2xl mx-auto px-6 py-24">
          <h2 className="font-display text-xs tracking-wide-editorial uppercase text-muted-foreground mb-8">
            A10 Incorporadora
          </h2>
          <p className="font-body text-sm leading-relaxed text-muted-foreground max-w-lg mb-10">
            A A10 Incorporadora é o braço institucional de atuação no mercado
            imobiliário. Conheça os projetos, a equipe e a governança da empresa.
          </p>
          <a
            href="#"
            className="inline-block font-body text-xs tracking-editorial uppercase border border-foreground/20 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Acessar A10 Incorporadora
          </a>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="max-w-2xl mx-auto px-6 py-16">
        <p className="font-body text-xs text-muted-foreground/50 tracking-editorial uppercase">
          © {new Date().getFullYear()} Rafael Monteiro
        </p>
      </footer>
    </div>
  );
};

export default Index;
