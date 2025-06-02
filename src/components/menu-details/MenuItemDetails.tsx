import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MenuCategory,MenuItem, menuCategories as cats  } from './data';

export const menuCategories: MenuCategory[] = cats;

const MenuItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  // Find the menu item by ID
  const findMenuItem = (itemId: string): { item: MenuItem; category: MenuCategory } | null => {
    const numericId = parseInt(itemId);
    
    for (const category of menuCategories) {
      if (category.children) {
        const item = category.children.find(item => item.id === numericId);
        if (item) {
          return { item, category };
        }
      }
    }
    return null;
  };

  const menuData = id ? findMenuItem(id) : null;
  console.log("Id is coming like this "+ id);
  console.log("Menu data i scoming like this  "+ menuData);
  // Get related items from the same category
  const getRelatedItems = (currentCategory: MenuCategory, currentItemId: number): MenuItem[] => {
    if (!currentCategory.children) return [];
    return currentCategory.children.filter(item => item.id !== currentItemId).slice(0, 3);
  };

  const handleQuantityChange = (action: 'increase' | 'decrease') => {
    if (action === 'increase') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (menuData) {
      // Add to cart logic here
      alert(`Added ${quantity} x ${menuData.item.name} to cart!`);
    }
  };

  if (!menuData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Item Not Found</h1>
          <p className="text-gray-600 mb-6">The menu item you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/menu')}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const { item, category } = menuData;
  const relatedItems = getRelatedItems(category, item.id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <button 
              onClick={() => navigate('/')}
              className="hover:text-orange-600 transition-colors"
            >
              Home
            </button>
            <span>/</span>
            <button 
              onClick={() => navigate('/menu')}
              className="hover:text-orange-600 transition-colors"
            >
              Menu
            </button>
            <span>/</span>
            <span className="text-gray-800">{category.title}</span>
            <span>/</span>
            <span className="text-orange-600 font-medium">{item.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Image Section */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={item.image || '/placeholder-food.jpg'}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-food.jpg';
                  }}
                />
              </div>
              
              {/* Category Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                {category.title}
              </div>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {item.description || 'Delicious menu item crafted with care and quality ingredients.'}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-orange-600">${item.price.toFixed(2)}</span>
                <span className="text-gray-500">per serving</span>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <span className="text-lg font-medium">−</span>
                  </button>
                  <span className="text-xl font-medium w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-medium">+</span>
                  </button>
                </div>
              </div>

              {/* Total Price */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-700">Total:</span>
                  <span className="text-2xl font-bold text-orange-600">
                    ${(item.price * quantity).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-orange-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => navigate('/menu')}
                  className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-xl font-semibold text-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">More from {category.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((relatedItem) => (
                <div
                  key={relatedItem.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => navigate(`/menu/${relatedItem.id}`)}
                >
                  <div className="aspect-video bg-gray-100">
                    <img
                      src={relatedItem.image || '/placeholder-food.jpg'}
                      alt={relatedItem.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/placeholder-food.jpg';
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{relatedItem.name}</h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {relatedItem.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-orange-600">
                        ${relatedItem.price.toFixed(2)}
                      </span>
                      <button className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItemDetails;