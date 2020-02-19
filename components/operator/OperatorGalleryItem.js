import React from 'react';
import { Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

class Operator extends React.Component {
  render() {
    const rarityColorCheck = rarity => {
      switch (rarity) {
        case 0:
          return 'rarity-0';
        case 1:
          return 'rarity-1';
        case 2:
          return 'rarity-2';
        case 3:
          return 'rarity-3';
        case 4:
          return 'rarity-4';
        case 5:
          return 'rarity-5';
        default:
          return 'rarity-0';
      }
    };

    const { operator, operator_key } = this.props;

    const stars = [];

    for (let i = 0; i < operator.rarity + 1; i++) {
      stars.push(<FontAwesomeIcon icon={faStar} size={'xs'} rotation={270} />);
    }

    return (
      <Link href={'/operator/[operator_id]'} as={`/operator/${operator_key}`}>
        <div className="operator">
          <div className="operator-star-and-profession">
            <img
              className={'m-1'}
              height={24}
              src={`/img/classes/${operator.profession}.png`}
              alt="Profession"
            />
            {stars}
          </div>
          <div className="operator-portrait">
            <img
              src={`/img/portraits/${operator.phases[0].characterPrefabKey}_1.png`}
              alt="Operator Photos"
              width={100}
              height={190}
            />
          </div>
          <div className="slanted-shit">{}</div>
          <div className={`operator-rarity-shadow ${rarityColorCheck(operator.rarity)}`}>{}</div>
          <div className="operator-name text-center ">{operator.name}</div>
        </div>
      </Link>
    );
  }
}

{
  /*<Col md={1} className={'p-1'} key={operator.phases[0].characterPrefabKey}>*/
}
{
  /*  <div className={`gallery ${rarityCheck(operator.rarity)}`}>*/
}
{
  /*    <Link*/
}
{
  /*      href="/operator/[operator_id]"*/
}
{
  /*      as={`/operator/${operator.phases[0].characterPrefabKey}`}*/
}
{
  /*    >*/
}
{
  /*      <div className="img">*/
}
{
  /*        <img*/
}
{
  /*          src={`/img/portraits/${operator.phases[0].characterPrefabKey}_1.png`}*/
}
{
  /*          height={70}*/
}
{
  /*          alt="Character Avatar"*/
}
{
  /*        />*/
}
{
  /*        <p className={'text-center gallery-text'}>{operator.name}</p>*/
}
{
  /*      </div>*/
}
{
  /*    </Link>*/
}
{
  /*  </div>*/
}
{
  /*</Col>*/
}

export default Operator;
