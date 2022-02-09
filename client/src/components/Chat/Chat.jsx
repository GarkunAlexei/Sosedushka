import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css'

import { Button, Input } from 'antd';
import { addMessage } from '../../redux/actions/wsAC';
import { useDispatch } from 'react-redux';


function Chat(props) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesRef = React.useRef(null);
  const dispatch = useDispatch()


  const ws = useSelector(state => state.ws)
  const message = useSelector(state => state.messages) 
  const name = useSelector(state => state.form)

  
  console.log(name)

  ws.onopen = function (e) {
    ws.send("вошел в чат!");
  };

  ws.onmessage = function (event) {
    setMessages(prev => [...prev, event.data])
  };

  const submitHandler = (e) => {
    e.preventDefault();
      console.log(input);
      ws.send(input)
      dispatch(addMessage(input))  
      setInput ('')
  }
  // React.useEffect(() => {
  //   messagesRef.current.scrollTo(0, 99999);
  // }, [messages]);

  return (
    <>
    <div className={style.chat}>
    
    <div className={style.chatMessages}>
      <div className={style.messages}>
        {messages.map((el, index) => (
          <div className={style.message} key={index}>
            <p>{el}</p>
            <div>
              <span>user</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <Input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className="form-control"/>
        <Button>Отправить</Button>
      </form>
    </div>
  </div>
  </>
  );
}

export default Chat;
