export default function useBrowseById() {
    return (link) => {
      const el = document.getElementById(link);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
  }
  