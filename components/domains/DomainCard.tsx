import Image from "next/image";

const DomainCard = ({ image,Title, Desc }) => {
    return (
        <div className="flex flex-col gap-6 w-72 text-white">
            <div className="p-3 rounded-lg bg-[#130F15]">
                <Image src={image} alt="domain" width={500} height={600} objectFit="cover"/>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
                <h2 className="flex text-2xl font-medium">{Title}</h2>
                <span>{Desc}</span>
            </div>
        </div>
    );
}

export default DomainCard;