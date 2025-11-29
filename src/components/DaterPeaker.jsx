import React, { useState } from "react";
import colors from "./colorsPalette";
import {
  CalendarDays,
  UserPlus,
  MapPin,
  Search,
  Castle,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import DatePicker from "react-datepicker";
import Box from "@mui/material/Box";
import UnfoldLessDoubleIcon from "@mui/icons-material/UnfoldLessDouble";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import { AutoComplete } from "primereact/autocomplete";

import dayjs from "dayjs";
import { forwardRef } from "react";
import { color } from "framer-motion";
import { properties } from "../pages/ImagesSlider";

// Liste des emplacements en Guinée

const allLocations = [
  ...new Set(properties.slice().map((property) => property.location)),
];

const hotelOptions = allLocations.map((loc) => ({
  value: loc,
  label: loc,
}));
// hotels info

export const DaterPeaker = ({
  labelText,
  handleDismiss,
  isDismiss,
  showText = false,
}) => {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs().add(1, "day"));
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("3");

  const CustomerDateText = forwardRef(
    ({ value, onClick, placeholder }, ref) => {
      let display = placeholder;

      if (value) {
        const date = new Date(value);

        if (!isNaN(date)) {
          display = new Intl.DateTimeFormat("fr-FR", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
          }).format(date);
        }
      }

      return (
        <button
          ref={ref}
          onClick={onClick}
          className="w-full px-3 py-2 ms-4 flex rounded-lg text-center"
        >
          {display}
        </button>
      );
    }
  );

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const search = (event) => {
    const query = event.query.toLowerCase();

    const filtered = allLocations.filter((loc) =>
      loc.toLowerCase().includes(query)
    );

    setItems(filtered);
  };
  return (
    <div className="w-full max-w-8xl mx-auto p-y-3 px-4 md:px-6 lg:px-8">
      {/* Bouton dismiss/open pour mobile */}

      <div className="flex justify-end">
        <button
          onClick={handleDismiss}
          className="md:hidden relative bg-slate-700 flex items-center justify-center  mb-2 text-white  h-8 w-8 rounded-full transition-transform duration-300 ease-in-out hover:bg-black focus:right-1 hover:text-white"
          aria-label={
            isDismiss ? "Afficher le formulaire" : "Masquer le formulaire"
          }
        >
          {isDismiss ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
      </div>

      {/* Container principal - caché sur mobile seulement si dismissed */}
      <div
        style={{
          borderColor: colors.neutral.borderLight,
          backgroundColor: colors.neutral.bgCard,
        }}
        className={`${
          isDismiss ? "hidden md:flex" : "flex"
        } items-center flex-col lg:flex-row bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300`}
      >
        {/* Destination - Première colonne */}
        <div className="flex-1 w-full border-r border-gray-200">
          <div className="p-4">
            {showText && (
              <label className="block  text-lg font-bold text-gray-600 mb-1">
                Place
              </label>
            )}
            <div className="relative border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <Castle
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-30"
                size={24}
              />

              <div className="relative">
                <AutoComplete
                  value={value}
                  suggestions={items}
                  completeMethod={search}
                  onChange={(e) => setValue(e.value)}
                  placeholder="Where are you going to?"
                  forceSelection={false}
                  dropdown={false}
                  inputClassName="
      w-full px-3 py-2 outline-none rounded-lg text-sm
    "
                  panelClassName="
      bg-white rounded-xl shadow-lg px-3 py-2 border border-gray-200
    "
                  itemClassName="
      px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm
    "
                  style={{ width: "100%", padding: "10px 5px", margin: 0 }}
                />

                {/* Message manuel */}
                {items.length === 0 && value.length > 0 && (
                  <div
                    className="
      absolute left-0 right-0 mt-1 
      bg-white border border-gray-200 
      rounded-xl shadow px-4 py-3 
      text-gray-500 text-sm text-center
    "
                  >
                    No result found 😕
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* vip component open in hotel component */}

        {showText && (
          <div className="flex-1 w-full border-r border-gray-200">
            <div className=" relative p-4">
              <legend className="text-lg font-bold text-gray-800 mb-4">
                VIP
              </legend>

              <select
                style={{
                  borderColor: colors.neutral.borderLight,
                  backgroundColor: colors.neutral.bgCard,
                }}
                id="reservationType"
                name="reservationType"
                className="w-full px-4 py-4 outline-none appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-xl shadow-lg border  hover:shadow-xl transition-all duration-300"
              >
                <option value="standard">Standard</option>
                <option value="vip">VIP (services premium)</option>
                <option value="business">Business (voyage d’affaires)</option>
                <option value="family">Famille</option>
                <option value="couple">Couple / escapade romantique</option>
                <option value="longlasting">
                  Long lasting (séjour longue durée)
                </option>
                <option value="group">Groupe / amis</option>
              </select>
              <UnfoldLessDoubleIcon className="absolute top-20 right-6 text-gray-400 pointer-events-none" />
            </div>
          </div>
        )}

        {/* Dates - Deuxième colonne */}
        <div className="flex-1 w-full border-r border-gray-200">
          <div className="p-4">
            {showText && (
              <label className="block text-center text-lg font-bold text-gray-600 mb-2">
                Check In -Check Out
              </label>
            )}
            <div className=" border border-gray-300 rounded-lg px-2 py-2 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200">
              <div
                style={{
                  backgroundColor: colors.neutral.bgCard,
                  color: colors.neutral.textPrimary,
                }}
                className="grid grid-cols-2 gap-3 relative"
              >
                <span className="absolute  -left-4 top-2 transform translate-x-1/2">
                  {" "}
                  <CalendarDays />
                </span>
                <DatePicker
                  selected={startDate.toDate()}
                  onChange={(date) => setStartDate(dayjs(date))}
                  selectsStart
                  startDate={startDate.toDate()}
                  endDate={endDate.toDate()}
                  placeholderText="Check-in"
                  className="w-full px-3 py-2 transition-all duration-200 text-sm"
                  dateFormat="dd/MM/yyyy"
                  customInput={<CustomerDateText placeholder={"check in"} />}
                />
                <DatePicker
                  selected={endDate.toDate()}
                  onChange={(date) => setEndDate(dayjs(date))}
                  selectsEnd
                  startDate={startDate.toDate()}
                  endDate={endDate.toDate()}
                  minDate={startDate.toDate()}
                  placeholderText="Check-out"
                  className="w-full px-3 py-2  transition-all duration-200 text-sm"
                  dateFormat="dd/MM/yyyy"
                  customInput={<CustomerDateText placeholder={"check out"} />}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Voyageurs - Troisième colonne */}
        <div className="flex-1 w-full">
          <div className="p-4">
            {showText && (
              <label className="w-full text-center flex flex-nowrap text-lg font-bold text-gray-600 mb-2">
                Passengers - Room Condition
              </label>
            )}
            <div
              style={{
                backgroundColor: colors.neutral.bgCard,
                color: colors.neutral.textPrimary,
              }}
              className="grid w-full  grid-cols-2   gap-3  items-center px-4 py-3 text-center outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none text-sm"
            >
              <div className="relative">
                <select
                  style={{
                    borderColor: colors.neutral.borderLight,
                    backgroundColor: colors.neutral.bgCard,
                  }}
                  value={`${adults} adults ${children} children`}
                  onChange={(e) => {
                    const value = e.target.value;
                    const adultsMatch = value.match(/(\d+) adults/);
                    const childrenMatch = value.match(/(\d+) children/);
                    if (adultsMatch) setAdults(adultsMatch[1]);
                    if (childrenMatch) setChildren(childrenMatch[1]);
                  }}
                  className="w-full   ms-6 py-2 px-2 rounded-lg outline-none  appearance-none hover:bg-gray-100 border-0 hover:ring-0 transition-all duration-200"
                >
                  <option value="1 adults 0 children">
                    1 adult, 0 children
                  </option>
                  <option value="2 adults 0 children">
                    2 adults, 0 children
                  </option>
                  <option value="2 adults 1 children">2 adults, 1 child</option>
                  <option value="2 adults 2 children">
                    2 adults, 2 children
                  </option>
                  <option value="2 adults 3 children">
                    2 adults, 3 children
                  </option>
                  <option value="3 adults 0 children">
                    3 adults, 0 children
                  </option>
                  <option value="3 adults 1 children">3 adults, 1 child</option>
                  <option value="3 adults 2 children">
                    3 adults, 2 children
                  </option>
                  <option value="3 adults 3 children">
                    3 adults, 3 children
                  </option>
                  <option value="4 adults 0 children">
                    4 adults, 0 children
                  </option>
                  <option value="4 adults 1 children">4 adults, 1 child</option>
                  <option value="4 adults 2 children">
                    4 adults, 2 children
                  </option>
                  <option value="4 adults 3 children">
                    4 adults, 3 children
                  </option>
                </select>
                <div className="pointer-events-none absolute z-10 inset-y-0 -left-5 flex items-center px-2 text-gray-700">
                  <UserPlus />
                </div>
              </div>
              <div className="ml-3 text-sm text-gray-500 whitespace-nowrap">
                <Select
                  options={hotelOptions}
                  placeholder="Rome"
                  className="w-full px-4 "
                  styles={{
                    control: (base) => ({
                      ...base,
                      border: "none", // supprime la bordure
                      boxShadow: "none", // supprime l'ombre
                      outline: "none", // supprime l'outline
                      backgroundColor: "transparent",
                      width: "100%",
                      zIndex: "2", // pas d'  apparence
                    }),
                    dropdownIndicator: (base) => ({
                      ...base,
                      color: "gray", // tu peux garder une couleur simple
                    }),
                    indicatorSeparator: () => ({
                      display: "none", // supprime la petite barre entre texte et flèche
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isFocused ? "#0d6efd" : "white", // hover gris clair
                      color: state.isFocused ? "white" : "gray", // texte noir
                      cursor: "pointer",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      color: "#000", // gris pour le placeholder
                    }),
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de recherche */}
        <div className="w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-gray-200">
          <div className=" group p-4 h-full flex items-center justify-center">
            <button
              style={{
                backgroundColor: colors.primary.main,
                color: colors.neutral.textWhite,
              }}
              className="w-full lg:w-auto px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-all duration-200 transform hover:scale-105 shadow-md flex items-center gap-2"
            >
              <Search size={18} className="group-hover:animate-pulse" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
