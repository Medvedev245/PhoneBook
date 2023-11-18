import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import Registration from 'Pages/Regitration/Registration';
import Login from 'Pages/Login/Login';

const Home = lazy(() => import('../Pages/Home'));
const ContactDetails = lazy(() =>
  import('../Pages/ContactDetails/ContactDetails')
);
const PhoneView = lazy(() => import('../Pages/PhoneView/PhoneView'));
const ContactEdit = lazy(() => import('../Pages/ContactEdit/ContactEdit'));
const AddContacts = lazy(() => import('../Pages/AddContacts/AddContacts'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact/:id" element={<ContactDetails />}>
            <Route index element={<PhoneView />} />
            <Route path="edit" element={<ContactEdit />} />
          </Route>
          <Route path="addContact" element={<AddContacts />} />
          <Route
            path="/login"
            element={
              <Suspense>
                <Login />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/signUp"
          element={
            <Suspense>
              <Registration />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
