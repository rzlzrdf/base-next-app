import { getServerSession } from "next-auth"
import { authOptions } from "../utils/auth"

export default async function page() {

    const session = await getServerSession(authOptions)

    return (
        <main className="p-10">
            <h1>Hello from dahsboard page</h1>
            {
                session ? "You are already logged in" : "Pleas login to see dashboard"
            }
        </main>
    )
}