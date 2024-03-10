// pages/blog/[id]/image.tsx
import React from 'react';
import { useRouter } from 'next/router';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Sidebar from '../../../components/Sidebar';
import blogLists from '@/utils/blogLists';

const BlogImagePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Générer une URL pour une image aléatoire avec lorem picsum
  const randomImageURL = `https://picsum.photos/400/300?random=${id}`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <Header />
      <Sidebar showSidebar={true} blogLists={blogLists} />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginTop: '2rem' }}>Image du Blog {id}</h1>
        {/* Afficher l'image aléatoire */}
        <img src={randomImageURL} alt={`Image du Blog ${id}`} style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '1rem' }} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogImagePage;
