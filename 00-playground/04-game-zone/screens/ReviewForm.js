import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";

import { globalStyles } from "../styles/global";

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(formikProps) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review title"
              onChangeText={formikProps.handleChange("title")}
              value={formikProps.values.title}
            />
            <TextInput
              style={globalStyles.input}
              multiline
              //   minHeight={160}
              placeholder="Review body"
              onChangeText={formikProps.handleChange("body")}
              value={formikProps.values.body}
            />
            <TextInput
              style={globalStyles.input}
              keyboardType="numeric"
              placeholder="Rating (1 - 5)"
              onChangeText={formikProps.handleChange("rating")}
              value={formikProps.values.rating}
            />
            <Button
              title="Add"
              color="maroon"
              onPress={() => formikProps.handleSubmit()}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
