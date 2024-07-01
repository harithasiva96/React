import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCartData } from "../../store/cart.js";

const Dashboard = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData.data);
  const isLoading = useSelector((state) => state.cartData.status);
  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      {isLoading === "pending" ? (
        <div>LOADING ...</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ marginBottom: "1rem" }}>Cart Login Details</h1>
          <table style={{ borderCollapse: "collapse", width: "80%" }}>
            <thead>
              <tr>
                <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  User ID
                </th>
                <th style={{ border: "1px solid black", padding: "8px" }}>
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((data) => (
                <tr key={data.id}>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.id}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {data.userId}
                  </td>
                  <td style={{ border: "1px solid black", padding: "8px" }}>
                    {formatDate(data.date)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default Dashboard;

