import Modal, { ModalBody, ModalFooter } from "src/components/Modal";

import Button from "src/components/Button";
import FormControl from "src/components/Form/Control";
import FormInput from "src/components/Form/Input";
import FormLabel from "src/components/Form/Label";
import FormRow from "src/components/Form/Row";
import FormSelect from "src/components/Form/Select";

import FORM_OPTIONS from "src/data/FormOptions";

import classes from "./Form.module.css";

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
          <h2 className={classes.header}>New delivery</h2>
          <p className={classes.subtitle}>Please select the order ID and a technician to deploy the cargo. All elements are mandatory.</p>

          <FormRow>
            <FormControl>
              <FormLabel htmlFor="order-id">Order ID</FormLabel>
              <FormInput
                inputAttrs={{
                  type: 'text',
                  name: 'order_id',
                  id: 'order-id',
                  required: 'required'
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="technician">Technician</FormLabel>
              <FormSelect
                options={FORM_OPTIONS.technician}
                selectAttrs={{
                  name: 'technician',
                  id: 'technician',
                  required: 'required',
                }}
              />
            </FormControl>
          </FormRow>

          <FormRow>
            <FormControl>
              <FormLabel htmlFor="platform">Platform</FormLabel>
              <FormSelect
                options={FORM_OPTIONS.platform}
                selectAttrs={{
                  name: 'platform',
                  id: 'platform',
                  required: 'required',
                }}
              />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="drone">Drone</FormLabel>
              <FormSelect
                options={FORM_OPTIONS.drone}
                selectAttrs={{
                  name: 'drone',
                  id: 'drone',
                  required: 'required',
                }}
              />
            </FormControl>
          </FormRow>
        </ModalBody>

        <ModalFooter>
          <div className={classes.actions}>
            <Button variant="white" onClick={props.onCloseForm}>Cancel</Button>
            <Button variant="green" btnAttrs={{ type: "submit" }}>Create new delivery</Button>
          </div>
        </ModalFooter>
      </form>
    </Modal>
  )
}

export default Form;
