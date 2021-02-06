const likes = (names) => {
  const nameL = names.length;
  switch (true) {
    case nameL < 1:
      return 'no one likes this';
    case nameL == 1:
      return `${names[0]} likes this`;
    case nameL == 2:
      return `${names[0]} & ${names[1]} likes this`;
    case nameL == 3:
      return `${names[0]} & ${names[1]} & ${names[2]} likes this`;
    case nameL > 3:
      return `${names[0]} & ${names[1]} and 2 others like this`;
  }
};
