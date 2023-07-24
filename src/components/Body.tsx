import Image from 'next/image';

const Body = (): JSX.Element => (
  <>
    <h1 className="text-6xl font-bold mt-8 mb-12">My Routine</h1>
    <hr />
    <main className="flex mt-16 gap-6 mb-[196px]">
      <div className="w-[438px] p-6 border border-gray-200 rounded-3xl ">
        <Image
          className="pb-10"
          src="/kitty.png"
          alt="Kitty image"
          width={438}
          height={438}
          priority
        />
        <h2 className="mb-2 font-bold text-4xl">John Doe</h2>
        <div className="mb-6 font-semibold text-2xl">@ryry</div>
        <div>
          <div className="mb-4">
            <span className="font-semibold">Age: </span><span>30 - 40</span>
          </div>
          <div className="mb-4">
            <span className="font-semibold">Location: </span><span>New York, USA</span>
          </div>
          <div className="mb-4">
            <div className="font-semibold mb-4">About me</div>
            <p>
            I'm a passionate individual with a love for exploring the wonders of life. Curiosity is my driving force, and I'm constantly seeking new experiences and knowledge that broaden my horizons. Whether it's diving into the depths of a gripping novel or embarking on an adventure in the great outdoors, I embrace every opportunity to learn and grow.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-4">My skin</div>
            <div className="flex flex-wrap justify-start gap-2">
              <span className="border px-4 py-2 rounded-3xl">Combination</span>
              <span className="border px-4 py-2 rounded-3xl">Sensitive</span>
              <span className="border px-4 py-2 rounded-3xl">Lines</span>
              <span className="border px-4 py-2 rounded-3xl">Acne</span>
              <span className="border px-4 py-2 rounded-3xl">Redness</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 mb-8">
          <button className="text-2xl p-4 font-bold">Feed</button>
          <button className="text-2xl p-4 font-bold border-b-4 border-black">My Routine</button>
          <button className="text-2xl p-4 font-bold">Skincare Shelf</button>
        </div>
        <div className="mb-8 pl-4">
          <h3 className="text-6xl font-bold mb-8">Morning</h3>
          <button className="text-gray-300 rounded-2xl border border-dashed py-11 px-10 text-2xl">
            <div className="inline-block bg-black text-white rounded-full mr-4 h-[50px] w-[50px] p-2">+</div>Add Product
          </button>
        </div>
        <div className="pl-4">
          <h3 className="text-6xl font-bold mb-8">Night</h3>
          <button className="text-gray-300 rounded-2xl border border-dashed py-11 px-10 text-2xl">
            <div className="inline-block bg-black text-white rounded-full mr-4 h-[50px] w-[50px] p-2">+</div>Add Product
          </button>
        </div>
      </div>
    </main>
  </>
);

export default Body;
