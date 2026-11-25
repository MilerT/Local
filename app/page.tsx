"use client";

import { useEffect, useRef, useState } from "react";
import "./antisa.css";

interface ShotItem {
  id: string;
  className: string;
  src: string;
  title: string;
  subtitle: string;
  alt: string;
  label: string;
  width: number;
  height: number;
  lazy?: boolean;
}

const SHOTS: ShotItem[] = [
  {
    id: "jardin",
    className: "shot jardin",
    src: "assets/panorama.jpg",
    title: "Jardín",
    subtitle: "El césped abre la celebración",
    alt: "Jardín amplio de Antisa con el pabellón blanco al fondo",
    label: "Ampliar foto: Jardín",
    width: 1774,
    height: 887,
  },
  {
    id: "pabellon",
    className: "shot pabellon",
    src: "assets/pabellon.jpg",
    title: "Pabellón techado",
    subtitle: "Sombra si el cielo cambia",
    alt: "Pabellón blanco con arcos abiertos hacia el jardín",
    label: "Ampliar foto: Pabellón techado",
    width: 1440,
    height: 1440,
  },
  {
    id: "entrada",
    className: "shot entrada",
    src: "assets/entrada.jpg",
    title: "Entrada",
    subtitle: "El primer gesto del día",
    alt: "Acceso principal de Antisa con portón de listones",
    label: "Ampliar foto: Entrada",
    width: 1440,
    height: 1440,
  },
  {
    id: "cocina",
    className: "shot cocina",
    src: "assets/cocina.jpg",
    title: "Cocina",
    subtitle: "Sin salir del local",
    alt: "Cocina con una mesa de trabajo de acero y una campana extractora",
    label: "Ampliar foto: Cocina",
    width: 1440,
    height: 1440,
    lazy: true,
  },
  {
    id: "banos",
    className: "shot banos",
    src: "assets/banos.jpg",
    title: "Baños",
    subtitle: "En el mismo predio",
    alt: "Lavabos y espejo en los baños del local",
    label: "Ampliar foto: Baños",
    width: 1440,
    height: 1440,
    lazy: true,
  },
];

const NAV_SECTIONS = [
  { href: "#local", id: "local", label: "El local" },
  { href: "#dia", id: "dia", label: "El día" },
  { href: "#celebraciones", id: "celebraciones", label: "Celebraciones" },
  { href: "#reservar", id: "reservar", label: "Reservar" },
];

