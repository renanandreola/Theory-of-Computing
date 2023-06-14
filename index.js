function torreDeHanoi(numeroDiscos, torreOrigem, torreDestino, torreAuxiliar) {
  if (numeroDiscos === 1) {
    console.log(`Mova o disco 1 da torre ${torreOrigem} para a torre ${torreDestino}`);
    return;
  }

  torreDeHanoi(numeroDiscos - 1, torreOrigem, torreAuxiliar, torreDestino);

  torreDeHanoi(numeroDiscos - 1, torreAuxiliar, torreDestino, torreOrigem);
}
  
function hanoi(input, spanPos) {
  // let numeroDiscos = 3;
  let numeroDiscos = input;
  let torreOrigem = 'A';
  let torreDestino = 'C';
  let torreAuxiliar = 'B';

  let start = performance.now();
  torreDeHanoi(numeroDiscos, torreOrigem, torreDestino, torreAuxiliar);
  let end = performance.now();

  let tempoExecucao = end - start;
  // console.log(`Tempo de execução: ${tempoExecucao} milissegundos`);

  if (spanPos == 'first') {
    let result = document.getElementById("timeHanoi1");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'second') {
    let result = document.getElementById("timeHanoi2");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'third') {
    let result = document.getElementById("timeHanoi3");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

}

////////////////////////////////////////////////////////////////////////////////
  
function bubbleSort(array) {
  const length = array.length;
  
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  
  return array;
}

function BubbleSort(num1, num2, spanPos) {
  const arr = [];
  const tamanho = Math.pow(num1, num2); // 10^3 = 1.000

  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * tamanho));
  }

  console.log(arr);

  let start = performance.now();
  const sortedArr = bubbleSort(arr);
  let end = performance.now();

  let tempoExecucao = end - start;
  // console.log(`Tempo de execução: ${tempoExecucao} milissegundos`);

  if (spanPos == 'first') {
    let result = document.getElementById("timeBubbleSort1");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'second') {
    let result = document.getElementById("timeBubbleSort2");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'third') {
    let result = document.getElementById("timeBubbleSort3");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  console.log(sortedArr);
}

////////////////////////////////////////////////////////////////////////////////

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const meio = Math.floor(array.length / 2);
  const esquerda = array.slice(0, meio);
  const direita = array.slice(meio);

  return merge(mergeSort(esquerda), mergeSort(direita));
}

function merge(esquerda, direita) {
  let resultado = [];
  let i = 0;
  let j = 0;

  while (i < esquerda.length && j < direita.length) {
    if (esquerda[i] < direita[j]) {
      resultado.push(esquerda[i]);
      i++;
    } else {
      resultado.push(direita[j]);
      j++;
    }
  }

  return resultado.concat(esquerda.slice(i)).concat(direita.slice(j));
}

function MergeSortFn(num1, num2, spanPos) {
  const arr = [];
  const tamanho = Math.pow(num1, num2); // 10^3 = 1.000

  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * tamanho));
  }

  console.log(arr);

  let start = performance.now();
  const sortedArr = mergeSort(arr);
  let end = performance.now();

  let tempoExecucao = end - start;
  // console.log(`Tempo de execução: ${tempoExecucao} milissegundos`);

  if (spanPos == 'first') {
    let result = document.getElementById("timeMergeSort1");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'second') {
    let result = document.getElementById("timeMergeSort2");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'third') {
    let result = document.getElementById("timeMergeSort3");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  console.log(sortedArr);
}

////////////////////////////////////////////////////////////////////////////////

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[array.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

function QuickSortFn(num1, num2, spanPos) {
  const arr = [];
  const tamanho = Math.pow(num1, num2); // 10^3 = 1.000

  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * tamanho));
  }

  console.log(arr);

  let start = performance.now();
  const sortedArr = quickSort(arr);
  let end = performance.now();

  let tempoExecucao = end - start;
  // console.log(`Tempo de execução: ${tempoExecucao} milissegundos`);

  if (spanPos == 'first') {
    let result = document.getElementById("timeQuickSort1");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'second') {
    let result = document.getElementById("timeQuickSort2");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'third') {
    let result = document.getElementById("timeQuickSort3");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  console.log(sortedArr);
}

////////////////////////////////////////////////////////////////////////////////

function countingSort(array) {
  const max = Math.max(...array);
  const min = Math.min(...array);
  const countArray = new Array(max - min + 1).fill(0);
  const sortedArray = [];

  for (let i = 0; i < array.length; i++) {
    countArray[array[i] - min]++;
  }

  for (let i = 0; i < countArray.length; i++) {
    while (countArray[i] > 0) {
      sortedArray.push(i + min);
      countArray[i]--;
    }
  }

  return sortedArray;
}

