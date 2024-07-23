import './ServiceCoverage.css';

export default function ServiceCoverage() {
  return (
    <div className='service-coverage'>
      <h2>We Are At Your Doorstep</h2>
      <p>Our mobile professionals visit residents in the following locations:</p>
      <table>
        <thead>
          <tr>
            <th>County</th>
            <th>Coverage</th>
            <th>Travel Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nairobi</td>
            <td>Everywhere except the suburbs in the east.</td>
            <td>Zero except Ksh 300 to Utawala</td>
          </tr>
          <tr>
            <td>Kiambu</td>
            <td>Ruiru, Ruaka, Kiambu, Juja, Tatu City, Wangige, Thindigua, Kikuyu, ...</td>
            <td>Ksh 500</td>
          </tr>
          <tr>
            <td>Kajiado</td>
            <td>Ngong & Ongata Rongai</td>
            <td>Ksh 700</td>
          </tr>
          <tr>
            <td>Machakos</td>
            <td>Mlolongo, Syokimau, Kitengela, & Athi-river</td>
            <td>Zero except Ksh 500 to bring the massage table.</td>
          </tr>
        </tbody>
      </table>
      <p>You can easily confirm on this map whether your location is within our service reach.</p>
      <a href="https://www.google.com/maps/d/viewer?mid=1gZNLZPQ3BpV4G-KU9zFQj4aVNZmQbfsH&usp=sharing" target="_blank" rel="noopener noreferrer" className="map-link">
        View Coverage Map
      </a>
    </div>
  );
}