const EVENT_VENUE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "Antisa",
  description:
    "Local de eventos en Arequipa con jardín, pabellón techado, cocina y baños. Se alquila para cumpleaños, bodas, reuniones y eventos de empresa.",
  url: "https://antisa.site",
  image: "https://antisa.site/local/portada.jpg",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Arequipa",
    addressRegion: "Arequipa",
    addressCountry: "PE",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Jardín", value: true },
    {
      "@type": "LocationFeatureSpecification",
      name: "Pabellón techado",
      value: true,
    },
    { "@type": "LocationFeatureSpecification", name: "Cocina", value: true },
    { "@type": "LocationFeatureSpecification", name: "Baños", value: true },
  ],
  potentialAction: {
    "@type": "ReserveAction",
    target: "https://antisa.site/portal/reservas",
    name: "Solicitar una fecha",
  },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClear, setIsClear] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("local");
  const [dockOn, setDockOn] = useState(false);
  const [shotIndex, setShotIndex] = useState<number>(0);

  const headerRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const reserveRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onScroll() {
      const solid = window.scrollY > 28 || menuOpen;
      setIsClear(!solid);

      const headerHeight = headerRef.current?.offsetHeight ?? 74;
      const mark = window.scrollY + headerHeight + 80;
      let current = NAV_SECTIONS[0].id;

      for (const item of NAV_SECTIONS) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= mark) {
          current = item.id;
        }
      }
      setActiveSection(current);

      if (heroRef.current && reserveRef.current) {
        const pastHero = heroRef.current.getBoundingClientRect().bottom < 72;
        const beforeReserve =
          reserveRef.current.getBoundingClientRect().top >
          window.innerHeight - 24;
        setDockOn(pastHero && beforeReserve);
      }
    }

    onScroll();
    document.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const openShot = (index: number, buttonEl: HTMLButtonElement) => {
    openerRef.current = buttonEl;
    setShotIndex(index);
    dialogRef.current?.showModal();
  };

  const closeDialog = () => {
    dialogRef.current?.close();
  };

  const showShot = (next: number) => {
    setShotIndex((next + SHOTS.length) % SHOTS.length);
  };

  const activeShot = SHOTS[shotIndex];

  return (
    <div className="antisa-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EVENT_VENUE_SCHEMA) }}
      />

      <a className="skip" href="#contenido">
        Ir al contenido
      </a>

      <header
        ref={headerRef}
        className={`header ${isClear ? "is-clear" : ""} ${menuOpen ? "menu-open" : ""}`}
      >
        <div className="header-inner">
          <a className="brand" href="#inicio">
            <img src="assets/logo-antisa.png" alt="" width={44} height={44} />
            <span>
              <span className="brand-name">Antisa</span>
              <span className="brand-caption">Local de eventos</span>
            </span>
          </a>
          <nav
            id="nav"
            className={`site-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Secciones"
          >
            {NAV_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={activeSection === item.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <a
              className="portal-link"
              href="https://antisa.site/portal/reservas"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="short">Pedir fecha</span>
              <span className="full"> en el portal</span>
            </a>
            <button
              className="nav-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="nav"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? "Cerrar" : "Menú"}
            </button>
          </div>
        </div>
      </header>

      <main id="contenido" tabIndex={-1}>
        <section ref={heroRef} className="hero" id="inicio">
          <img
            src="assets/portada.jpg"
            alt="El pabellón techado de Antisa junto al jardín"
            width={2048}
            height={1365}
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true"></div>
          <div className="wrap hero-stage">
            <p className="kicker">
              <i></i> Local de eventos en Arequipa, Perú
            </p>
            <h1 id="titulo">
              <span className="word">Un jardín</span>
              <span className="word">un techo</span>
              <span className="word word-green">y el día entero</span>
            </h1>
            <p className="hero-lead">
              Una sola celebración en el local: cumpleaños, boda, reunión o
              evento de empresa. Césped, pabellón, cocina y baños.
            </p>
            <div className="actions">
              <a
                className="button"
                href="https://antisa.site/portal/reservas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar una fecha
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="button button-quiet" href="#local">
                Recorrer el local
              </a>
            </div>
          </div>
          <p className="hero-edge" aria-hidden="true">
            Antisa · Arequipa
          </p>
          <a className="hero-down" href="#local">
            <span>Bajar</span>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6 9.5L12 15l6-5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </section>

        <div className="ribbon" aria-hidden="true">
          <div className="ribbon-track">
            <p>
              Cumpleaños <span>·</span> Bodas <span>·</span> Aniversarios{" "}
              <span>·</span> Reuniones de familia <span>·</span> Eventos de
              empresa <span>·</span> Almuerzos <span>·</span> Ceremonia al
              aire libre <span>·</span> Mesa bajo techo <span>·</span>
            </p>
            <p>
              Cumpleaños <span>·</span> Bodas <span>·</span> Aniversarios{" "}
              <span>·</span> Reuniones de familia <span>·</span> Eventos de
              empresa <span>·</span> Almuerzos <span>·</span> Ceremonia al
              aire libre <span>·</span> Mesa bajo techo <span>·</span>
            </p>
          </div>
        </div>

        <section className="promise" aria-labelledby="promesa-titulo">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Por qué se reserva así</p>
                <h2 id="promesa-titulo">
                  El día queda separado, escrito y a tu horario.
                </h2>
              </div>
            </div>
            <ol className="promise-list">
              <li className="reveal">
                <span>01</span>
                <h3>El día es tuyo</h3>
                <p>
                  Entre una celebración y la siguiente queda un día libre. Nadie
                  arma el evento de al lado mientras el tuyo sigue en pie.
                </p>
              </li>
              <li className="reveal">
                <span>02</span>
                <h3>Hasta 18 horas</h3>
                <p>
                  Empieza y termina el mismo día. El horario lo propones tú en
                  el portal, de la llegada al cierre.
                </p>
              </li>
              <li className="reveal">
                <span>03</span>
                <h3>Todo queda escrito</h3>
                <p>
                  El alquiler, la barra y lo que se sume se conversan para esa
                  fecha y se anotan en la reserva. Lo ves en tu portal.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="local" id="local" aria-labelledby="local-titulo">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">El terreno</p>
                <h2 id="local-titulo">Conoce el local</h2>
              </div>
              <p>
                Jardín, pabellón, entrada, cocina y baños. Abre una foto y
                recorre el lugar antes de pedir la fecha.
              </p>
            </div>
            <div className="mosaic">
              {SHOTS.map((shot, idx) => (
                <button
                  key={shot.id}
                  className={shot.className}
                  type="button"
                  aria-haspopup="dialog"
                  aria-label={shot.label}
                  onClick={(e) => openShot(idx, e.currentTarget)}
                >
                  <img
                    src={shot.src}
                    alt=""
                    width={shot.width}
                    height={shot.height}
                    loading={shot.lazy ? "lazy" : undefined}
                  />
                  <span>
                    {shot.title} <small>{shot.subtitle}</small>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="spaces" aria-labelledby="espacios-titulo">
          <div className="wrap">
            <p className="eyebrow">Qué se alquila</p>
            <h2 id="espacios-titulo">Cuatro espacios. Una sola reserva.</h2>
            <p className="spaces-lead">
              El alquiler es el local completo. La dirección y el aforo se
              confirman cuando se coordina la fecha.
            </p>
            <ul className="space-grid">
              <li className="reveal">
                <h3>Jardín</h3>
                <p>Césped para la ceremonia, la foto, el brindis o el juego.</p>
              </li>
              <li className="reveal">
                <h3>Pabellón</h3>
                <p>
                  Techo y arcos abiertos. La mesa sigue si sale el sol de más, o
                  si se nubla.
                </p>
              </li>
              <li className="reveal">
                <h3>Cocina</h3>
                <p>
                  El equipo que cocina trabaja a unos pasos, dentro del mismo
                  local.
                </p>
              </li>
              <li className="reveal">
                <h3>Baños</h3>
                <p>Quedan en el predio. Tus invitados no cruzan a otro lugar.</p>
              </li>
            </ul>
            <div className="extras reveal">
              <div>
                <p className="eyebrow">Si la mesa los pide</p>
                <h3>Barra, sillas y fundas</h3>
                <p>
                  Se suman a la reserva cuando el evento las necesita. La barra
                  se cotiza con la fecha. Las sillas y las fundas salen del
                  inventario de ese momento.
                </p>
              </div>
              <ul>
                <li>Barra</li>
                <li>Sillas</li>
                <li>Fundas</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="day" id="dia" aria-labelledby="dia-titulo">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Cómo se vive</p>
                <h2 id="dia-titulo">
                  Del jardín a la mesa, sin cambiar de local.
                </h2>
              </div>
              <p>
                Un solo terreno para todo el día. Tú propones el horario; Antisa
                confirma que la fecha siga libre.
              </p>
            </div>
            <ol className="timeline">
              <li className="reveal">
                <span>01</span>
                <h3>Llegan al jardín</h3>
                <p>
                  El césped es el primer escenario: la bienvenida, la foto, la
                  ceremonia.
                </p>
              </li>
              <li className="reveal">
                <span>02</span>
                <h3>Pasan al pabellón</h3>
                <p>
                  La mesa queda bajo techo, con el jardín todavía a la vista.
                </p>
              </li>
              <li className="reveal">
                <span>03</span>
                <h3>La cocina sigue cerca</h3>
                <p>
                  Quien cocina no sale del local. El servicio camina unos
                  metros.
                </p>
              </li>
              <li className="reveal">
                <span>04</span>
                <h3>El día de al lado queda en blanco</h3>
                <p>
                  Al cerrar, nadie entra al día siguiente a montar otra fiesta.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <aside className="invite">
          <div className="wrap invite-inner">
            <div>
              <p className="eyebrow">El calendario</p>
              <h2>Mira qué días siguen libres.</h2>
              <p>
                Las fechas ocupadas se ven sin datos de otros clientes. Si el
                día te sirve, envías la propuesta ahí mismo.
              </p>
            </div>
            <a
              className="button"
              href="https://antisa.site/portal/reservas"
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir el portal
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </aside>

        <section
          className="events"
          id="celebraciones"
          aria-labelledby="eventos-titulo"
        >
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Para quién es</p>
                <h2 id="eventos-titulo">El mismo lugar, otra celebración.</h2>
              </div>
              <p>
                No hay un montaje distinto por tipo de evento. Cambia la mesa,
                no el terreno.
              </p>
            </div>
            <ol className="event-list">
              <li className="reveal">
                <span
                  className="swatch"
                  style={{ background: "#c6e3b2" }}
                ></span>
                <h3>Cumpleaños</h3>
                <p>
                  Torta en el jardín, sombra en el pabellón y césped para que la
                  tarde se mueva.
                </p>
              </li>
              <li className="reveal">
                <span
                  className="swatch"
                  style={{ background: "#8fb58a" }}
                ></span>
                <h3>Bodas</h3>
                <p>
                  La ceremonia al aire libre y la reunión que sigue, bajo techo,
                  sin irse a otro local.
                </p>
              </li>
              <li className="reveal">
                <span
                  className="swatch"
                  style={{ background: "#d7e7cc" }}
                ></span>
                <h3>Reuniones</h3>
                <p>
                  Almuerzo de familia, aniversario o brindis, con la cocina en
                  el mismo predio.
                </p>
              </li>
              <li className="reveal">
                <span
                  className="swatch"
                  style={{ background: "#6f8f68" }}
                ></span>
                <h3>Empresas</h3>
                <p>
                  Una jornada fuera de la oficina. Un solo espacio que reservar y
                  un solo día que cuidar.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="notes" aria-labelledby="notas-titulo">
          <div className="wrap notes-grid">
            <div>
              <p className="eyebrow">Antes de elegir el día</p>
              <h2 id="notas-titulo">Así se cuida la fecha.</h2>
            </div>
            <ul>
              <li>
                El evento empieza y termina el mismo día, y puede durar hasta 18
                horas.
              </li>
              <li>
                Cada celebración deja libre el día anterior y el siguiente. Si
                el sábado está tomado, el viernes y el domingo no se pueden
                iniciar.
              </li>
              <li>
                El pago se hace por el medio que acuerdes con Antisa: efectivo,
                transferencia, Yape, Plin, tarjeta o depósito. El movimiento
                queda en tu portal, junto con la reserva y los documentos.
              </li>
            </ul>
          </div>
        </section>

        <section className="faq" id="preguntas" aria-labelledby="faq-titulo">
          <div className="wrap faq-grid">
            <div>
              <p className="eyebrow">Preguntas</p>
              <h2 id="faq-titulo">Lo que suele frenar la reserva.</h2>
              <p className="faq-lead">
                Si la tuya no está aquí, escríbela en la solicitud. Antisa
                responde en esa conversación.
              </p>
            </div>
            <div className="faq-list">
              <details>
                <summary>¿El evento puede pasar de un día a otro?</summary>
                <div className="answer">
                  <p>
                    No. Empieza y termina el mismo día, con un máximo de 18
                    horas. El horario lo propones al pedir la fecha.
                  </p>
                </div>
              </details>
              <details>
                <summary>¿Puedo tomar el día siguiente a otro evento?</summary>
                <div className="answer">
                  <p>
                    No. Entre una celebración y la siguiente queda un día libre.
                    Si el sábado está tomado, no se inicia un evento el viernes
                    ni el domingo.
                  </p>
                </div>
              </details>
              <details>
                <summary>¿El precio está publicado?</summary>
                <div className="answer">
                  <p>
                    Se conversa para cada fecha. El alquiler del local y la
                    barra se acuerdan entonces. Las sillas y las fundas salen
                    del inventario de ese momento. Lo acordado queda escrito en
                    la reserva.
                  </p>
                </div>
              </details>
              <details>
                <summary>¿Dónde queda y cuántas personas entran?</summary>
                <div className="answer">
                  <p>
                    Antisa está en Arequipa, Perú. La dirección exacta y el
                    aforo se confirman al coordinar la fecha, antes de cerrar la
                    reserva.
                  </p>
                </div>
              </details>
              <details>
                <summary>¿Qué incluye el alquiler?</summary>
                <div className="answer">
                  <p>
                    El jardín, el pabellón techado, la cocina y los baños. La
                    barra, las sillas y las fundas se suman solo si el evento
                    las necesita.
                  </p>
                </div>
              </details>
              <details>
                <summary>¿Cómo pago y dónde veo el movimiento?</summary>
                <div className="answer">
                  <p>
                    Efectivo, transferencia, Yape, Plin, tarjeta o depósito: el
                    medio se acuerda contigo. Cada pago queda anotado en el
                    portal, junto a tus reservas y tus documentos.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <section
          ref={reserveRef}
          className="reserve"
          id="reservar"
          aria-labelledby="reserva-titulo"
        >
          <div className="wrap">
            <p className="eyebrow eyebrow-light">Tu fecha</p>
            <h2 id="reserva-titulo">
              Pide el día. La respuesta llega en el portal.
            </h2>
            <p className="reserve-lead">
              Entras, miras qué días siguen libres y cuentas el evento. Si la
              fecha sigue disponible, se acuerdan el alquiler, los extras y el
              adelanto para separarla.
            </p>
            <ol className="steps">
              <li className="reveal">
                <span>01</span>
                <h3>Revisa el calendario</h3>
                <p>Las fechas ocupadas se ven sin datos de otros clientes.</p>
              </li>
              <li className="reveal">
                <span>02</span>
                <h3>Cuenta el evento</h3>
                <p>
                  Tipo, nombre, horario, invitados y, si quieres, un mensaje.
                </p>
              </li>
              <li className="reveal">
                <span>03</span>
                <h3>Recibe la respuesta</h3>
                <p>
                  Antisa contesta en esa misma conversación. Nada queda solo en
                  un chat suelto.
                </p>
              </li>
            </ol>
            <ul className="pays" aria-label="Medios de pago">
              <li>Efectivo</li>
              <li>Transferencia</li>
              <li>Yape</li>
              <li>Plin</li>
              <li>Tarjeta</li>
              <li>Depósito</li>
            </ul>
            <div className="actions">
              <a
                className="button"
                href="https://antisa.site/portal/reservas"
                target="_blank"
                rel="noopener noreferrer"
              >
                Solicitar una fecha
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                className="quiet-link"
                href="https://antisa.site/portal/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ya tengo cuenta
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <a className="brand" href="#inicio">
            <img src="assets/logo-antisa.png" alt="" width={44} height={44} />
            <span>
              <span className="brand-name">Antisa</span>
              <span className="brand-caption">Jardín y pabellón · Arequipa</span>
            </span>
          </a>
          <nav aria-label="Pie de página">
            <a href="#local">El local</a>
            <a href="#dia">El día</a>
            <a href="#celebraciones">Celebraciones</a>
            <a href="#preguntas">Preguntas</a>
            <a href="#reservar">Reservar</a>
          </nav>
          <a
            className="quiet-link"
            href="https://antisa.site/portal/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portal de clientes
          </a>
        </div>
      </footer>

      <a
        className={`dock ${dockOn ? "is-on" : ""}`}
        href="https://antisa.site/portal/reservas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>¿Ya tienes el día?</span>
        <strong>Solicitar fecha</strong>
      </a>

      <dialog
        ref={dialogRef}
        id="visor"
        className="antisa-dialog"
        aria-labelledby="visor-title"
        onClose={() => openerRef.current?.focus()}
        onClick={(e) => {
          if (e.target === dialogRef.current) closeDialog();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            showShot(shotIndex + 1);
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            showShot(shotIndex - 1);
          }
        }}
      >
        <div className="visor">
          <div className="visor-bar">
            <h3 id="visor-title">{activeShot.title}</h3>
            <button
              id="visor-close"
              type="button"
              aria-label="Cerrar galería"
              onClick={closeDialog}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <img id="visor-img" src={activeShot.src} alt={activeShot.alt} />
          <div className="visor-nav">
            <button
              id="visor-prev"
              type="button"
              aria-label="Foto anterior"
              onClick={() => showShot(shotIndex - 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M14.5 6.5L9 12l5.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <span id="visor-count">
              {shotIndex + 1} / {SHOTS.length}
            </span>
            <button
              id="visor-next"
              type="button"
              aria-label="Siguiente foto"
              onClick={() => showShot(shotIndex + 1)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M9.5 6.5L15 12l-5.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
