
interface ICard {
    titulo: string,
    desc: string,
    id: string
}

export const Card = ({titulo, desc, id}: ICard) => {
    return (
        <div className="w-[260px] text-center flex flex-col gap-3 border justify-between">
            <div className="flex justify-center items-center h-[100px] text-white bg-gradient-to-r from-fuchsia-500 to-red-500">
                <h1>{titulo}</h1>
            </div>
            <p className="p-3">{desc}</p>
            <a href={`#${id}`}>
                <div className="text-white bg-gradient-to-r from-fuchsia-500 to-red-500 p-1 m-3">
                    <p>Read more</p>
                </div>
            </a>
        </div>
    )
}