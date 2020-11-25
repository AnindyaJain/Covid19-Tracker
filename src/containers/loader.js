import React from "react";
import Loader from '../components/loader';
import useTotalNumbers from "../utils/useTotalNumbers";

export default function LoaderContainer(id) {
    const url = "https://disease.sh/v3/covid-19/all";
    const isLoading = useTotalNumbers(url)[1];
    if (isLoading === false) {
        return null; } 
    else {
        return (
          <Loader id='loader-container'>
            <div className="loader center">
              <i
                className="fa fa-spinner fa-3x"
                aria-hidden="true"
                style={{ color: "#ffffff" }}
              />
            </div>
          </Loader>
        );
    }
}

