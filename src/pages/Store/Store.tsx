import styles from './Store.module.css'
import Header from "../../components/Header/Header";
import { useState } from 'react';
import { constants } from 'buffer';
import axios from 'axios'

interface Store {
  uuid: string
  title: string
  content: string
  isShow: boolean,
  createdAt: string;
}
function Store () {
  const [list, setList] = useState<Store[]>([{
    uuid: "hongjea",
    title: "hongjea",
    content: "hongjea",
    isShow: true,
    createdAt: "2023-11-11T07:18:08.996Z"
  }]);
  
  const [page, setPage] = useState<number>(11)

  return (
    <div>
      <Header />
      <div>
        <div className={styles.store_container}>
          {list.map((it, index) => { 
            const createdAt = new Date(it.createdAt)
            return (
            <>
              <div className={styles.store_box}> 
              <div className={styles.store_title} key={index}>{it.title}</div>
              <div className={styles.store_create_date}>{createdAt.getFullYear()}-{createdAt.getMonth() + 1}-{createdAt.getDate()}</div>
              </div>
            </>
           )
           })
          }
        </div>
        <div className={styles.pagenation}>
          {[...Array(page)].map((it, index) => {
            return (
              <button>{index+1}</button>
            )
          })
          }
        </div>
      </div>
    </div>
  );
}

export default Store;