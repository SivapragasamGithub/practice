function Card(props) {
    return (
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">{props.subs}</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">
              ${props.price}
              <small class="text-body-secondary fw-light">/mo</small>
            </h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>{props.users} users included</li>
              <li>{props.storage}GB of storage</li>
              {props.email == "normal" && <li>Email support</li>}
              {props.email == "priority" && <li>Priority email support</li>}
              {props.email == "phone" && <li>Phone and email support</li>}
              <li>Help center access</li>
            </ul>
            <button
              type="button"
              class="w-100 btn btn-lg btn-outline-primary"
              control-id="ControlID-3"
            >
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    );
  }
  export default Card;