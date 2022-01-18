import { runFetchData } from "@my-app/app/src/redux/sagas/authSaga";
import { RootState } from "@my-app/app/src/redux/storeNative";
import React from "react";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const UserInfo = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user.user);

  async function onLogin() {
    dispatch(
      runFetchData({
        email: "p.b.naumov@gmail.com",
        password: "pavliknaumov12",
      })
    );
  }

  if (!user) {
    return (
      <div>
        <p>Вы не вошли в систему!</p>
        <p>Войти?</p>
        <Button onPress={onLogin} title="Да" />
      </div>
    );
  }

  return (
    <>
      <div
        style={{
          padding: 8,
          borderWidth: 1,
          width: 300,
        }}
      >
        <p>Email: {user.email}</p>
        <p>UserId: {user.id}</p>
        <p>Country: {user.country}</p>
        <p>Preferred language: {user.language}</p>
      </div>
    </>
  );
};
