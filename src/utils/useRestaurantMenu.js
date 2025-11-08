// Custom Hook to fetch restaurant menu data

import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
import { useParams } from "react-router-dom";

const useRestaurantMenu = () => {
  // const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    // Working data with proper accordion structure
    const mockData = {
      cards: [
        {},
        {},
        {
          card: {
            card: {
              info: {
                id: resId,
                name: "Burger King",
                cuisines: ["Burgers", "American"],
                costForTwoMessage: "₹350 for two",
                avgRating: 4.2,
                totalRatingsString: "10K+ ratings",
              },
            },
          },
        },
        {},
        {
          groupedCard: {
            cardGroupMap: {
              REGULAR: {
                cards: [
                  {},
                  {},
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Recommended",
                        itemCards: [
                          {
                            card: {
                              info: {
                                id: "112321639",
                                name: "Whopper",
                                category: "Burgers",
                                description:
                                  "Our signature burger with flame-grilled beef patty",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 28900,
                              },
                            },
                          },
                          {
                            card: {
                              info: {
                                id: "112321640",
                                name: "Chicken Whopper",
                                category: "Burgers",
                                description:
                                  "Flame-grilled chicken patty with fresh veggies",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 32900,
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Chicken Burgers",
                        itemCards: [
                          {
                            card: {
                              info: {
                                id: "112321641",
                                name: "Crispy Chicken Burger",
                                category: "Burgers",
                                description:
                                  "Crispy fried chicken with special sauce",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 19900,
                              },
                            },
                          },
                          {
                            card: {
                              info: {
                                id: "112321642",
                                name: "Spicy Chicken Burger",
                                category: "Burgers",
                                description: "Hot and spicy chicken burger",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 21900,
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  {
                    card: {
                      card: {
                        "@type":
                          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                        title: "Sides & Drinks",
                        itemCards: [
                          {
                            card: {
                              info: {
                                id: "112321643",
                                name: "French Fries (Medium)",
                                category: "Sides",
                                description: "Golden crispy french fries",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 9900,
                              },
                            },
                          },
                          {
                            card: {
                              info: {
                                id: "112321644",
                                name: "Coca Cola (330ml)",
                                category: "Beverages",
                                description: "Chilled Coca Cola",
                                imageId: "56c9ab92bd79745fd152a30fa2525426",
                                price: 5900,
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                ],
              },
            },
          },
        },
      ],
    };

    console.log("Using working data:", mockData);
    setResInfo(mockData);
  };

  return resInfo;
};

export default useRestaurantMenu;
