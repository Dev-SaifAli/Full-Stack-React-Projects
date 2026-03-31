export default function CategoryFilter ({ activeCategory, setActiveCategory }) {
  const categories = ['Work', 'Personal', 'All'];
  return (
    <div className='flex gap-2 mb-4'>
      {categories.map(cat => {
        <button key={cat} onClick={setActiveCategory(cat)}></button>;
      })}
    </div>
  );
}
