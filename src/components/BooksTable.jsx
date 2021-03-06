import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "./FavoritesIcon";
import ReactPaginate from 'react-paginate';

const BooksTable = ({ data, showFav }) => {

  
const handleChangeClick = (data) =>{
  console.log(data.selected);
}

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full dark:bg-slate-800 dark:text-gray-400 text-sm text-left text-gray-600 ">
        <thead className="text-xs text-orange-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            {!showFav && (
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            )}
            <th scope="col" className="px-6 py-3">
              favorites
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ?
            data.slice(0,4).map((item) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={`${showFav ? `${item.phone}` : `${item.id}`}`}
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.phone}</td>
                  {!showFav && (
                    <td className="px-6 py-4">
                      <Link to={`/details/${item.id}`} state="view">
                        <FontAwesomeIcon
                          className="inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          icon={faEye}
                        />
                      </Link>{" "}
                      &nbsp; &nbsp;
                      <Link to={`/details/${item.id}`} state="edit">
                        <FontAwesomeIcon
                          className="inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                          icon={faPenToSquare}
                        />
                      </Link>
                    </td>
                  )}
                  <td className="px-6 py-4">
                    <FavoriteIcon item={item} />
                  </td>
                </tr>
              );
            }) : <tr >
              <td>
                <span className= "flex text-center justify-center text-gray-400 font-medium text-sm md:text-xl lg:text-2xl mt-8"> There in no Favorite List.</span>
                </td>
              </tr>}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={"< previous"}
        nextLabel={"next >"}
        breakLabel={"..."}
        pageCount={25}
        marginPagesDisplayed={4}
        pageRangeDisplayed={6}
        onPageChange={handleChangeClick}
        containerClassName={"inline-flex justify-center"}
        pageClassName={"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"}
        pageLinkClassName={" relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}
        previousClassName={"relative inline-flex items-center text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ml-10"}
        previousLinkClassName={"dark:hover:bg-blue-300 bg-blue-100 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}
        nextClassName={" relative inline-flex items-center text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}
        nextLinkClassName={"dark:hover:bg-blue-300 bg-blue-100 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"}
        breakClassName={"relative inline-flex items-center text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 ml-10"}
        breakLinkClassName={"bg-blue-100 hover:bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"}
        activeClassName={"gray-300 hover:bg-gray-400"}
      />
    </div>
  );
};

export default BooksTable;
