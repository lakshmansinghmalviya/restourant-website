import image from "../../../public/chef/c1.png"

const Header = () => {
  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-3xl">Private Events Gallery</h1>

      <p>EXPLORE OUR UNIQUE SPACES FOR YOUR SPECIAL OCCASIONS</p>
    </div>
  )
}

const Pictures = () => {
  const images = [
    image,
    image,
    image,
    image,
    image,
    image,
  ];

  function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }

  const groups = chunkArray(images, 4);

  return (
    <div className="mx-auto px-4 py-10">
      {groups.map((group, idx) => (
        <div key={idx} className="grid grid-cols-3 grid-rows-1 gap-2">
          {/* Left side: 3 small images */}
          <div className="col-span-2 grid grid-cols-2 grid-rows-2 gap-2">
            {/* Top-left */}
            {group[0] && (
              <img
                src={group[0]}
                alt={`Gallery ${idx * 4 + 1}`}
                className="w-full h-48 object-cover"
              />
            )}
            {/* Top-right */}
            {group[1] && (
              <img
                src={group[1]}
                alt={`Gallery ${idx * 4 + 2}`}
                className="w-full h-48 object-cover"
              />
            )}
            {/* Bottom: span both cols */}
            {group[2] && (
              <img
                src={group[2]}
                alt={`Gallery ${idx * 4 + 3}`}
                className="col-span-2 w-full h-[232px] object-cover"
              />
            )}
          </div>

          {/* Right side: 1 large image spanning two rows */}
          {group[3] && (
            <img
              src={group[3]}
              alt={`Gallery ${idx * 4 + 4}`}
              className="row-span-2 w-full h-[30rem] object-cover"
            />
          )}
        </div>
      ))}
    </div>
  )
}

export default function Gallery() {
  return (
    <div className="px-8 py-5">
      <Header />
      
      <Pictures />
    </div>
  )
}
