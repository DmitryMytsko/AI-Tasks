import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 1. Создаем экземпляр Web Worker.
    // Синтаксис `new URL(...)` помогает сборщикам (Vite, Webpack) правильно находить файл воркера.
    const worker = new Worker(new URL('./calculation.worker.js', import.meta.url));

    // 2. Устанавливаем обработчик для получения результата от воркера.
    worker.onmessage = (event) => {
      console.log('Main: Message received from worker.');
      // Когда результат готов, обновляем состояние компонента.
      setData(event.data);
    };

    // 3. Отправляем сообщение воркеру, чтобы запустить вычисление.
    console.log('Main: Starting worker.');
    worker.postMessage('start');

    // 4. Важный шаг: очистка. Завершаем воркер при размонтировании компонента.
    return () => {
      console.log('Main: Terminating worker.');
      worker.terminate();
    };
  }, []); // Пустой массив зависимостей гарантирует, что эффект запустится один раз.

  // Отображаем состояние загрузки, пока идут вычисления
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Result: {data === null ? 'Calculating in the background...' : data}</p>
    </div>
  );
}