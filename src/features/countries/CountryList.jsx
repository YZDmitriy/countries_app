import { Card } from '../../components/Card';
import { List } from '../../components/List';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectControls } from '../controls/controls-slice';
import { loadCountries, selectCountriesInfo, selectVisibleCountries } from './countries-slice';

export const CountryList = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const controls = useSelector(selectControls);
  const countries = useSelector((state) =>
    selectVisibleCountries(state, controls)
  );
  const { status, error, qty } = useSelector(selectCountriesInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadCountries());
    }
  }, [qty, dispatch]);

  return (
    <>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>
      )}
    </>
  );
}