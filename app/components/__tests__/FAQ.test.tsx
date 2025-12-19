import { render, screen, fireEvent } from '@testing-library/react';
import FAQ from '../FAQ';

describe('FAQ Component', () => {
  it('devrait afficher le titre', () => {
    render(<FAQ />);
    const title = screen.getByText('Questions fréquentes');
    expect(title).toBeInTheDocument();
  });

  it('devrait afficher toutes les questions', () => {
    render(<FAQ />);

    // Vérifier qu'il y a au moins quelques questions affichées
    expect(screen.getByText(/Intervenez-vous chez les particuliers et les professionnels/i)).toBeInTheDocument();
    expect(screen.getByText(/Fournissez-vous un devis gratuit/i)).toBeInTheDocument();
  });

  it('devrait ouvrir et fermer un item FAQ au clic', () => {
    render(<FAQ />);

    // Trouver le premier bouton de question
    const firstButton = screen.getByText(/Intervenez-vous chez les particuliers et les professionnels/i);

    // Cliquer pour ouvrir
    fireEvent.click(firstButton);

    // La réponse devrait être visible (dans ce cas, cherchons un mot clé de la réponse)
    expect(screen.getByText(/aussi bien chez les particuliers que pour les professionnels/i)).toBeInTheDocument();
  });

  it('devrait fermer un item ouvert quand on clique à nouveau', () => {
    render(<FAQ />);

    const firstButton = screen.getByText(/Intervenez-vous chez les particuliers et les professionnels/i);

    // Ouvrir
    fireEvent.click(firstButton);
    const answer = screen.getByText(/aussi bien chez les particuliers que pour les professionnels/i);
    expect(answer).toBeVisible();

    // Fermer
    fireEvent.click(firstButton);
    // La réponse devrait toujours exister mais son container devrait être masqué
    expect(answer.parentElement?.parentElement).toHaveClass('max-h-0');
  });
});