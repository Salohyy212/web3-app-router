// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const IndexPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/home');
  }, []);

  return null;
};

export default IndexPage;
