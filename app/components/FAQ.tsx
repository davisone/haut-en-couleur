'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Intervenez-vous chez les particuliers et les professionnels ?",
    answer: "Oui, nous intervenons aussi bien chez les particuliers que pour les professionnels (commerces, bureaux, locaux d'activité). Nous adaptons nos interventions à vos contraintes horaires et à vos besoins spécifiques."
  },
  {
    question: "Fournissez-vous un devis gratuit ?",
    answer: "Absolument ! Nous proposons un devis gratuit et détaillé après une visite sur place. Cela nous permet d'évaluer précisément vos besoins et de vous proposer la solution la plus adaptée à votre budget."
  },
  {
    question: "Quels sont vos délais d'intervention ?",
    answer: "Nos délais varient selon la période et la nature des travaux. Nous nous engageons à vous fournir un planning précis dès l'acceptation du devis et à le respecter scrupuleusement."
  },
  {
    question: "Quelles zones couvrez-vous ?",
    answer: "Nous intervenons principalement dans la région de Rennes et ses environs : Mordelles, Bruz, Cesson-Sévigné, Vezin-le-Coquet, Saint-Grégoire, Pacé, Betton, Chantepie, et bien d'autres communes en Ille-et-Vilaine (35). N'hésitez pas à nous contacter pour vérifier si nous intervenons dans votre zone."
  },
  {
    question: "Utilisez-vous des peintures écologiques ?",
    answer: "Oui, nous proposons des peintures écologiques et respectueuses de l'environnement. Nous utilisons des produits de qualité, faibles en COV (composés organiques volatils), pour garantir votre santé et celle de votre famille."
  },
  {
    question: "Combien de temps durent les travaux de peinture ?",
    answer: "La durée dépend de la surface à peindre et de la complexité du projet. Pour une pièce standard, comptez 1 à 2 jours. Pour un appartement complet, entre 3 et 7 jours. Nous vous fournirons un calendrier précis lors de l'établissement du devis."
  },
  {
    question: "Dois-je vider mes pièces avant votre intervention ?",
    answer: "Idéalement, oui, mais ce n'est pas obligatoire. Nous pouvons déplacer vos meubles et les protéger avec des bâches. Cependant, pour un travail optimal et plus rapide, il est préférable que les pièces soient le plus dégagées possible."
  },
  {
    question: "Proposez-vous des conseils pour le choix des couleurs ?",
    answer: "Absolument ! Nous vous accompagnons dans le choix des couleurs et des finitions adaptées à votre projet. Notre expérience nous permet de vous conseiller sur les harmonies, les effets lumineux et les tendances actuelles."
  },
  {
    question: "Quelles garanties offrez-vous sur vos travaux ?",
    answer: "Nous garantissons la qualité de nos travaux et utilisons uniquement des matériaux de première qualité. En cas de problème lié à notre intervention, nous nous engageons à intervenir rapidement pour corriger tout défaut."
  },
  {
    question: "Comment se déroule le paiement ?",
    answer: "Le paiement se fait généralement en plusieurs fois : un acompte à la commande, un paiement intermédiaire pour les chantiers importants, et le solde à la fin des travaux après votre validation. Nous acceptons les paiements par chèque, virement bancaire ou espèces."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Vous avez des questions ? Nous avons les réponses !
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-800 flex-1">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA après FAQ */}
        <div className="mt-12 text-center p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Vous ne trouvez pas la réponse à votre question ?
          </h3>
          <p className="text-gray-600 mb-6">
            N&apos;hésitez pas à nous contacter directement, nous serons ravis de vous répondre !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33666284458"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              06 66 28 44 58
            </a>
            <a
              href="mailto:sandrinedavison@hotmail.fr"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-primary border-2 border-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}