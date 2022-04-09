import Modal, { ModalBody, ModalFooter } from "src/components/Modal";

import FORM_OPTIONS from "src/data/FormOptions";

const Form = (props) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    props.onFormSubmit(formValues);
    props.onCloseForm();
  }

  return (
    <Modal onClickBackdrop={props.onCloseForm} onCloseModal={props.onCloseForm}>
      <form onSubmit={handleFormSubmit}>
        <ModalBody>
          <div>
            <h1>New delivery</h1>
            <p>Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</p>
          </div>

          <div>
            <label htmlFor="order-id">Order ID</label>
            <input type="text" name="order_id" id="order-id" required />
          </div>

          <div>
            <label htmlFor="technician">Technician</label>
            <select name="technician" id="technician" required>
              {FORM_OPTIONS.technician.map((technician) => <option>{technician}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="platform">Platform</label>
            <select name="platform" id="platform" required>
              {FORM_OPTIONS.platform.map((platform) => <option>{platform}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="drone">Drone</label>
            <select name="drone" id="drone" required>
              {FORM_OPTIONS.drone.map((drone) => <option>{drone}</option>)}
            </select>
          </div>
        </ModalBody>

        <ModalFooter>
          <div>
            <button onClick={props.onCloseForm}>Cancel</button>
            <button type="submit">Create new delivery</button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default Form;
