import { Outlet, Link} from "react-router"


export default function Details(){


    return (
        <>
        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Hi">Hi</Link>
        </nav>

        <h1>Welcome to my Details page</h1>
        <Outlet></Outlet>
        {/* <Outlet></Outlet>.  isko upar neeche kajo bhi likh skte h */}
        </>
    )
}