// we need  to code out in jsx heading, buttons,wrapper and text, and the form ( the form has drop down menu) images and radio buttons, inser t one card to see if renders

import React, { useState, useEffect } from "react";
// home needs imports from Header.js, Card.js, and Footer .js
import Header from "../Components/Header";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
// also needs 10 images imported.
import fruits1 from "../Assets/fruits1.jpg";
import fruits2 from "../Assets/fruits2.jpg";
import fruits3 from "../Assets/fruits3.jpg";
import fruits4 from "../Assets/fruits4.jpg";
import fruits5 from "../Assets/fruits5.jpg";
import fruits6 from "../Assets/fruits6.jpg";
import fruits7 from "../Assets/fruits7.jpg";
import fruits8 from "../Assets/fruits8.jpg";
import fruits9 from "../Assets/fruits9.jpg";
import fruits10 from "../Assets/fruits10.jpg";
/* data is in the cirles because that will give use the data directly using it as an object */
import { data } from "../Data/reactStarterData";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from 'react-bootstrap';

// The data needs to go in Home .js so it can flow threw the Card.js and then into the Data section

const Home = () => {
  //cityWeather is a variable and then we are using useState to set the information  when the app first loads in  these (), so the variaable city weather will be the data in the 0 and the favcity and then you set the setCityweather later when you change the iformation or add some.//
  //cityweather is for the api call so we  can display the weather and setcity will update the weather in each city //
  const [cityWeather, setCityWeather] = useState("");
  const [showForm, setShowForm] = useState(false);
  // allEngeers will sgtart with the data we have and setAllEngeers will update the data everytime we add a  new  engeers data .//
  const [allEngineers, setAllEngineers] = useState(data);
  const fruitImages = [
    fruits1,
    fruits2,
    fruits3,
    fruits4,
    fruits5,
    fruits6,
    fruits7,
    fruits8,
    fruits9,
    fruits10,
  ];
  //profile is holding the object in the data  array at 0 index (so me)when we click on the card then the setProfile will set a new card //
  const [profile, setProfile] = useState(data[0]);
  const [formInput, setFormInput] = useState({
    handle: "",
    timeZone: "",
    favCity: "",
    favColor: "#EF5E5E",
    favTheme: "",
    favLang: "",
    favSnack: "",
    favMusic: "",
    imgSrc: "",
  });

  //this fucntion job is to call the get weather function and makes the card show up in the handle section //
  const displayCardInfo = (e, item) => {
    setProfile(item);
    console.log("item", item);
    //this sepatates strings were there is a comma and creates a new array of items , we really dont need this in the code it is not doing anything on line 60//
    let citySplit = item.favCity.split(",")[0];
    getWeather(citySplit);
  };

  const formResponseChange = (e) => {
    const value = e.target.value;
    console.log("formInput", formInput);
    setFormInput({ ...formInput, [e.target.name]: value });
    console.log(formInput.favCity);
  };

  async function getWeather(city) {
    let response =
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d7fae06930908e1dc113064af8675c35
    `);
    let cityData = await response.json();
    if (cityData.weather) {
      console.log(cityData.weather[0].description);
      setCityWeather(cityData.weather[0].description);
    }
  }

  // const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    allEngineers.push(formInput);
    console.log(allEngineers);
    setAllEngineers(allEngineers);
    document.getElementById("#form");
    e.target.reset();
    setShowForm(false);
  };
  // this is when you click onthe button then you cna see the form becausse itts set on true ,this is shown below on the button //
  const displayForm = () => {
    setShowForm(true);
  };

  // this is useEffect is only used without the user is not doing something , so like if the time changes or somethoing changes that is not the user doing it , so technically we dont need this useeffect it is doing nothing lines 96 to 98 //
  useEffect(() => {
    getWeather(profile.favCity);
  }, [profile]);

  return (
    //JSX

    <div className="main-section">
      <Header />
      <h1>Our Engineers</h1>
      <div className="card-wrapper">
        {allEngineers.map((item, index) => (
          <button
            key={index}
            className="card-button"
            onClick={(event) => displayCardInfo(event, item)}
          >
            <Card
              imgSrc={
                index <= 9
                  ? fruitImages[index]
                  : index > 9 && item.imgSrc === "../Images/fruits1.jpg"
                  ? fruitImages[1]
                  : fruitImages[2]
              }
              handle={item.handle}
              timeZone={item.timeZone}
              favColor={item.favColor}
              key={index}
            />
          </button>
        ))}
      </div>

      <div className="button-div">
        <button className="add-btn" onClick={displayForm}>
          Add An Engineer
        </button>
      </div>

      <div className="profile-wrapper">
        <h2 className="heading-handle">{profile.handle}</h2>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="time">Time Zone</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>{profile.timeZone}</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-color">Favorite Color</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4 style={{ color: profile.favColor }}> &#9679;</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-language">Favorite Programming Language</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>{profile.favLang}</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-theme">Favorite Coding Theme</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>{profile.favTheme}</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-snack">Favorite Coding Snack</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>{profile.favSnack}</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-music">Favorite Coding Music</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>{profile.favMusic}</h4>
          </span>
        </div>

        <div className="handle-cont-div">
          <span className="profile-detail">
            <p className="handle-weather">Favorite City’s Weather Today</p>
          </span>
          <p className="gap">Gap Provision</p>
          <span className="profile-answers">
            <h4>
              {profile.favCity} has {cityWeather}
            </h4>
          </span>
        </div>
      </div>
      {showForm ? (
        <div className="form-wrapper">
          <h1 className="onbording">Engineer Onboarding</h1>

          <form id="form" onSubmit={handleSubmit}>
            <label className="handle-move" htmlFor="handleName">
              {" "}
              Your handle/name:{" "}
            </label>

            <input
              type="text"
              name="handle"
              value={formInput.handle}
              onChange={(e) => formResponseChange(e)}
              required
            ></input>
            <label className="text-move">Please select: </label>
            <select
              name="timeZone"
              placeholder="text"
              value={formInput.timeZone}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Time Zone</option>
              <option value="Hawaiian-Aleutian Time">
                Hawaiian-Aleutian Time Zone (HDT/HST/HT)
              </option>
              <option value="Alaskan-Yukon Time ">
                Alaskan-Yukon Time Zone (AKDT/AKST, YDT/YST)
              </option>
              <option value="Pacific Time">
                Pacific Time Zone (PDT/PST/PT)
              </option>
              <option value="Mountain Time ">
                Mountain Time Zone (MDT/MST/MT)
              </option>
              <option value="Central Time ">
                Central Time Zone (CDT/CST/CT)
              </option>
              <option value="Eastern Time  ">
                Eastern Time Zone (EDT/EST/ET)
              </option>
            </select>
            <input
              className="color-bar"
              type="color"
              name="favColor"
              value={formInput.favColor}
              onChange={(e) => formResponseChange(e)}
            ></input>
            <select
              name="favLang"
              placeholder=""
              value={formInput.favLang}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Programming Language</option>
              <option value="HTML">HTML</option>
              <option value="Css">Css</option>
              <option value="Jquery">JavaScript</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">JavaScript</option>
            </select>
            <select
              name="favTheme"
              value={formInput.favTheme}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Coding Theme</option>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
            </select>
            <select
              name="favSnack"
              value={formInput.favSnack}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Coding Snack</option>
              <option value="Bitter">Something Bitter</option>
              <option value="Salty">Something Salty</option>
              <option value="Sour">Something Sour</option>
              <option value="Sweet">Something Sweet</option>
              <option value="Umami">Something Umami</option>
              <option value=" combination">
                Something that's a combination of the above
              </option>
              <option value="None of the above">None of the above</option>
            </select>
            <select
              name="favMusic"
              value={formInput.favMusic}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Coding Music</option>
              <option value="Vocals only">
                Vocals only: prefer music which only features (a) vocalist(s)
              </option>
              <option value="Instrumental only">
                Instrumental only: prefer instrumental music without lyrics
              </option>
              <option value="Vocals + Instrumental">
                Vocals + Instrumental: prefer music containing both vocals and
                instruments
              </option>
              <option value="No music">
                No music: prefer the melodic tune of my own thoughts and
                keyboard clicks
              </option>
            </select>
            <select
              name="favCity"
              value={formInput.favCity}
              onChange={(e) => formResponseChange(e)}
            >
              <option value="">Favorite City</option>
              <option value="Los Angeles, California">
                Los Angeles, California
              </option>
              <option value="San Francisco, California">
                San Francisco, California
              </option>
              <option value="Portland, Oregon">Portland, Oregon</option>
              <option value="Seattle, Washington">Seattle, Washington</option>
              <option value="Denver, Colorado">Denver, Colorado</option>
              <option value="Tuscon, Arizona">Tuscon, Arizona</option>
              <option value="Austin, Texas">Austin, Texas</option>
              <option value="Chicago, Illinois">Chicago, Illinois</option>
              <option value="Nashville, Tennessee">Nashville, Tennessee</option>
              <option value="New Orleans, Louisiana">
                New Orleans, Louisiana
              </option>
              <option value="Orlando, Florida">Orlando, Florida</option>
              <option value="Atlanta, Georgia">Atlanta, Georgia</option>
              <option value="New York, New York">New York, New York</option>
              <option value="Honolulu, Hawaii">Honolulu, Hawaii</option>
              <option value="Anchorage, Alaska">Anchorage, Alaska</option>
            </select>
            <div className="image-form-wrapper">
              <div className="fruits1-choice">
                <img className="fruit-image-form" src={fruits1} alt="fruit" />
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgSrc"
                  value="../Images/fruits1.jpg"
                  onChange={(e) => formResponseChange(e)}
                />
              </div>
              <div className="fruits2-choice">
                <img className="fruit-image-form" src={fruits2} alt="fruit" />
                <input
                  className="form-check-input"
                  type="radio"
                  name="imgSrc"
                  value="../Images/fruits2.jpg"
                  onChange={(e) => formResponseChange(e)}
                />
              </div>
            </div>

            <button className="add-engineer">Add Engineer</button>
          </form>
        </div>
      ) : null}
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
