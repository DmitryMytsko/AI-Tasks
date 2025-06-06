// calculation.worker.js

self.onmessage = () => {
    console.log('Worker: Calculation started.');
    let total = 0;
    // Тяжелая задача остается здесь
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    // Отправляем результат обратно в основной поток
    self.postMessage(total);
  };