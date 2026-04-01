function CategoryFilter ({ activeCategory, setActiveCategory }) {
  const categories = ['Work', 'Personal', 'All'];
  return (
    <div className='flex gap-2 mb-4'>
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`px-3 py-1 rounded ${
            activeCategory === cat
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;
