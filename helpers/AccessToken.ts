export function getAccessToken(): string | null {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accesstoken');
      return token ? token : null;

    }
    return null;
  }
  