function CountingSortFn(num1, num2, spanPos) {
  const arr = [];
  const tamanho = Math.pow(num1, num2); // 10^3 = 1.000

  for (let i = 0; i < tamanho; i++) {
    arr.push(Math.floor(Math.random() * tamanho));
  }

  console.log(arr);

  let start = performance.now();
  const sortedArr = countingSort(arr);
  let end = performance.now();

  let tempoExecucao = end - start;
  // console.log(`Tempo de execução: ${tempoExecucao} milissegundos`);

  if (spanPos == 'first') {
    let result = document.getElementById("timeCountingSort1");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'second') {
    let result = document.getElementById("timeCountingSort2");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  if (spanPos == 'third') {
    let result = document.getElementById("timeCountingSort3");
    result.textContent = `Tempo de execução: ${tempoExecucao} milissegundos`;
  }

  console.log(sortedArr);
}

////////////////////////////////////////////////////////////////////////////////

function generateGraphic() {
  // var a = $('#timeHanoi1').textContent.split(' ')[3]
  const timeHanoi = [$('#timeHanoi1').text().split(' ')[3], $('#timeHanoi2').text().split(' ')[3], $('#timeHanoi3').text().split(' ')[3]];
  const timeBubbleSort = [$('#timeBubbleSort1').text().split(' ')[3], $('#timeBubbleSort2').text().split(' ')[3], $('#timeBubbleSort3').text().split(' ')[3]];
  const timeMergeSort = [$('#timeMergeSort1').text().split(' ')[3], $('#timeMergeSort2').text().split(' ')[3], $('#timeMergeSort3').text().split(' ')[3]];
  const timeQuickSort = [$('#timeQuickSort1').text().split(' ')[3], $('#timeQuickSort2').text().split(' ')[3], $('#timeQuickSort3').text().split(' ')[3]];
  const timeCountingSort = [$('#timeCountingSort1').text().split(' ')[3], $('#timeCountingSort2').text().split(' ')[3], $('#timeCountingSort3').text().split(' ')[3]];
  
  const ctx = document.getElementById("chart").getContext("2d");
  const chart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["10^3", "10^6", "10^9"],
    datasets: [
      {
        label: "Hanoi",
        data: [$('#timeHanoi1').text().split(' ')[3], $('#timeHanoi2').text().split(' ')[3], $('#timeHanoi3').text().split(' ')[3]],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 0.6)",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "BubbleSort",
        data: [$('#timeBubbleSort1').text().split(' ')[3], $('#timeBubbleSort2').text().split(' ')[3], $('#timeBubbleSort3').text().split(' ')[3]],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 0.6)",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "MergeSort",
        data: [$('#timeMergeSort1').text().split(' ')[3], $('#timeMergeSort2').text().split(' ')[3], $('#timeMergeSort3').text().split(' ')[3]],
        backgroundColor: "rgba(235, 52, 219, 0.6)",
        borderColor: "rgba(235, 52, 219, 0.6)",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "QuickSort",
        data: [$('#timeQuickSort1').text().split(' ')[3], $('#timeQuickSort2').text().split(' ')[3], $('#timeQuickSort3').text().split(' ')[3]],
        backgroundColor: "rgba(52, 70, 235, 0.6)",
        borderColor: "rgba(52, 70, 235, 0.6)",
        fill: false,
        pointRadius: 0,
      },
      {
        label: "CountingSort",
        data: [$('#timeCountingSort1').text().split(' ')[3], $('#timeCountingSort2').text().split(' ')[3], $('#timeCountingSort3').text().split(' ')[3]],
        backgroundColor: "rgba(235, 220, 52, 0.6)",
        borderColor: "rgba(235, 220, 52, 0.6)",
        fill: false,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      y: {
        type: "logarithmic",
        ticks: {
          callback: function (value, index, values) {
            return value.toLocaleString();
          },
        },
        title: {
          display: true,
          text: "Tempo de Execução (ms)",
        },
      },
    },
  },
});
  // const chart = new Chart(ctx, {
  //   type: "bar",
  //   data: {
  //     labels: ["10^3", "10^6", "10^9"],
  //     datasets: [
  //       {
  //         label: "Hanoi",
  //         data: timeHanoi,
  //         backgroundColor: "rgba(75, 192, 192, 0.6)",
  //       },
  //       {
  //         label: "BubbleSort",
  //         data: timeBubbleSort,
  //         backgroundColor: "rgba(255, 99, 132, 0.6)",
  //       },
  //       {
  //         label: "MergeSort",
  //         data: timeMergeSort,
  //         backgroundColor: "rgba(235, 52, 219, 0.6)",
  //       },
  //       {
  //         label: "QuickSort",
  //         data: timeQuickSort,
  //         backgroundColor: "rgba(52, 70, 235, 0.6)",
  //       },
  //       {
  //         label: "CountingSort",
  //         data: timeCountingSort,
  //         backgroundColor: "rgba(235, 220, 52, 0.6)",
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true,
  //         ticks: {
  //           stepSize: 0.5,
  //         },
  //         title: {
  //           display: true,
  //           text: "Tempo de Execução (ms)",
  //         },
  //       },
  //     },
  //   },
  // });
}