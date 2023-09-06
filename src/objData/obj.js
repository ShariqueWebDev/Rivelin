export const obj = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Contact",
    },
    {
      id: 4,
      name: "Proudcts",
      submenu: true,
      product: [
        {
          id: 6,
          name: "Jeans",
        },
        {
          id: 7,
          name: "Tshirt",
        },
        {
          id: 8,
          name: "Coat",
          submenu: true,
          product1: [
            { id: 10, name: "shiya ram" },
            { id: 11, name: "Linen" },
          ],
        },
        {
          id: 9,
          name: "Shoes",
          submenu: true,
          product2: [
            { id: 12, name: "Adiddas" },
            { id: 13, name: "Nike" },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Services",
    },
  ];
  