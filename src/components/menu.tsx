import { ROUTES } from "@/app/constants/routes";
import Link from "next/link";

interface IMenu {
    op1: string,
    op2: string,
    op3: string
}

export const Menu = ({op1, op2, op3}: IMenu) => {
    return (
        <div className="flex justify-center items-center gap-5 bg-[#457d97] text-white">
            <Link href={ROUTES.home}><p>{op1}</p></Link>
            <Link href={ROUTES.imc}><p>{op2}</p></Link>
            <Link href={ROUTES.media}><p>{op3}</p></Link>
        </div>
    )
}