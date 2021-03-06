import React, { useEffect, useState, useRef} from 'react';

export function Timer() {

    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');
    const [timerMiliseconds, setTimerMiliseconds] = useState('0');
  
    let interval = useRef();
  
    const startTimer = () => {
      const countdownDate = new Date('August 30, 2022 01:00:00').getTime()
  
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);
        const miliseconds = Math.floor(distance % ((1000 * 60) / 1000)/10)
  
        if (distance < 0) {
          clearInterval(interval.current);
        }else{
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
          setTimerMiliseconds(miliseconds)
        }
  
      }, interval);
    }
  
    //compdidmount
    useEffect(() => {
      startTimer();
      return () => {
        clearInterval(interval.current);
      };
    })
  

    
    return (
        
        <div className='container'>
            <div className='counter-container'>
                <h3 style={{marginBottom:'-15px'}}>🤯⌛ COUNTDOWN ⌛🤯</h3>
                <div className='count-timer'>
                  <div style={{width:'50px'}}>
                  <section>
                    <h2 className='thin-line'>{timerDays}</h2>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h2 className='thin-line'>{timerHours}</h2>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h2 className='thin-line'>{timerMinutes}</h2>
                  </section>
                  </div>
                  <span style={{color:'white'}}>:</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h2 className='thin-line'>{timerSeconds}</h2>
                  </section>
                  </div>
                  <span style={{color:'white'}}>.</span>
                  <div style={{width:'50px'}}>
                  <section>
                    <h2 className='thin-line'>{timerMiliseconds}</h2>
                  </section>
                </div>
              </div>
            </div>
            
        </div>
    );
}