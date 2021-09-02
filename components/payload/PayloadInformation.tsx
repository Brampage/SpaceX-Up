import {Payload} from '../../models/launches/launches.model';

export default function PayloadInformation({payloads}: {payloads: Payload[]}) {
  return (
    <>
      <p>The payload of this mission comprised of the following:</p>
      <table>
        <tbody>
          {payloads.map((payload) => (
            <>
              <tr key={payload.payload_id}>
                <th>Manufacturer</th>
                <td>{payload.manufacturer}</td>
              </tr>
              <tr>
                <th>Nationality</th>
                <td>{payload.nationality}</td>
              </tr>
              <tr>
                <th>Payload Type</th>
                <td>{payload.payload_type}</td>
              </tr>
              <tr>
                <th>Payload Mass</th>
                <td>{payload.payload_mass_kg}KG</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </>
  );
}
