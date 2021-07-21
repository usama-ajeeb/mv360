import React from "react";

const OptionCardWithCheckbox = ({
  value,
  heading,
  state,
  selectedList,
  hideAll,isCountry,
  isArray,
  property,
  onAction,onEdit
}) => {
  return (
    <div className={`opts-card-checkbox h-350 ${isCountry? "w-400":"w-343"}`}>
      <header className="is-flex is-align-items-center is-justify-content-center has-text-dark is-size-5 has-background-light h-30">
       <h5 className="has-text-weight-semibold">{heading}</h5>
      </header>
      <main className="has-background-white h-320 pt-3">
        <table className="ml-6">
          <thead className="is-flex">
              {hideAll ? null : ( <tr>
                <th className="has-text-dark has-text-weight-bold is-size-6 pb-2 is-family-secondary ls-1  w-30">
                <span>All</span> 
                </th>
              <th className="has-text-dark has-text-weight-bold is-size-6 pb-2 is-family-secondary ls-1  w-30">
                <center><span className="is-align-self-center">Partial</span></center>
              </th>
            </tr>
              )}
          </thead>
          <tbody >
            {state.map((item) =>{ 
              const isAvailable=selectedList && selectedList.filter((i) =>i.[property].abbrev && i.[property].abbrev.includes(item.val)).length > 0; 
              return (
                <div style={{position:"relative",width:"100%"}}>
                  {isAvailable && 
                    <button style={{position:"absolute",left:-40}} 
                    className="has-border-none has-background-white has-text-primary has-text-bold" onClick={()=>onEdit(item.val,property)}>Edit</button>
                  }
                <tr >
                  {hideAll ? null : (
                    <td className="pr-2 ">
                      <input
                        type="checkbox"
                        name={`all-${item.val}`}
                        onClick={(e) => {
                          onAction(
                            item.text,
                            e.target.name,
                            item.extraData,
                            e.target.checked,
                            property
                          );
                        }}
                        checked={value === `all-${item.val}`}
                        disabled={isAvailable}
                      />
                    </td>
                  )}
                  <td className={`pl-3 `}>
                    <input
                      type="checkbox"
                      name={`${item.val}`}
                      onClick={(e) =>
                        onAction(
                          item.text,
                          e.target.name,
                          item.extraData,
                          e.target.checked,
                          property
                        )
                      }
                      checked={
                        isArray
                          ? value
                            ? value.filter((i) => i.abbrev === item.val).length > 0
                            : null
                          : value === item.val
                      }
                      disabled={isAvailable}
                    />
                    <span
                      className="has-text-dark is-size-5 ml-4 is-family-secondary ls-1"
                      style={{ verticalAlign: "inherit" }}
                    >
                      {item.text}
                    </span>
                  </td>

                  
                </tr></div>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
};
export default OptionCardWithCheckbox;
