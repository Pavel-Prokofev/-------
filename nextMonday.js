const nextMonday = () => {
  let now = new Date();
  let nextMonday = new Date();
  if (now.getDay()) {
    nextMonday.setDate(now.getDate() + 8 - now.getDay());
  } else {
    nextMonday.setDate(now.getDate() + 1);
  }

  console.log(String(nextMonday.getDate()).padStart(2, '0') + '.' + String(nextMonday.getMonth() + 1).padStart(2, '0') + '.' + String(nextMonday.getFullYear()).slice(-2));
};

nextMonday();
