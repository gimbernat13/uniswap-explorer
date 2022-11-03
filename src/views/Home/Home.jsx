/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import React from 'react';
import { Card } from 'components/atomic/atoms/Card/Card';
import {
  UilWaterGlass,
} from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export function Home({ routes }) {
  return (
    <div>
      {/* <GradientTitle title="Uniswap Explorer" /> */}
      <Styled.ShitGrid>
        <Link to="/pairs">
          <Card flex>
            <Styled.ShitCard>
              <div>

                <UilWaterGlass color="turquoise" size={50} />
              </div>
              <div>
                <div className="medium-text">Explore Pairs</div>
                <div>View Latest Shitcoins and RugPulls on the Ethereum network, get ready!</div>
              </div>
            </Styled.ShitCard>
          </Card>
        </Link>
        <Card flex>
          <Link to="/pairs">
            <Styled.ShitCard>
              <UilWaterGlass color="turquoise" size={50} />
              <div>
                <div className="medium-text">Explore Pairs</div>
                <div>View Latest Shitcoins  acljcalcj a  a e alskdfjalsdfj lasdj flkaslfa lawefk aweflkawjef land RugPulls on the Ethereum network, get ready!</div>
              </div>
            </Styled.ShitCard>
          </Link>
        </Card>

      </Styled.ShitGrid>

    </div>
  );
}
