import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import { globalStyles } from "../styles/global";

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      "is-num-1-5",
      "Rating must be a number 1 - 5",
      (val) => parseInt(val) < 6 && parseInt(val) > 0
    ),
});

export default function ReviewForm({ addReview }) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        validationSchema={reviewSchema}
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
              onBlur={formikProps.handleBlur("title")}
              value={formikProps.values.title}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.title && formikProps.errors.title}
            </Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review body"
              onChangeText={formikProps.handleChange("body")}
              onBlur={formikProps.handleBlur("body")}
              value={formikProps.values.body}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.body && formikProps.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              keyboardType="numeric"
              placeholder="Rating (1 - 5)"
              onChangeText={formikProps.handleChange("rating")}
              onBlur={formikProps.handleBlur("rating")}
              value={formikProps.values.rating}
            />
            <Text style={globalStyles.errorText}>
              {formikProps.touched.rating && formikProps.errors.rating}
            </Text>
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
