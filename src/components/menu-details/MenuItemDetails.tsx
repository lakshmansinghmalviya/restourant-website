import { useState, useMemo } from "react";

// Interfaces
interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPopular?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

const RestaurantMenu = () => {
  const menuCategories: MenuCategory[] = [
    { id: "all", name: "All Items", icon: "🍽️" },
    { id: "appetizers", name: "Appetizers", icon: "🥗" },
    { id: "mains", name: "Main Course", icon: "🍖" },
    { id: "pasta", name: "Pasta & Rice", icon: "🍝" },
    { id: "pizza", name: "Pizza", icon: "🍕" },
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "beverages", name: "Beverages", icon: "🥤" },
  ];

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Margherita Pizza",
      description: "Classic delight with 100% real mozzarella cheese",
      price: 7.99,
      category: "pizza",
      isVegetarian: true,
      isPopular: true,
    },
    {
      id: 2,
      name: "Chicken Biryani",
      description: "Fragrant basmati rice cooked with chicken and spices",
      price: 10.5,
      category: "pasta",
      isVegetarian: false,
      isSpicy: true,
    },
    {
      id: 3,
      name: "Veggie Burger",
      description: "Grilled vegetable patty with fresh lettuce and tomato",
      price: 6.25,
      category: "mains",
      isVegetarian: true,
      isPopular: true,
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Molten chocolate cake served with vanilla ice cream",
      price: 5.75,
      category: "desserts",
      isVegetarian: true,
    },
    {
      id: 5,
      name: "Garlic Bread",
      description: "Toasted bread with garlic and butter",
      price: 3.99,
      category: "appetizers",
      isVegetarian: true,
    },
    {
      id: 6,
      name: "Cold Coffee",
      description: "Chilled coffee with a dash of cream and ice",
      price: 2.5,
      category: "beverages",
      isVegetarian: true,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showVegetarianOnly, setShowVegetarianOnly] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const filteredItems = useMemo(() => {
    let filtered = menuItems.filter((item) => {
      const categoryMatch = selectedCategory === "all" || item.category === selectedCategory;
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const vegetarianMatch = !showVegetarianOnly || item.isVegetarian;
      return categoryMatch && searchMatch && vegetarianMatch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "popular":
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, showVegetarianOnly, sortBy]);

  return (
    <div className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-6 pt-20">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Menu</h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Discover our delicious selection of carefully crafted dishes
        </p>
      </header>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow p-4 sm:p-6 mb-6">
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dishes..."
            className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:ring-red-500 focus:border-red-500 text-sm"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 10-14 0 7 7 0 0014 0z" />
            </svg>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h3 className="text-gray-800 font-semibold mb-2">Categories</h3>
          <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-2">
            {menuCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex flex-col items-center p-2 text-xs sm:text-sm rounded-lg border 
                  ${selectedCategory === cat.id ? "bg-red-100 border-red-500 text-red-600" : "bg-white border-gray-300 hover:bg-gray-50"}`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Veg & Sort Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={showVegetarianOnly}
              onChange={() => setShowVegetarianOnly((v) => !v)}
            />
            <span className="ml-2 text-sm text-gray-700">Vegetarian Only</span>
          </label>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg p-2 text-sm"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>

          <button
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
              setShowVegetarianOnly(false);
              setSortBy("name");
            }}
            className="ml-auto text-sm text-red-500 hover:underline"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow p-4 flex flex-col justify-between h-full">
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-red-600 font-bold">${item.price.toFixed(2)}</span>
              <div className="flex space-x-1 text-xs">
                {item.isVegetarian && <span className="text-green-600">🌱</span>}
                {item.isSpicy && <span className="text-red-500">🌶️</span>}
                {item.isPopular && <span className="text-yellow-500">⭐</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
