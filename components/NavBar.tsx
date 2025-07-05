import SearchBar from "./SearchBar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2Icon from '@mui/icons-material/Person2';
export default function NavBar() {
    return (
        <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4 py-4 flex items-center justify-between">
            <div className="text-xl font-bold">
                <h2>MyLogo</h2>
            </div>
            <SearchBar />
            <div className="flex items-center gap-6">
                <h3 className="flex items-center gap-1">
                    <ShoppingCartIcon />
                    <span>Cart</span>
                </h3>
                <h3 className="flex items-center gap-1">
                    <Person2Icon />
                    <span>Profile</span>
                </h3>
            </div>
        </div>
    );
}
