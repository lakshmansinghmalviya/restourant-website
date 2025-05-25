const Description = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl">Celevrate, Gather, And Savor The Moment</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptate maxime nesciunt eos harum id voluptas, voluptatum fugiat accusamus. Maxime facilis perferendis assumenda eveniet dolorem odio praesentium! Suscipit, eum quod!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptate maxime nesciunt eos harum id voluptas, voluptatum fugiat accusamus. Maxime facilis perferendis assumenda eveniet dolorem odio praesentium! Suscipit, eum quod!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptate maxime nesciunt eos harum id voluptas, voluptatum fugiat accusamus. Maxime facilis perferendis assumenda eveniet dolorem odio praesentium! Suscipit, eum quod!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptate maxime nesciunt eos harum id voluptas, voluptatum fugiat accusamus. Maxime facilis perferendis assumenda eveniet dolorem odio praesentium! Suscipit, eum quod!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae voluptate maxime nesciunt eos harum id voluptas, voluptatum fugiat accusamus. Maxime facilis perferendis assumenda eveniet dolorem odio praesentium! Suscipit, eum quod!</p>
    </div>
  )
}

const EventForm = () => {
  // Functions
  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      console.error("error submitting the form: ", error);
    }
  }

  return (
    <form onSubmit={onSubmit} className="text-black flex flex-col gap-5 px-5 py-3 border border-white rounded-2xl">
      <h1 className="text-white">Book Your Event</h1>

      <input type="text" placeholder="Value1" className="bg-white px-5 py-2 outline-none" />

      <div className="flex gap-5">
        <input type="text" placeholder="Phone Number" className="flex-1 bg-white px-5 py-2 outline-none" />
        <input type="text" placeholder="Number of People" className="flex-1 bg-white px-5 py-2 outline-none" />
      </div>

      <div className="flex gap-5">
        <input type="date" placeholder="Number of People" className="flex-1 bg-white px-5 py-2 outline-none" />
        <input type="text" placeholder="Title" className="flex-1 bg-white px-5 py-2 outline-none" />
      </div>
    </form>
  )
}

export default function BookEvent() {
  return (
    <div className="flex gap-5 justify-between">
      <Description />

      <EventForm />
    </div>
  )
}