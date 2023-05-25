import Image from "next/image";

export default function Contributors({ mainUserImage, contributorsImg }) {
  return (
    <div className="pt-2">
      <div className="text-sm text-center mb-2">Contributors</div>
      <div className="flex flex-row">
        <div className="rounded-full border-4 border-yellow-500">
          <Image
            className="rounded-full"
            src={mainUserImage}
            alt="ownerImage"
            width={25}
            height={25}
          />
        </div>
        {contributorsImg.map((k, i) => (
          <div className="rounded-full border-4 border-white-500" key={i}>
            <Image
              className="rounded-full"
              src={k.image}
              alt="ownerImage"
              width={25}
              height={25}
              key={i}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
