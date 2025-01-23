import React from "react";
import { Helmet } from "react-helmet";
import * as yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";
import { FaDeleteLeft } from "react-icons/fa6";
import {
  useDeleteDataMutation,
  useGetDataQuery,
  usePostDataMutation,
} from "../app/Slices/slices";

let schema = yup.object().shape({
  img: yup.string().required("Image is required!"),
  name: yup.string().required("Name is required"),
  price: yup.number().required("Price is required!").positive().integer(),
});

function Add() {
  let [postData] = usePostDataMutation();
  let [deleteData] = useDeleteDataMutation();
  let { data, isLoading, refetch } = useGetDataQuery();

 async function handleDelete(id) {
    deleteData(id)
    refetch()
  }
  return (
    <>
      <Helmet>
        <title>Add Page</title>
      </Helmet>
      <div className="Add">
        <h1>Add Formu</h1>
        <Formik
          initialValues={{ name: "", price: "", img: "" }}
          validationSchema={schema}
          onSubmit={async (values) => {
            await postData(values);
            refetch();
            
            
            Swal.fire({
              icon: "success",
              title: `${values.name} uğurla əlavə olundu!`,
              showConfirmButton: false,
              timer: 1500,
            });
            values.name= ''
            values.price= ''
            values.img= ''
          }}
          
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="text" name="img" placeholder="Enter New Image" />
              <ErrorMessage
                name="img"
                component="div"
                style={{ color: "red" }}
              />

              <Field type="text" name="name" placeholder="Enter New Name" />
              <ErrorMessage
                name="name"
                component="div"
                style={{ color: "red" }}
              />

              <Field
                type="number"
                name="price"
                placeholder="Enter New Number"
              />
              <ErrorMessage
                name="price"
                component="div"
                style={{ color: "red" }}
              />

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
     <div className="table">
      <h1>Products Table</h1>
     <table>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price$</th>
            <th>Delete</th>
          </tr>
          {isLoading ? (
            <h1>...Loading</h1>
          ) : data.length == 0 ? (
            <h1>Data Yoxdur</h1>
          ) : (
            data.map((item) => (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td><img src={item.img} alt=""style={{width:"150px",height:"200px",objectFit:"cover"}} /></td>
                <td>{item.name}</td>
                <td>{item.price}$</td>
                <td>
                 <button onClick={() => handleDelete(item._id)}>
                 <FaDeleteLeft />
                 </button>
                </td>
              </tr>
            ))
          )}
        </table>
     </div>
      </div>
    </>
  );
}

export default Add;
