const makeAllReadFalse = () => {
  let notifications = [
    { message: "Lorem", read: true },
    { message: "Ipsum", read: true },
    { message: "Dolor", read: true },
    { message: "Sit", read: false },
    { message: "Amet", read: true },
  ];

  let allRead = true;

  const isReadFalse = notifications.some((item) => !item.read);
  if (isReadFalse) {
    allRead = false;
  }
  
  return allRead;
};

makeAllReadFalse()
