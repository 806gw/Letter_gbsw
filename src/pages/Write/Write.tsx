import React, { useState } from 'react';
import styles from 'pages/Write/Write.module.css'
import Header from "components/Header/Header";
import PencilIco from '../../img/pencil-svgrepo-com.svg'

function Writepage() {
  const [buttonState, setButtonState] = useState<boolean>(false)
  const onButton = () => {
    setButtonState(true);
  };
  const offButton = () => {
    setButtonState(false);
  };
  return (
    <>
      <Header />
      <div className={styles.Write_container}>
        <div id={styles.title}>마음의 편지쓰기 <img src={PencilIco} /></div>
        <div className={styles.title}>
          <span>제목</span>
          <input type="text" className={styles.write_title} />
          <div>
            <button
              style={{
                backgroundColor: buttonState ? "#1F4D2C" : "#fff",
                color: buttonState ? "#fff" : "#1F4D2C",
              }}
              onClick={onButton}
            >
              공개
            </button>
            <button
              style={{
                backgroundColor: !buttonState ? "#1F4D2C" : "#fff",
                color: buttonState ? "#1F4D2C" : "#fff",
              }}
              onClick={offButton}
            >
              비공개
            </button>
          </div>
        </div>
        <div className={styles.detail}>
          <span>내용</span>
          <textarea  className={styles.write_detail}  />
        </div>
        <div className='submit'>
          <input type="submit" value={"보내기"} className={styles.submit}/>
        </div>
      </div>
    </>
  );
}

export default Writepage;

function setIsCheck(arg0: (check: boolean) => boolean) {
  throw new Error('Function not implemented.');
}
