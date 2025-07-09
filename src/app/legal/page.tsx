'use client';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

export default function LegalMentionsPage() {
  const { language } = useLanguage();

  const content = {
    fr: [
      ["Éditeur du site", "Ce site est édité à titre personnel dans le cadre d’un projet gratuit, non commercial."],
      ["Responsable de la publication", "Nom : Christophe Pires\nContact : xyweb.services@gmail.com"],
      ["Hébergement", "Hébergé par Hostinger ."],
      ["Propriété intellectuelle", "L’ensemble des contenus de ce site et de l’extension DealScout (interfaces, textes, visuels, design, logique) est protégé par le droit d’auteur. Toute reproduction, diffusion ou décompilation non autorisée est strictement interdite."],
      ["Protection des données personnelles", "DealScout ne collecte aucune donnée personnelle. L’analyse s’exécute uniquement dans le navigateur de l’utilisateur. Les messages envoyés via le formulaire de contact ne sont ni stockés, ni exploités à d’autres fins."],
      ["Responsabilité", "L’auteur décline toute responsabilité en cas de :\n- mauvaise détection d’une offre,\n- bug, indisponibilité ou dysfonctionnement de l’extension,\n- dommage matériel, physique ou financier lié à l’utilisation de DealScout.\n\nL’utilisateur reste seul responsable de la manière dont il utilise l’outil."],
    ],
    en: [
      ["Publisher", "This site is published as part of a personal, free and non-commercial project."],
      ["Publication director", "Name: Christophe Pires\nContact: xyweb.services@gmail.com"],
      ["Hosting", "Hosted by Hostinger."],
      ["Intellectual Property", "All content related to DealScout (interface, visuals, text, logic) is protected by copyright. Any unauthorized reproduction, distribution or reverse-engineering is strictly prohibited."],
      ["Privacy", "DealScout collects no personal data. All detection is executed locally in the user’s browser. Messages sent through the contact form are not stored or used for any other purpose."],
      ["Liability", "The author declines all responsibility for:\n- inaccurate offer detection\n- bugs, downtime or malfunction of the extension\n- any material, physical or financial damage caused by using DealScout.\n\nUsers remain solely responsible for their usage."],
    ],
    es: [
      ["Editor del sitio", "Este sitio ha sido creado como parte de un proyecto personal, gratuito y no comercial."],
      ["Responsable de la publicación", "Nombre: Christophe Pires\nContacto: xyweb.services@gmail.com"],
      ["Alojamiento", "Alojado en Hostinger."],
      ["Propiedad intelectual", "Todos los contenidos relacionados con DealScout (interfaz, textos, lógica, diseño) están protegidos por derechos de autor. Se prohíbe toda reproducción, distribución o ingeniería inversa no autorizada."],
      ["Protección de datos personales", "DealScout no recopila ningún dato personal. El análisis se realiza exclusivamente en el navegador del usuario. Los mensajes enviados mediante el formulario de contacto no se almacenan ni se utilizan con ningún otro fin."],
      ["Responsabilidad", "El creador no se hace responsable de:\n- errores en la detección de ofertas\n- fallos, errores o indisponibilidad de la extensión\n- daños físicos, materiales o financieros derivados del uso de DealScout.\n\nEl usuario es el único responsable de cómo utiliza la herramienta."],
    ],
  };

  return (
    <main className="max-w-3xl min-h-screen mx-auto px-4 py-12 text-white flex flex-col justify-center">

      <h1 className="text-3xl font-bold mb-8 text-center">
        {language === 'fr'
          ? 'Mentions légales'
          : language === 'es'
          ? 'Aviso legal'
          : 'Legal Notice'}
      </h1>

      <div className="space-y-6">
        {content[language].map(([title, body], index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="whitespace-pre-line text-white/80">{body}</p>
          </section>
        ))}
      </div>
     <div className="mt-8 flex justify-center">
  <Link
    href="/"
    className="inline-block px-6 py-3 border rounded-lg text-white hover:bg-black hover:text-white transition"
  >
    Back to Homepage
  </Link>
</div>
    </main>
  );
}
