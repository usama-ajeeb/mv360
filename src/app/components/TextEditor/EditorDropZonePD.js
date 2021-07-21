import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ChoiceCardWithButton, CheckboxCard, CoverageAreaShow } from "..";

import {
  getCompaniesDetail,
  getStatescounties,
  getStatesCities,
} from "../../redux/selector";
import { getCounties, getCities } from "../../redux/actions";

const EditorDropZonePD = ({
  items,

  onAction,
}) => {
  const dispatch = useDispatch();

  const [selectStates, setSelectStates] = useState(false);
  const [selectCountries, setSelectCountries] = useState(false);
  const [selectCities, setSelectCities] = useState(false);
  const statesList = useSelector(getCompaniesDetail).StateDetails;
  const countiesList = useSelector(getStatescounties);
  const citiesList = useSelector(getStatesCities);

  const [statesFilter, setStatesFilter] = useState({
    states: {},
    counties: {},
    cites: [],
  });

  const handleStateFilter = (val, name, typeID, checked, type) => {
    switch (type) {
      case "states":
        let statesTemp = {};
        if (name.includes("all")) {
          setSelectCountries(false);
          setSelectCities(false);

          if (checked) {
            statesTemp = {
              name: val,
              type: "all",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
          }
        } else {
          if (checked) {
            statesTemp = {
              name: val,
              type: "partial",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
            setSelectCountries(true);
            dispatch(getCounties({ name: name, type: 1 }));
          }
        }
        setSelectCities(false);
        setStatesFilter({
          ...statesFilter,
          states: statesTemp,
          counties: {},
          cites: [],
        });

        break;

      case "counties":
        let countyTemp = {};
        if (name.includes("all")) {
          setSelectCities(false);
          if (checked) {
            countyTemp = {
              name: val,
              type: "all",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
          }
        } else {
          if (checked) {
            countyTemp = {
              name: val,
              type: "partial",
              abbrev: name,
              values: name + ";" + val + ";" + typeID,
            };
            setSelectCities(true);
            dispatch(getCities({ name: name, type: 1 }));
          }
        }
        setStatesFilter({ ...statesFilter, counties: countyTemp, cites: [] });

        break;

      case "cities":
        let cityTemp = [];
        if (checked) {
          cityTemp = [
            ...statesFilter.cites,
            {
              name: val,
              abbrev: name,
              values: name + ";" + val,
            },
          ];
        } else {
          cityTemp = statesFilter.cites.filter((item) => item.name !== val);
        }
        setStatesFilter({ ...statesFilter, cites: cityTemp });

        break;
      default:
        break;
    }
  };

  const handleEditFilter = (val, type) => {
    switch (type) {
      case "states":
        let temp = items.filters.filter((item) =>
          item.states.abbrev.includes(val)
        );
        dispatch(getCounties({ name: temp[0].states.abbrev, type: 1 }));
        // dispatch(getCities({ name: temp[0].counties.abbrev, type: 1 }));
        setStatesFilter(...temp);
        setSelectCountries(true);
        setSelectCities(false);
        break;

      case "counties":
        let countytemp = items.filters.filter((item) =>
          item.counties.abbrev.includes(val)
        );
        dispatch(
          getCities({
            name: countytemp[0].counties.abbrev.replace("all-", ""),
            type: 1,
          })
        );
        setStatesFilter(...countytemp);
        setSelectCities(true);
        break;
      default:
        break;
    }
  };

  const handleSelect = (choice) => {
    if (choice === "no") {
      setSelectStates(true);
    } else {
      setSelectStates(false);
      setSelectCountries(false);
      setSelectCities(false);
      onAction({ filters: [] });
    }
  };

  const handleDeleteFilter = (item) => {
    let temp = items.filters.filter((i) => JSON.stringify(i) !== item);

    onAction({
      filters: temp,
    });
  };

  const handleSave = () => {
    let temp = items.filters.filter(
      (i) => statesFilter.counties.name !== i.counties.name
    );
    onAction({ filters: [...temp, statesFilter] });
    setTimeout(() => {
      setStatesFilter({
        states: {},
        counties: {},
        cites: [],
      });
      setSelectStates(false);
      setSelectCities(false);
      setSelectCountries(false);
    }, 1000);
  };
  return (
    <div>
      <div className="mt-5 is-flex is-align-items-center is-justify-content-center">
        <div
          className="mr-block-center"
          style={{
            marginTop: "2.5rem",
          }}
        >
          <ChoiceCardWithButton
            question="Would you like this content to go to your total coverage area?"
            onAction={handleSelect}
          />
        </div>
      </div>
      <div
        className="is-flex"
        style={{ marginLeft: "calc(50% - 37rem)", marginTop: "2rem" }}
      >
        {selectStates && (
          <div>
            <CheckboxCard
              value={
                statesFilter.states && statesFilter.states.abbrev
                  ? statesFilter.states.abbrev
                  : null
              }
              selectedList={items.filters}
              heading="Select States"
              state={statesList.map((item) => {
                return {
                  text: item.SateName,
                  val: item.Abbrebiation,
                  extraData: item.StateType,
                };
              })}
              property="states"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
        {selectCountries && countiesList && countiesList.length > 0 && (
          <div style={{ marginLeft: "2rem" }}>
            <CheckboxCard
              value={
                statesFilter.counties && statesFilter.counties.abbrev
                  ? statesFilter.counties.abbrev
                  : null
              }
              selectedList={items.filters}
              heading="Select Countries"
              state={countiesList.map((item) => {
                return {
                  text: item.CountyName,
                  val: item.OptionsVal
                    ? item.OptionsVal
                    : item.CountyId + "_" + item.StateName,
                  extraData: item.CountyType,
                };
              })}
              isCountry={true}
              property="counties"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
        {selectCities && citiesList && citiesList.length > 0 && (
          <div style={{ marginLeft: "2rem" }}>
            <CheckboxCard
              value={
                statesFilter.cites && statesFilter.cites
                  ? statesFilter.cites
                  : null
              }
              heading="Select Cities"
              state={citiesList.map((item) => {
                return {
                  text: item.CityName,
                  val: item.OptionsVal
                    ? item.OptionsVal
                    : item.CityId + "_" + item.CountyId + "_" + item.StateName,
                  extraData: "",
                };
              })}
              isArray
              hideAll
              property="cities"
              onAction={handleStateFilter}
              onEdit={handleEditFilter}
            />
          </div>
        )}
      </div>
      {selectStates && (
        <div>
          <div
            className="mt-5 is-flex is-flex-direction-row-reverse mr-block-center"
            style={{
              marginTop: "2rem",
            }}
          >
            <button
              className="button is-uppercase is-primary has-text-weight-bold is-size-5 ls-1 w-125"
              // disabled={disabled}
              onClick={() => {
                handleSave();
              }}
            >
              Save
            </button>{" "}
            <button
              className="button is-uppercase is-primary has-text-weight-bold is-size-5 ls-1 w-125 mr-4"
              // disabled={disabled}
              onClick={() => {
                let temp = items.filters.filter(
                  (i) => statesFilter.counties.name !== i.counties.name
                );
                onAction({ filters: [...temp, statesFilter] });
                setTimeout(() => {
                  setStatesFilter({
                    states: {},
                    counties: {},
                    cites: [],
                  });
                  setSelectCities(false);
                  setSelectCountries(false);
                }, 1000);
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {!selectStates &&
        items.filters &&
        items.filters.map((item, index) => {
          return (
            <div className="mt-4">
              <CoverageAreaShow
                items={item}
                handleDelete={handleDeleteFilter}
              />
            </div>
          );
        })}
    </div>
  );
};

export default EditorDropZonePD;
