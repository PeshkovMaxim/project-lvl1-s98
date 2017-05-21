  import { cons } from 'hexlet-pairs';

  const getBalance = (max, min) => {
    if (max - min > 1) {
      return getBalance(min + 1, max - 1);
    }
    return cons(max, min);
  };
