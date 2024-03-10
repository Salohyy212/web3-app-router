// pages/blog/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import blogLists from '../../utils/blogLists';

const BlogPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Générer un lien vers la page d'image du blog
  const imagePageLink = `/blog/${id}/image`;

  return (
    <div>
      <Header />
      <Sidebar showSidebar={true} blogLists={blogLists} />
      <div style={{ textAlign: 'center', marginTop: '15%', flex: 1 }}>
        <h1>Blog {id}</h1>
        <p>Contenu du Blog {id}</p>
        <p>
          <Link href={imagePageLink} style={{ color: '#000000', textDecoration: 'none' }}>
            Image du Blog {id}
          </Link>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
