import { Formik } from 'formik'
import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/global'
import * as Yup from 'yup';
import FlatButton from '../shared/button';

const ReviewSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    body: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    rating: Yup.string()
        .required('Required')
        .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
            return parseInt(val) < 6 && parseInt(val) > 0;
        }),
});

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                // onSubmit={values => console.log(values)}
                validationSchema={ReviewSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {

                    setTimeout(() => {
                        addReview(values);
                        // console.log(values);
                        // Alert.alert(JSON.stringify(values, null, 1));
                        setSubmitting(false);
                        resetForm()
                    }, 400);

                }
                }
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            {errors.title && touched.title && <Text style={globalStyles.errorText}>{errors.title}</Text>}
                            <TextInput
                                style={globalStyles.input}
                                multiline
                                placeholder='Review body'
                                onChangeText={handleChange('body')}
                                onBlur={handleBlur('body')}
                                value={values.body}
                            />
                            {errors.body && touched.body && <Text style={globalStyles.errorText}>{errors.body}</Text>}
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating (1-5)'
                                onChangeText={handleChange('rating')}
                                onBlur={handleBlur('rating')}
                                value={values.rating}
                                keyboardType='numeric'
                            />
                            {errors.rating && touched.rating && <Text style={globalStyles.errorText}>{errors.rating}</Text>}
                            {/* <Button title='Submit' color='maroon' onPress={handleSubmit} /> */}
                            <FlatButton text="Submit" onPress={handleSubmit} />
                        </View>
                    )
                }

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({})
