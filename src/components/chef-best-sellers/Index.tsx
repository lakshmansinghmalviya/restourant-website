import food from '../../../public/menu/m1.png'

const BestSellers = () => {
  const foods = [
    food,
    food,
    food,
    food
  ];

  return (
    <div className='flex gap-5 justify-between'>
      {foods.map((food, index: number) => {
        return(
          <img key={index} src={food} alt="bestseller" className='size-[20rem] hover:scale-105 duration-600' />
        )
      })}
    </div>
  )
}

export default function Index() {
  return (
    <div className="text-white bg-[#9C0F1C] flex flex-col gap-10 py-5">
      <h1 className="text-center text-2xl">Chef's Bestsellers - Dishes You Must Try</h1>


      <BestSellers />
    </div>
  )
}