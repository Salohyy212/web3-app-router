import React from "react";
import Link from 'next/link';
import blogLists from '../utils/blogLists';


interface Blog {
    id: number;
    link: string;
}

interface SidebarProps {
    showSidebar: boolean;
    blogLists: Blog[];
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', position: 'fixed', left: 0, top: '19%', marginLeft: '10px', borderRadius: '10px' }}>
            {showSidebar && (
                <aside style={{ backgroundColor: '#003366', color: '#fff', textAlign:'center', padding: '10px', width: '150px', borderRadius: '10px', paddingBottom:'15%',paddingTop:'20%' }}>
                    <ul style={{ listStyle: 'none', padding: 0, cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }}  >
                        {blogLists.map(blog => (
                            <li key={blog.id} style={{ marginBottom: '15px', cursor: 'pointer', transition: 'transform 0.2s ease-in-out' }} className="zoom-link"> 
                                <Link href={blog.link} className="zoom-link" style={{ color: '#fff', textDecoration: 'none' }}>
                                    {`Blog ${blog.id}`}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </div>
    );
};

export default Sidebar;