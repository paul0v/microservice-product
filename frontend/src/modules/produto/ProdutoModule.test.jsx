import { render, waitFor } from '@testing-library/react';
import ProdutoModule from './ProdutoModule';
import { describe, it, expect, vi } from 'vitest';

const mockProducts = Array.from({ length: 100 }, (_, i) => ({ idProduct: i + 1, description: `Produto ${i + 1}`, price: 10 }));

describe('ProdutoModule', () => {
  it('retorna 100 produtos do endpoint', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockProducts,
    }));
    render(<ProdutoModule />);
    await waitFor(() => {
      // Verifica se todos os produtos estão renderizados
      expect(document.querySelectorAll('tbody tr').length).toBe(100);
    });
  });
});
