export const CodeSnipDropdownUsage = `

  import { LuChevronsUpDown } from "react-icons/lu";


    // A simple dropdown
    <ItsDropdown
            closeWhenClicked={true}
            btnText={
            <span className="btn-w-icon">
                ItsDropdown <LuChevronsUpDown />
            </span>
            }
            btnClassNames="btn btn-ghost text-shadow flex gap-1 items-center"
        >
            {categorys.map((category, index) => (
            <li
                key={index}
                className="btn btn-ghost"
                style={{ width: "100%" }}
                onClick={() => {
                setCategoryFilter(category);
                }}
            >
                {category}
            </li>
            ))}
    </ItsDropdown>





    // A recusivly rendered dropdown
   <ItsDropdown
            menuClassNames="-translate-x-8"
            btnText="Filters"
            btnClassNames="btn btn-ghost"
          >
            <ItsDropdown
              btnText={
                <span className="flex items-center gap-1">
                  Category <LuChevronsUpDown />
                </span>
              }
              btnClassNames="btn btn-ghost"
            >
              {categorys.map((category, index) => (
                <li
                  key={index}
                  className="btn btn-ghost"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setCategoryFilter(category);
                  }}
                >
                  {category}
                </li>
              ))}
            </ItsDropdown>
            <ItsDropdown
              closeWhenClicked={true}
              btnText={
                <span className="flex items-center whitespace-nowrap gap-1">
                  Sort Order <LuChevronsUpDown />
                </span>
              }
              btnClassNames="btn btn-ghost"
            >
              {sortOrders.map((sortOrder, index) => (
                <li
                  key={index}
                  className="btn btn-ghost"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setSortOrder(sortOrder);
                  }}
                >
                  {sortOrder}
                </li>
              ))}
            </ItsDropdown>
          </ItsDropdown>
`