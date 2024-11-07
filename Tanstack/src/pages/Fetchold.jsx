import OldFetchCard from "../components/ui/OldFetchCard";
import useOldFetch from "../Hooks/useOldFetch";


const Fetchold = () => {
     const [userData]   = useOldFetch()

    return (
        <div className="flex flex-col justify-center items-center">
            <p className="text-3xl capitalize">i am fetch old</p>
            <div>
                <ul className=" py-5 mt-10 gap-2 md:gap-4 lg:gap-8 px-2  grid justify-center  items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {
                        userData &&
                        userData?.map((user, index) => (
                            <OldFetchCard key={user.id} delay={index} data={user} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Fetchold;