import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CookieBanner from '../CookieBanner';

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('CookieBanner Component', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('ne devrait pas afficher la bannière si le consentement est déjà donné', () => {
    localStorage.setItem('cookie_consent', 'accepted');

    render(<CookieBanner />);

    expect(screen.queryByText(/cookies/i)).not.toBeInTheDocument();
  });

  it('devrait afficher la bannière après 1 seconde si pas de consentement', async () => {
    render(<CookieBanner />);

    // Pas visible immédiatement
    expect(screen.queryByText(/cookies/i)).not.toBeInTheDocument();

    // Avancer le temps de 1 seconde
    jest.advanceTimersByTime(1000);

    // Attendre que le state soit mis à jour
    await waitFor(() => {
      expect(screen.getByText(/cookies/i)).toBeInTheDocument();
    });
  });

  it('devrait enregistrer le consentement et masquer la bannière quand on clique sur Accepter', async () => {
    render(<CookieBanner />);

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/cookies/i)).toBeInTheDocument();
    });

    const acceptButton = screen.getByText('Accepter');
    fireEvent.click(acceptButton);

    expect(localStorage.getItem('cookie_consent')).toBe('accepted');
    expect(screen.queryByText(/cookies/i)).not.toBeInTheDocument();
  });

  it('devrait enregistrer le refus quand on clique sur Refuser', async () => {
    render(<CookieBanner />);

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByText(/cookies/i)).toBeInTheDocument();
    });

    const declineButton = screen.getByText('Refuser');
    fireEvent.click(declineButton);

    expect(localStorage.getItem('cookie_consent')).toBe('declined');
    expect(screen.queryByText(/cookies/i)).not.toBeInTheDocument();
  });

  it('devrait contenir un lien vers la page cookies', async () => {
    render(<CookieBanner />);

    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      const link = screen.getByRole('link', { name: /en savoir plus/i });
      expect(link).toHaveAttribute('href', '/cookies');
    });
  });
});