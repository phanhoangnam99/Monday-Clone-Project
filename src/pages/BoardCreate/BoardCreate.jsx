import React, { Fragment, useEffect, useRef, useState } from "react";
import Input from "../../components/Input";
import ReviewTable from "../../components/ReviewTable/ReviewTable";
import { Checkbox } from "@material-tailwind/react";
import ColumnSelBtn from "./components/ColumnSelBtn";
import { Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeView,
  handleChangeViewColor,
  handleChangeviewDesc,
} from "./slices/boardSlice";

export default function BoardCreate() {
  const [inputValue, setInputValue] = useState("");
  const [step, setStep] = useState(2);
  const [disabled, setDisabled] = useState(true);
  const [chosenBtn, setChosenBtn] = useState([]);
  const [currentDesc, setCurrentDesc] = useState("");

  const inputRef = useRef();
  const btnRef = useRef();
  const [chosenRadio, setChosenRadio] = useState("");

  const dispatch = useDispatch();

  const { chosenView, viewDesc, viewColor } = useSelector(
    (state) => state.board
  );
  const [isVisited, setIsVisited] = useState([]);

  useEffect(() => {
    setChosenBtn([{ id: "owner" }, { id: "status" }, { id: "due-date" }]);
  }, []);
  useEffect(() => {
    if (!isVisited.includes(step)) {
      setIsVisited((prev) => [...prev, step]);
    }
    if (isVisited.includes(3)) {
      chosenRadio || setChosenRadio("Projects");
    }
  }, [step, isVisited]);
  const checkBlankInput = (e) => {
    inputRef.current = e.target.value;
    console.log(inputRef);
    if (inputRef.current) {
      setDisabled(false);
    } else if (!inputRef.current || inputRef.current === "") {
      setDisabled(true);
    }

    setInputValue(inputRef.current);
  };

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  useEffect(() => {
    if (!inputRef.current) {
      setDisabled(true);
    }
  }, [inputRef.current]);

  useEffect(() => {
    const lastOfChosenBtnArray = chosenBtn[chosenBtn.length - 1]?.id;
    setCurrentDesc(
      ColSelBtn.find((btn) => btn.id === lastOfChosenBtnArray)?.desc
    );
  }, [chosenBtn]);

  const logState = (id, state) => {
    console.log(id, state);
    console.log(ColSelBtn.find((col) => col.id === id));
    if (state === false) {
      const existBtn = chosenBtn.find((btn) => btn.id === id);

      if (existBtn) {
        if (chosenBtn.length !== 1) {
          const filterdArray = chosenBtn.filter(
            (btn) => btn.id !== existBtn.id
          );

          setChosenBtn(filterdArray);
        } else {
          const lastOfChosenBtnArray = chosenBtn[chosenBtn.length - 1].id;

          setCurrentDesc(
            ColSelBtn.find((btn) => btn.id === lastOfChosenBtnArray).desc
          );
        }
      }
    } else if (state === true) {
      const isViewCol = viewSelBtn.find((btn) => btn.id === id);
      if (!isViewCol) {
        setCurrentDesc(ColSelBtn.find((btn) => btn.id === id).desc);

        setChosenBtn([...chosenBtn, { id }]);
      } else if (isViewCol) {
        dispatch(handleChangeView(isViewCol.id));
        dispatch(
          handleChangeviewDesc(
            viewSelBtn.find((btn) => btn.id === isViewCol.id).desc
          )
        );
        dispatch(
          handleChangeViewColor(
            viewSelBtn.find((btn) => btn.id === isViewCol.id).iconColor
          )
        );
      }
    }
  };

  const ColSelBtn = [
    {
      id: "owner",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width={16}
          height={16}
          aria-hidden="true"
          className="text-white"
          data-testid="icon"
        >
          <path
            d="M10.2501 2.0498C9.74254 2.0498 9.2399 2.14979 8.77093 2.34404 8.30196 2.53829 7.87584 2.82302 7.51691 3.18195 7.15798 3.54088 6.87325 3.967 6.679 4.43597 6.48475 4.90494 6.38477 5.40758 6.38477 5.91519 6.38477 6.4228 6.48475 6.92544 6.679 7.39441 6.87325 7.86338 7.15798 8.28949 7.51691 8.64843 7.87584 9.00736 8.30196 9.29209 8.77093 9.48634 9.2399 9.68059 9.74254 9.78057 10.2501 9.78057 10.7578 9.78057 11.2604 9.68059 11.7294 9.48634 12.1983 9.29208 12.6245 9.00736 12.9834 8.64843 13.3423 8.28949 13.627 7.86338 13.8213 7.39441 14.0156 6.92544 14.1155 6.4228 14.1155 5.91519 14.1155 5.40758 14.0156 4.90494 13.8213 4.43597 13.627 3.967 13.3423 3.54088 12.9834 3.18195 12.6245 2.82302 12.1983 2.53829 11.7294 2.34404 11.2604 2.14979 10.7578 2.0498 10.2501 2.0498zM9.34496 3.72986C9.63194 3.61099 9.93952 3.5498 10.2501 3.5498 10.5608 3.5498 10.8684 3.61099 11.1553 3.72986 11.4423 3.84873 11.7031 4.02296 11.9227 4.24261 12.1424 4.46226 12.3166 4.72301 12.4355 5.01 12.5544 5.29698 12.6155 5.60456 12.6155 5.91519 12.6155 6.22582 12.5544 6.5334 12.4355 6.82038 12.3166 7.10736 12.1424 7.36812 11.9227 7.58777 11.7031 7.80742 11.4423 7.98165 11.1553 8.10052 10.8684 8.21939 10.5608 8.28057 10.2501 8.28057 9.93952 8.28057 9.63194 8.21939 9.34496 8.10052 9.05798 7.98165 8.79722 7.80742 8.57757 7.58777 8.35792 7.36812 8.18369 7.10736 8.06482 6.82038 7.94595 6.5334 7.88477 6.22582 7.88477 5.91519 7.88477 5.60456 7.94595 5.29698 8.06482 5.01 8.18369 4.72301 8.35792 4.46226 8.57757 4.24261 8.79722 4.02296 9.05797 3.84873 9.34496 3.72986zM9.83935 10.7312C9.8512 10.7307 9.86306 10.7305 9.87491 10.7305H10.6247C10.6384 10.7305 10.652 10.7308 10.6655 10.7314 11.7943 10.7771 12.8913 11.0775 13.8525 11.6041 14.8151 12.1314 15.6096 12.8682 16.1604 13.7443 16.7113 14.6203 17.0003 15.6068 17 16.6097V17.2981C17 17.6856 16.6456 17.9997 16.2084 17.9997H10.6251L10.6201 17.9997H4.29163C3.85443 17.9997 3.5 17.6856 3.5 17.2981V16.6097C3.4997 15.6068 3.7887 14.6203 4.33955 13.7443 4.89044 12.8682 5.68491 12.1314 6.64751 11.6041 7.6101 11.0767 8.70884 10.7762 9.83935 10.7312zM9.89335 12.1337H10.6063C11.4613 12.1703 12.2918 12.3987 13.02 12.7977 13.753 13.1992 14.358 13.7602 14.7774 14.4274 15.1946 15.0907 15.4145 15.8372 15.4167 16.5965H10.6296L10.6247 16.5965H5.08328C5.08548 15.8372 5.30542 15.0907 5.72255 14.4273 6.14204 13.7602 6.747 13.1992 7.47999 12.7977 8.20811 12.3988 9.03853 12.1703 9.89335 12.1337zM5.08326 16.6066L5.08328 16.5965C5.08327 16.5998 5.08327 16.6032 5.08326 16.6066zM15.4167 16.6066C15.4167 16.6032 15.4167 16.5999 15.4167 16.5965L15.4167 16.6066z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ),
      label: "Owner",
      onClick: logState,
      iconColor: "#66ccff",
      desc: "Assign accountability to any team member or guest so everyone is aligned on what they need to complete.",
      selected: true,
    },
    {
      id: "status",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M1.99805 2.77233C1.99805 2.34471 2.34471 1.99805 2.77233 1.99805H17.2257C17.6533 1.99805 18 2.34471 18 2.77233V7.58989V12.4079V17.2257C18 17.6533 17.6533 18 17.2257 18H2.77233C2.34471 18 1.99805 17.6533 1.99805 17.2257V12.4079V7.58989V2.77233ZM3.54662 13.1822V16.4514H16.4514V13.1822H3.54662ZM16.4514 11.6336H3.54662V8.36417H16.4514V11.6336ZM16.4514 3.54662V6.8156H3.54662V3.54662H16.4514Z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path transform="translate(2 2)" d="M0 0H16V16H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Status",
      onClick: logState,
      iconColor: "#00c875",
      desc: "Stay up-to-date on the progress and performance of all your tasks so you can optimize quickly.",
      selected: true,
    },
    {
      iconColor: "#9cd326",
      id: "due-date",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M6.83801 3C6.83801 2.58579 6.50223 2.25 6.08801 2.25C5.6738 2.25 5.33801 2.58579 5.33801 3V5.15381V7.30769C5.33801 7.72191 5.6738 8.05769 6.08801 8.05769C6.50223 8.05769 6.83801 7.72191 6.83801 7.30769V5.90381H11.4726C11.8868 5.90381 12.2226 5.56802 12.2226 5.15381C12.2226 4.73959 11.8868 4.40381 11.4726 4.40381H6.83801V3ZM2.64227 4.9389C2.98489 4.59629 3.44957 4.40381 3.9341 4.40381C4.34831 4.40381 4.6841 4.73959 4.6841 5.15381C4.6841 5.56802 4.34831 5.90381 3.9341 5.90381C3.8474 5.90381 3.76424 5.93825 3.70293 5.99956C3.64162 6.06087 3.60718 6.14403 3.60718 6.23073V8.71149H16.1072V6.23073C16.1072 6.14403 16.0727 6.06087 16.0114 5.99956C15.9501 5.93825 15.867 5.90381 15.7803 5.90381H14.3765V7.30769C14.3765 7.72191 14.0407 8.05769 13.6265 8.05769C13.2123 8.05769 12.8765 7.72191 12.8765 7.30769V5.16301L12.8764 5.15381L12.8765 5.1446V3C12.8765 2.58579 13.2123 2.25 13.6265 2.25C14.0407 2.25 14.3765 2.58579 14.3765 3V4.40381H15.7803C16.2648 4.40381 16.7295 4.59629 17.0721 4.9389C17.4147 5.28152 17.6072 5.7462 17.6072 6.23073V9.46149V15.923C17.6072 16.4076 17.4147 16.8723 17.0721 17.2149C16.7295 17.5575 16.2648 17.75 15.7803 17.75H3.9341C3.44957 17.75 2.98489 17.5575 2.64227 17.2149C2.29966 16.8723 2.10718 16.4076 2.10718 15.923V9.46149V6.23073C2.10718 5.7462 2.29966 5.28152 2.64227 4.9389ZM3.60718 15.923V10.2115H16.1072V15.923C16.1072 16.0097 16.0727 16.0929 16.0114 16.1542C15.9501 16.2155 15.867 16.25 15.7803 16.25H3.9341C3.8474 16.25 3.76424 16.2155 3.70293 16.1542C3.64162 16.0929 3.60718 16.0097 3.60718 15.923Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      label: "Due date",
      onClick: logState,
      desc: "Visualize deadlines, with your team so nothing falls through the cracks.",
      selected: true,
    },
    {
      id: "budget",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <g fill="currentColor" clip-path="url(#clip0)">
            <path d="M4.86947 8.59888H3.56146V3.55694L2 4.04122V2.97761L4.72917 2H4.86947V8.59888zM11.7107 13.3678H7.19375V12.4717L9.32549 10.1997C9.61817 9.87983 9.83391 9.60072 9.97271 9.36236 10.1145 9.12399 10.1854 8.89769 10.1854 8.68346 10.1854 8.39078 10.1115 8.16146 9.96365 7.99551 9.81581 7.82654 9.60459 7.74205 9.33002 7.74205 9.03432 7.74205 8.80048 7.84464 8.62849 8.04982 8.45952 8.25198 8.37503 8.51901 8.37503 8.85092H7.0625C7.0625 8.44962 7.15755 8.08301 7.34764 7.75111 7.54075 7.4192 7.8123 7.15971 8.16231 6.97264 8.51232 6.78255 8.9091 6.6875 9.35265 6.6875 10.0315 6.6875 10.5581 6.85044 10.9322 7.17631 11.3094 7.50218 11.498 7.96232 11.498 8.55673 11.498 8.8826 11.4135 9.21451 11.2445 9.55245 11.0755 9.89039 10.7859 10.2841 10.3755 10.7337L8.87742 12.3133H11.7107V13.3678zM14.9265 14.0561H15.6235C15.9555 14.0561 16.2014 13.9731 16.3613 13.8072 16.5212 13.6412 16.6012 13.421 16.6012 13.1464 16.6012 12.8809 16.5212 12.6742 16.3613 12.5263 16.2044 12.3785 15.9871 12.3046 15.7095 12.3046 15.4591 12.3046 15.2494 12.374 15.0804 12.5127 14.9115 12.6485 14.827 12.8266 14.827 13.0468H13.519C13.519 12.7028 13.611 12.3951 13.7951 12.1235 13.9821 11.8489 14.2416 11.6347 14.5735 11.4808 14.9084 11.3269 15.2766 11.25 15.6779 11.25 16.3749 11.25 16.921 11.4175 17.3163 11.7524 17.7115 12.0843 17.9092 12.5429 17.9092 13.1283 17.9092 13.43 17.8171 13.7076 17.6331 13.9611 17.449 14.2145 17.2076 14.4091 16.9089 14.5449 17.2801 14.6777 17.5561 14.8768 17.7372 15.1423 17.9212 15.4079 18.0133 15.7217 18.0133 16.0837 18.0133 16.6691 17.799 17.1383 17.3706 17.4913 16.9451 17.8444 16.3809 18.0209 15.6779 18.0209 15.0201 18.0209 14.4815 17.8474 14.0621 17.5004 13.6457 17.1534 13.4375 16.6948 13.4375 16.1245H14.7455C14.7455 16.3719 14.8375 16.5741 15.0216 16.731 15.2087 16.8879 15.438 16.9663 15.7095 16.9663 16.0203 16.9663 16.2632 16.8848 16.4382 16.7219 16.6162 16.556 16.7053 16.3372 16.7053 16.0656 16.7053 15.4079 16.3432 15.079 15.619 15.079H14.9265V14.0561z"></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <path transform="translate(2 2)" d="M0 0H16V16H0z"></path>
            </clipPath>
          </defs>
        </svg>
      ),
      label: "Budget",
      onClick: logState,
      iconColor: "#ffcb00",
      desc: "Set a budget to easily track all spending and expenses as your project progresses.",
    },
    {
      id: "files",
      icon: (
        <img
          className="k5XOS"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/files-icon.svg"
          alt="undefined column icon"
        />
      ),
      label: "Files",
      onClick: logState,
      desc: "Instantly add your files to your board. Edit, comment, and tag any file to keep your team in the loop.",
    },
    {
      id: "last_updated",
      icon: (
        <img
          className="k5XOS"
          src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/wizard/last-updated-icon.svg"
          alt="undefined column icon"
        />
      ),
      label: "Last updated",
      onClick: logState,
      desc: "Easily see in one glance when and by who your work was last updated.",
    },
    {
      id: "notes",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M4.75 5C4.75 4.86193 4.86193 4.75 5 4.75H9.24961V15.2498H7.5C7.08579 15.2498 6.75 15.5856 6.75 15.9998C6.75 16.414 7.08579 16.7498 7.5 16.7498H9.98232L9.99961 16.75L10.0169 16.7498H12.5C12.9142 16.7498 13.25 16.414 13.25 15.9998C13.25 15.5856 12.9142 15.2498 12.5 15.2498H10.7496V4.75H15C15.1381 4.75 15.25 4.86193 15.25 5V6C15.25 6.41421 15.5858 6.75 16 6.75C16.4142 6.75 16.75 6.41421 16.75 6V5C16.75 4.0335 15.9665 3.25 15 3.25H5C4.0335 3.25 3.25 4.0335 3.25 5V6C3.25 6.41421 3.58579 6.75 4 6.75C4.41421 6.75 4.75 6.41421 4.75 6V5Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      label: "Notes",
      onClick: logState,
      iconColor: "#579bfc",
      desc: "Jot down all your important notes to keep your work in context and up-to-date.",
    },
    {
      id: "timeline",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M13 5H4.67871M16.3205 10.2148H8.49902M10.5 15.4287H5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      label: "Timeline",
      onClick: logState,
      iconColor: "#a25ddc",
      desc: "Visualize how long you and your team have to complete an item or project so everyone is aligned on start and due dates.",
    },
  ];
  const viewSelBtn = [
    {
      id: "Table",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M13 4.5H10.5V7H13V4.5ZM14.5 4.5V7H16.5V5C16.5 4.72386 16.2761 4.5 16 4.5H14.5ZM13 8.5H10.5L10.5 11H13L13 8.5ZM14.5 11L14.5 8.5H16.5V11H14.5ZM13 12.5H10.5V15.5H13V12.5ZM14.5 15.5V12.5H16.5V15C16.5 15.2761 16.2761 15.5 16 15.5H14.5ZM4 4.5H9V7H3.5V5C3.5 4.72386 3.72386 4.5 4 4.5ZM3.5 8.5H9L9 11H3.5V8.5ZM3.5 12.5H9V15.5H4C3.72386 15.5 3.5 15.2761 3.5 15V12.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      label: "Table",
      onClick: logState,
      iconColor: "#784bd1",
      desc: "Table view is your default layout. Plan, track and manage anything using a visual board.",
      selected: true,
    },
    {
      id: "Timeline",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M13 5H4.67871M16.3205 10.2148H8.49902M10.5 15.4287H5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      label: "Timeline",
      onClick: logState,
      iconColor: "#fdab3d",
      desc: "Stay on track with visual deadlines and timelines.",
    },
    {
      id: "Calendar",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M6.83801 3C6.83801 2.58579 6.50223 2.25 6.08801 2.25C5.6738 2.25 5.33801 2.58579 5.33801 3V5.15381V7.30769C5.33801 7.72191 5.6738 8.05769 6.08801 8.05769C6.50223 8.05769 6.83801 7.72191 6.83801 7.30769V5.90381H11.4726C11.8868 5.90381 12.2226 5.56802 12.2226 5.15381C12.2226 4.73959 11.8868 4.40381 11.4726 4.40381H6.83801V3ZM2.64227 4.9389C2.98489 4.59629 3.44957 4.40381 3.9341 4.40381C4.34831 4.40381 4.6841 4.73959 4.6841 5.15381C4.6841 5.56802 4.34831 5.90381 3.9341 5.90381C3.8474 5.90381 3.76424 5.93825 3.70293 5.99956C3.64162 6.06087 3.60718 6.14403 3.60718 6.23073V8.71149H16.1072V6.23073C16.1072 6.14403 16.0727 6.06087 16.0114 5.99956C15.9501 5.93825 15.867 5.90381 15.7803 5.90381H14.3765V7.30769C14.3765 7.72191 14.0407 8.05769 13.6265 8.05769C13.2123 8.05769 12.8765 7.72191 12.8765 7.30769V5.16301L12.8764 5.15381L12.8765 5.1446V3C12.8765 2.58579 13.2123 2.25 13.6265 2.25C14.0407 2.25 14.3765 2.58579 14.3765 3V4.40381H15.7803C16.2648 4.40381 16.7295 4.59629 17.0721 4.9389C17.4147 5.28152 17.6072 5.7462 17.6072 6.23073V9.46149V15.923C17.6072 16.4076 17.4147 16.8723 17.0721 17.2149C16.7295 17.5575 16.2648 17.75 15.7803 17.75H3.9341C3.44957 17.75 2.98489 17.5575 2.64227 17.2149C2.29966 16.8723 2.10718 16.4076 2.10718 15.923V9.46149V6.23073C2.10718 5.7462 2.29966 5.28152 2.64227 4.9389ZM3.60718 15.923V10.2115H16.1072V15.923C16.1072 16.0097 16.0727 16.0929 16.0114 16.1542C15.9501 16.2155 15.867 16.25 15.7803 16.25H3.9341C3.8474 16.25 3.76424 16.2155 3.70293 16.1542C3.64162 16.0929 3.60718 16.0097 3.60718 15.923Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      label: "Calendar",
      onClick: logState,
      iconColor: "#faa1f1",
      desc: "See all upcoming content and due dates at a glance.",
    },
    {
      id: "Cards",
      icon: (
        <svg
          viewBox="0 0 17 17"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="icon_fd9afdf75b noFocusStyle_90bb7af8c7"
          data-testid="icon"
        >
          <path
            d="M2.25 16.1C1.00736 16.1 0 15.0926 0 13.85V2.25C0 1.00736 1.00736 0 2.25 0H8.25C9.49264 0 10.5 1.00736 10.5 2.25L10.5 13.85C10.5 15.0926 9.49264 16.1 8.25 16.1H2.25ZM1.5 13.85C1.5 14.2642 1.83579 14.6 2.25 14.6H8.25C8.66422 14.6 9 14.2642 9 13.85L9 2.25C9 1.83579 8.66421 1.5 8.25 1.5L2.25 1.5C1.83579 1.5 1.5 1.83579 1.5 2.25L1.5 13.85Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
          <path
            d="M12.5498 14.8002C12.1356 14.8002 11.7998 14.4644 11.7998 14.0502L11.7998 2.0502C11.7998 1.63598 12.1356 1.3002 12.5498 1.3002 12.964 1.3002 13.2998 1.63598 13.2998 2.0502L13.2998 14.0502C13.2998 14.4644 12.964 14.8002 12.5498 14.8002zM14.5996 13.3837C14.5996 13.7979 14.9354 14.1337 15.3496 14.1337 15.7638 14.1337 16.0996 13.7979 16.0996 13.3837V2.71703C16.0996 2.30281 15.7638 1.96703 15.3496 1.96703 14.9354 1.96703 14.5996 2.30281 14.5996 2.71703L14.5996 13.3837z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      label: "Cards",
      onClick: logState,
      iconColor: "#ff642e",
      desc: "See all your item details in a visual gallery.",
    },
    {
      id: "Kanban",
      icon: (
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M9.44764 16.0003C9.90548 16.0003 10.3446 15.818 10.6683 15.4935C10.992 15.1689 11.1739 14.7288 11.1739 14.2698L11.174 8.00927H14.2738C14.7316 8.00927 15.1707 7.82695 15.4945 7.50241C15.8182 7.17786 16.0001 6.73769 16.0001 6.27872V0.763162C16.0001 0.341807 15.6593 0.000230184 15.239 0.000230148L10.4129 0.000229726C10.4085 0.000229725 10.4042 0.000265964 10.3998 0.000340351L5.6101 0.000339932C5.60249 0.000114864 5.59485 4.22584e-07 5.58718 4.21914e-07L0.761045 0C0.340732 -3.67449e-08 7.41769e-07 0.341577 7.04933e-07 0.762932L0 9.82643C-4.01246e-08 10.2854 0.181876 10.7256 0.505614 11.0501C0.829352 11.3747 1.26844 11.557 1.72627 11.557H4.82576L4.82569 14.2698C4.82569 14.7288 5.00757 15.1689 5.33131 15.4935C5.65504 15.818 6.09413 16.0003 6.55196 16.0003H9.44764ZM4.82591 1.52586L4.82578 10.0311H1.72627C1.67212 10.0311 1.62018 10.0096 1.58189 9.97117C1.5436 9.93278 1.52209 9.88072 1.52209 9.82643L1.52209 1.52586L4.82591 1.52586ZM6.34786 9.8175L6.34778 14.2698C6.34778 14.3241 6.36929 14.3761 6.40758 14.4145C6.44587 14.4529 6.49781 14.4745 6.55196 14.4745H9.44764C9.50179 14.4745 9.55373 14.4529 9.59202 14.4145C9.63031 14.3761 9.65182 14.3241 9.65182 14.2698L9.65197 7.26015C9.65189 7.25556 9.65185 7.25095 9.65185 7.24634V1.5262L6.34822 1.5262L6.34822 9.79405C6.34822 9.80188 6.3481 9.8097 6.34786 9.8175ZM11.1741 6.48341L11.1741 1.52609L14.478 1.52609V6.27872C14.478 6.33301 14.4565 6.38507 14.4182 6.42346C14.3799 6.46184 14.328 6.48341 14.2738 6.48341H11.1741Z"
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      ),
      label: "Kanban",
      onClick: logState,
      iconColor: "#2b76e5",
      desc: "Prioritize and balance work according to capacity.",
    },
    {
      id: "Gantt",
      icon: (
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          width="16"
          height="16"
          aria-hidden="true"
          class="text-white"
          data-testid="icon"
        >
          <path
            d="M10.8214 5H3M13.8214 10.2144H6M16.3429 15.4287H8"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      ),
      label: "Gantt",
      onClick: logState,
      iconColor: "#037f4c",
      desc: "Visualize project milestones and dependencies.",
    },
  ];

  const [order, setOrder] = useState();

  return (
    <>
      {step === 1 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className=" flex-shrink-0 flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className=" text-3xl  py-4 mt-6">
                    <p>Let's start working together</p>

                    {/* ======================================== */}
                  </div>

                  <div className="flex flex-wrap "></div>

                  <div className="flex flex-col justify-center items-center mt-3 text-sm sm:text-base">
                    <div>
                      <p className="color-[#323338]">
                        Give your board a name, e.g. marketing plan, sales
                        pipeline, quarterly roadmap...
                      </p>
                    </div>
                    <div className="w-full relative">
                      <Input
                        value={inputValue}
                        onChange={(e) => checkBlankInput(e)}
                        ref={inputRef}
                        placeholder="My first board"
                        classNameInput="p-2 ps-8 w-full outline-none border border-gray-300 transition-colors	 hover:border-[#323338] focus:border-blue-500 rounded-sm focus:shadow-sm "
                        clearBtn
                      >
                        {inputValue && (
                          <button
                            onClick={() => {
                              setInputValue("");
                              inputRef.current = "";
                            }}
                            className=" cursor-pointer absolute top-1/2 -translate-y-1/2 h-[80%] right-[4px]"
                          >
                            <div className=" px-3 rounded-sm h-full hover:bg-[#dcdfec] flex flex-col justify-center">
                              x
                            </div>
                          </button>
                        )}
                      </Input>
                    </div>
                    {/* <div className="my-12 ps-8 pe-24 py-3 bg-allgrey-background-color mb-40">
                      <p>
                        In monday.com, "boards" are the place where all your
                        content lives.
                      </p>
                    </div> */}

                    {
                      <div
                        className={`  box-content flex items-center	mb-40 bg-allgrey-background-color lg:mt-12 lg:mb-40 my-8 ps-3 lg:pe-16 py-3 pe-5  lg:h-14 h-10 
                          
                         `}
                      >
                        <p className="  box-content text-xs lg:text-sm ">
                          In monday.com, "boards" are the place where all your
                          content lives.
                        </p>
                      </div>
                    }
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-end  w-full">
                    <button
                      className={` text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] hover:bg-[#0060b9] `}
                      onClick={() => handleStepChange(step + 1)}
                      style={{
                        background: `${disabled ? `#ecedf5` : ``}`,
                        pointerEvents: `${disabled ? "none" : "auto"}`,
                        color: `${disabled ? `#32333861` : ``}`,
                      }}
                      ref={btnRef}
                    >
                      <div className="flex justify-evenly ">
                        <span>Next</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6  lg:grid hidden bg-allgrey-background-color h-[100vh]">
              <div className="relative">
                <div className="flex justify-end p-2">
                  <button className="flex justify-center items-center w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div id="cai_bang">
                  <div className="bg-[#fff] [box-shadow:0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] [box-sizing:initial] flex [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] flex-col h-[555px] overflow-y-auto pt-[32px] absolute right-[0] top-2/4 -translate-y-1/2 [transition:transform_.2s_ease-in-out] w-[90%]">
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <div className="ml-8">
                        {!inputValue ? (
                          <div className="flex board_display_size">
                            <div className="my-3 w-[30%] h-2 bg-[#c3c6d4] rounded-lg"></div>
                          </div>
                        ) : (
                          <div className="flex board_display_size">
                            <h1 className="truncate text-[#656789] [font-weight:500] text-3xl">
                              {inputValue}
                            </h1>
                          </div>
                        )}
                        <div
                          id="#cai_gi_do"
                          className="flex flex-row justify-between mt-2 mr-8 mb-4"
                        >
                          <div className="flex flex-row h-[42px] pointer-events-none">
                            {isVisited.includes(4) && chosenView === "Table" ? (
                              <>
                                <div
                                  className="w-full py-1 px-4   relative flex justify-center "
                                  id="viewMode"
                                >
                                  <span className="text-lg mx-auto ">
                                    Table
                                  </span>
                                </div>
                                <div className=" !mt-[2%]">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </>
                            ) : (
                              isVisited.includes(4) && (
                                <>
                                  <div className="w-full  flex   border-b-[3px] border-b-gray-500 ">
                                    <span className="text-lg py-1 px-4 mx-auto">
                                      Table
                                    </span>
                                  </div>
                                  <div
                                    className=" relative flex w-full   "
                                    id="viewMode"
                                  >
                                    <span className="text-lg relative py-1 px-4  mx-auto">
                                      {chosenView}
                                    </span>
                                  </div>
                                  <div className=" mt-[2%] ">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div id="ec" className="overflow-y-scroll">
                        {chosenView === "Table" ? (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                            <ReviewTable
                              rowNumber={2}
                              boardColor="#00c875"
                              marginTop="32px"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        ) : (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className=" flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className="mb-6">
                    <div className=" text-3xl  py-4 mt-6">
                      <p>Let’s select the relevant columns for your board</p>
                    </div>
                    <div className="flex flex-wrap "></div>
                    <div>
                      <p className="color-[#323338]">
                        Choose from the most popular column types for your work
                      </p>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-center items-start mt-3 text-sm sm:text-base">
                    <div className="w-full relative flex gap-2 flex-wrap">
                      {ColSelBtn.map((button) => (
                        <ColumnSelBtn
                          onClick={button.onClick}
                          id={button.id}
                          label={button.label}
                          icon={button.icon}
                          iconColor={button.iconColor}
                          selected={button.selected}
                          chosenBtn={chosenBtn}
                        />
                      ))}
                    </div>
                    {
                      <div
                        className={`  box-content flex items-center	mb-40 bg-allgrey-background-color lg:mt-12 lg:mb-40 my-8 ps-3 lg:pe-16 py-3 pe-5  lg:h-14 h-10 ${
                          !currentDesc ? "invisible" : "visible"
                        } `}
                      >
                        <p className="  box-content text-xs lg:text-sm ">
                          {currentDesc}
                        </p>
                      </div>
                    }
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-between  w-full">
                    <div className="justify-evenly">
                      <button
                        className={` border-2 rounded-[5px] px-3 py-2 w-24 bg-[#ffffff] hover:bg-[#dcdfec] `}
                        onClick={() => handleStepChange(step - 1)}
                      >
                        <div className="flex justify-evenly ">
                          <span>{"<"}</span>
                          <span>Back</span>
                        </div>
                      </button>
                    </div>
                    <div className="justify-evenly">
                      <button
                        className={` text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] hover:bg-[#0060b9] `}
                        onClick={() => handleStepChange(step + 1)}
                      >
                        <div className="flex justify-evenly ">
                          <span>Next</span>
                          <span>{">"}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6  lg:grid hidden bg-allgrey-background-color h-[100vh]">
              <div className="relative">
                <div className="flex justify-end p-2">
                  <button className="flex justify-center items-center w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div id="cai_bang">
                  <div className="bg-[#fff] [box-shadow:0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] [box-sizing:initial] flex [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] flex-col h-[555px] overflow-y-auto pt-[32px] absolute right-[0] top-2/4 -translate-y-1/2 [transition:transform_.2s_ease-in-out] w-[90%]">
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <div className="ml-8">
                        {!inputValue ? (
                          <div className="flex board_display_size">
                            <div className="my-3 w-[30%] h-2 bg-[#c3c6d4] rounded-lg"></div>
                          </div>
                        ) : (
                          <div className="flex board_display_size">
                            <h1 className="truncate text-[#656789] [font-weight:500] text-3xl">
                              {inputValue}
                            </h1>
                          </div>
                        )}
                        <div
                          id="#cai_gi_do"
                          className="flex flex-row justify-between mt-2 mr-8 mb-4"
                        >
                          <div className="flex flex-row h-[42px] pointer-events-none">
                            {isVisited.includes(4) && chosenView === "Table" ? (
                              <>
                                <div
                                  className="w-full py-1 px-4   relative flex justify-center "
                                  id="viewMode"
                                >
                                  <span className="text-lg mx-auto ">
                                    Table
                                  </span>
                                </div>
                                <div className=" !mt-[2%]">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </>
                            ) : (
                              isVisited.includes(4) && (
                                <>
                                  <div className="w-full  flex   border-b-[3px] border-b-gray-500 ">
                                    <span className="text-lg py-1 px-4 mx-auto">
                                      Table
                                    </span>
                                  </div>
                                  <div
                                    className=" relative flex w-full   "
                                    id="viewMode"
                                  >
                                    <span className="text-lg relative py-1 px-4  mx-auto">
                                      {chosenView}
                                    </span>
                                  </div>
                                  <div className=" mt-[2%] ">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-scroll">
                        {chosenView === "Table" ? (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                            <ReviewTable
                              rowNumber={2}
                              boardColor="#00c875"
                              marginTop="32px"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        ) : (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className="flex-shrink-0  flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className="mb-6">
                    <div className=" text-3xl  py-4 mt-6">
                      <p> Select one of the items you’d like to manage</p>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-center items-start mt-3 text-sm sm:text-base">
                    <div className="w-full relative flex gap-2 flex-wrap">
                      <Formik
                        initialValues={{
                          picked: "Projects",
                        }}
                        onSubmit={async (values) => {
                          await new Promise((r) => setTimeout(r, 500));
                          alert(JSON.stringify(values, null, 2));
                        }}
                      >
                        {({ values, handleChange, setFieldValue }) => (
                          <Form className="flex items-center  w-full ">
                            <div
                              role="group"
                              aria-labelledby="my-radio-group"
                              className="flex justify-between w-full  items-center"
                            >
                              <label>
                                <Field
                                  type="radio"
                                  name="picked"
                                  value="Projects"
                                  className="m-2"
                                  checked={values.picked === "Projects"}
                                  onChange={() => {
                                    setFieldValue("picked", "Projects");
                                    setChosenRadio("Projects");
                                  }}
                                />
                                Projects
                              </label>
                              <label>
                                <Field
                                  type="radio"
                                  name="picked"
                                  value="Tasks"
                                  className="m-2"
                                  checked={values.picked === "Tasks"}
                                  onChange={() => {
                                    setFieldValue("picked", "Tasks");
                                    setChosenRadio("Tasks");
                                  }}
                                />
                                Tasks
                              </label>
                              <label>
                                <div className="flex items-center">
                                  <input
                                    type="radio"
                                    name="picked"
                                    value="Custom"
                                    id="customRadio"
                                    className="flex"
                                    checked={values.picked === "Custom"}
                                    onClick={() => {
                                      document
                                        .getElementById("customRadioInput")
                                        .focus();
                                      setChosenRadio(
                                        document.getElementById(
                                          "customRadioInput"
                                        ).value
                                      );
                                    }}
                                    onChange={() => {
                                      setFieldValue("picked", "Custom");
                                    }}
                                  />
                                  <Input
                                    id="customRadioInput"
                                    type="text"
                                    placeholder="Custom"
                                    name="customInput"
                                    onClick={() => {
                                      document.getElementById(
                                        "customRadio"
                                      ).checked = true;
                                      setFieldValue("picked", "Custom");
                                      setChosenRadio(
                                        document.getElementById(
                                          "customRadioInput"
                                        ).value
                                      );
                                    }}
                                    classNameInput="w-1/2 ml-3 p-1 outline-none border border-gray-300 focus:border-[#0073ea] hover:border-[#323338] rounded-md focus:shadow-sm"
                                    onChange={(e) => {
                                      setChosenRadio(e.target.value);
                                      if (!e.target.value) {
                                        setChosenRadio("Projects");
                                      }
                                    }}
                                  />
                                </div>
                              </label>
                            </div>
                          </Form>
                        )}
                      </Formik>
                    </div>

                    {
                      <div
                        className={`  box-content flex items-center 	 bg-allgrey-background-color  my-8 px-4 py-2   lg:h-14 h-10  `}
                      >
                        <p className="  box-content text-xs lg:text-sm ">
                          Items" are rows in your board which hold all the
                          relevant information to your tasks, projects,
                          campaigns and more
                        </p>
                      </div>
                    }
                    <div className="insvisible h-10"></div>
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-start  w-full">
                    <button
                      className={` border-2 rounded-[5px] px-3 py-2 w-24 bg-[#ffffff] hover:bg-[#dcdfec] `}
                      onClick={() => handleStepChange(step - 1)}
                    >
                      <div className="flex justify-evenly">
                        <span>{"<"}</span>
                        <span>Back</span>
                      </div>
                    </button>
                  </div>
                  <div className=" mt-auto flex justify-end  w-full">
                    <button
                      className={` text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] hover:bg-[#0060b9] `}
                      onClick={() => handleStepChange(step + 1)}
                    >
                      <div className="flex justify-evenly">
                        <span>Next</span>
                        <span>{">"}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6  lg:grid hidden bg-allgrey-background-color h-[100vh]">
              <div className="relative">
                <div className="flex justify-end p-2">
                  <button className="flex justify-center items-center w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div id="cai_bang">
                  <div className="bg-[#fff] [box-shadow:0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] [box-sizing:initial] flex [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] flex-col h-[555px] overflow-y-auto pt-[32px] absolute right-[0] top-2/4 -translate-y-1/2 [transition:transform_.2s_ease-in-out] w-[90%]">
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <div className="ml-8">
                        {!inputValue ? (
                          <div className="flex board_display_size">
                            <div className="my-3 w-[30%] h-2 bg-[#c3c6d4] rounded-lg"></div>
                          </div>
                        ) : (
                          <div className="flex board_display_size">
                            <h1 className="truncate text-[#656789] [font-weight:500] text-3xl">
                              {inputValue}
                            </h1>
                          </div>
                        )}
                        <div
                          id="#cai_gi_do"
                          className="flex flex-row justify-between mt-2 mr-8 mb-4"
                        >
                          <div className="flex flex-row h-[42px] pointer-events-none">
                            {isVisited.includes(4) && chosenView === "Table" ? (
                              <>
                                <div
                                  className="w-full py-1 px-4   relative flex justify-center "
                                  id="viewMode"
                                >
                                  <span className="text-lg mx-auto ">
                                    Table
                                  </span>
                                </div>
                                <div className=" !mt-[2%]">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </>
                            ) : (
                              isVisited.includes(4) && (
                                <>
                                  <div className="w-full  flex   border-b-[3px] border-b-gray-500 ">
                                    <span className="text-lg py-1 px-4 mx-auto">
                                      Table
                                    </span>
                                  </div>
                                  <div
                                    className=" relative flex w-full   "
                                    id="viewMode"
                                  >
                                    <span className="text-lg relative py-1 px-4  mx-auto">
                                      {chosenView}
                                    </span>
                                  </div>
                                  <div className=" mt-[2%] ">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-scroll">
                        {chosenView === "Table" ? (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                            <ReviewTable
                              rowNumber={2}
                              boardColor="#00c875"
                              marginTop="32px"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        ) : (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <div className="grid sm:grid-cols-12 auto-cols-auto h-[100vh]">
            <div className="lg:col-span-6 col-span-12   grid">
              <div className="md:px-32 md:py-16 flex flex-col md:justify-start justify-start items-center ">
                <div className=" flex flex-col  w-[80%] md:w-full h-full justify-center">
                  <div className="mb-6">
                    <div className=" text-3xl  py-4 mt-6">
                      <p>Add a view layout</p>
                    </div>
                    <div className="flex flex-wrap "></div>
                    <div>
                      <p className="color-[#323338]">
                        Choose from the most popular column types for your work
                      </p>
                    </div>
                  </div>
                  <div className="flex  flex-col justify-center items-start mt-3 text-sm sm:text-base">
                    <div className="w-full relative flex gap-2 flex-wrap">
                      {viewSelBtn.map((button) => (
                        <ColumnSelBtn
                          onClick={button.onClick}
                          id={button.id}
                          label={button.label}
                          icon={button.icon}
                          iconColor={button.iconColor}
                          selected={button.selected}
                          chosenBtn={chosenBtn}
                        />
                      ))}
                    </div>
                    {
                      <div
                        className={`rounded-md  box-content flex items-center	mb-40 bg-allgrey-background-color lg:mt-12 lg:mb-40 my-8 ps-3 lg:pe-16 py-3 pe-5  lg:h-14 h-10 ${
                          !viewDesc ? "invisible" : "visible"
                        } `}
                        style={{ borderLeft: `8px solid ${viewColor}` }}
                      >
                        <p className="  box-content text-xs lg:text-sm ">
                          {viewDesc}
                        </p>
                      </div>
                    }
                  </div>
                </div>
                <div className="w-full mt-5 flex flex-auto ">
                  <div className=" mt-auto flex justify-between  w-full">
                    <div className="justify-evenly">
                      <button
                        className={` border-2 rounded-[5px] px-3 py-2 w-24 bg-[#ffffff] hover:bg-[#dcdfec] `}
                        onClick={() => handleStepChange(step - 1)}
                      >
                        <div className="flex justify-evenly ">
                          <span>{"<"}</span>
                          <span>Back</span>
                        </div>
                      </button>
                    </div>
                    <div className="justify-evenly">
                      <button
                        className={` text-white rounded-[5px] px-3 py-2 w-24 bg-[#0073ea] hover:bg-[#0060b9] `}
                
                      >
                        <div className="flex justify-evenly ">
                          <span>Next</span>
                          <span>{">"}</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6  lg:grid hidden bg-allgrey-background-color h-[100vh]">
              <div className="relative">
                <div className="flex justify-end p-2">
                  <button className="flex justify-center items-center w-10 h-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div id="cai_bang">
                  <div className="bg-[#fff] [box-shadow:0px_4px_6px_-4px_rgba(0,_0,_0,_0.1)] [box-sizing:initial] flex [filter:drop-shadow(-10px_10px_30px_rgba(29,140,242,.3))] flex-col h-[555px] overflow-y-auto pt-[32px] absolute right-[0] top-2/4 -translate-y-1/2 [transition:transform_.2s_ease-in-out] w-[90%]">
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <div className="ml-8">
                        {!inputValue ? (
                          <div className="flex board_display_size">
                            <div className="my-3 w-[30%] h-2 bg-[#c3c6d4] rounded-lg"></div>
                          </div>
                        ) : (
                          <div className="flex board_display_size">
                            <h1 className="truncate text-[#656789] [font-weight:500] text-3xl">
                              {inputValue}
                            </h1>
                          </div>
                        )}
                        <div className="flex flex-row justify-between mt-2 mr-8 mb-4">
                          <div className="flex flex-row h-[42px] pointer-events-none">
                            {isVisited.includes(4) && chosenView === "Table" ? (
                              <>
                                <div
                                  className="w-full py-1 px-4   relative flex justify-center "
                                  id="viewMode"
                                >
                                  <span className="text-lg mx-auto ">
                                    Table
                                  </span>
                                </div>
                                <div className=" !mt-[2%]">
                                  <span>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke-width="1.5"
                                      stroke="currentColor"
                                      class="w-6 h-6"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 4.5v15m7.5-7.5h-15"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </>
                            ) : (
                              isVisited.includes(4) && (
                                <>
                                  <div className="w-full  flex   border-b-[3px] border-b-gray-500 ">
                                    <span className="text-lg py-1 px-4 mx-auto">
                                      Table
                                    </span>
                                  </div>
                                  <div
                                    className=" relative flex w-full   "
                                    id="viewMode"
                                  >
                                    <span className="text-lg relative py-1 px-4  mx-auto">
                                      {chosenView}
                                    </span>
                                  </div>
                                  <div className=" mt-[2%] ">
                                    <span>
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        class="w-6 h-6"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="M12 4.5v15m7.5-7.5h-15"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="overflow-x-scroll">
                        {chosenView === "Table" ? (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                            <ReviewTable
                              rowNumber={2}
                              boardColor="#00c875"
                              marginTop="32px"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        ) : (
                          <>
                            <ReviewTable
                              rowNumber={5}
                              boardColor="#559afd"
                              selectedCol={chosenBtn}
                              selectedRadio={chosenRadio}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
