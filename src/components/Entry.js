
export default function Entry(props) {
    return (
        <div className="term">
            <p>{props.id}</p>
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.img}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
    )
}