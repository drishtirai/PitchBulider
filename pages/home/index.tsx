import React from 'react';
import Link from 'next/link';

import { HeaderNavbar, Footer } from '@component';

import styles from './style.module.scss';

export default function Home() {
    return (
        

            
                    <div className={styles.crBtn}>
                        <Link href="/resume-builder">
                            <a>Pitch Builder</a>
                        </Link>
                    </div>
               
    );
}
