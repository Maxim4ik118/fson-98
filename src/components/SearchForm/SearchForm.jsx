import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const searchFormSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required!"),
});

const FORM_INITIAL_VALUES = {
  searchTerm: "",
};

const SearchForm = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={searchFormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Search product by brand or name</h2>
        <label>
          <Field type="text" name="searchTerm" placeholder="Enter search query..." />
          <ErrorMessage component="p" name="searchTerm" />
        </label>
        <button type="submit" aria-label="Search">
          🔍
        </button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
