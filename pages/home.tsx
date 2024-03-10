import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import blogLists from '@/utils/blogLists';
import Link from 'next/link';


const home: React.FC = () => {
    return (
        <div>
            <Header />
            <div style={{ textAlign: 'center', marginTop: '15%', flex: 1 }}>
                <h1>Home</h1>
                <h2>Blog lists</h2>
                <ul style={{ listStyle: 'none', padding: 0, cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}>
                    {blogLists.map(blog => (
                        <li key={blog.id}>
                            <Link href={blog.link} style={{ color: '#000000', textDecoration: 'none' }}>
                                {`Blog ${blog.id}`}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
};

export default home;