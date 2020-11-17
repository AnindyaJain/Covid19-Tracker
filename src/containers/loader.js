import React from "react";
import Loader from '../components/loader';
import useTotalNumbers from "../utils/useTotalNumbers";

export default function LoaderContainer() {
    const isLoading = useTotalNumbers()[1];
    if (isLoading === false) {
        return null; } 
    else {
        return (
            <Loader>
                <div className="loader center">
                <i className="fa fa-cog fa-spin" />
                </div>
            </Loader>
        );
    }
}

