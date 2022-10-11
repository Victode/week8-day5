import { useEffect, useState, useContext } from 'react';
import Weather from './Weather';
import { DataContext } from '../contexts/DataProvider';

export default function LocationList() {
    const { weatherInfo } = useContext(DataContext)

    return (
        <div>
            { weatherInfo.map((location) => <Weather location={location} preview={true} key={location.name} />) }
        </div>
    )
}