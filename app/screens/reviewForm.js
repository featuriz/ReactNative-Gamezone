import { Formik } from 'formik'
import React from 'react'
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/global'

export default function ReviewForm({ addReview }) {
    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                // onSubmit={values => console.log(values)}
                onSubmit={(values, { setSubmitting, resetForm }) => {

                    setTimeout(() => {
                        addReview(values);
                        // console.log(values);
                        // Alert.alert(JSON.stringify(values, null, 1));
                        setSubmitting(false);
                        resetForm()
                    }, 400);

                }}
            >
                {
                    ({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Review title'
                                onChangeText={handleChange('title')}
                                onBlur={handleBlur('title')}
                                value={values.title}
                            />
                            <TextInput
                                style={globalStyles.input}
                                multiline
                                placeholder='Review body'
                                onChangeText={handleChange('body')}
                                onBlur={handleBlur('body')}
                                value={values.body}
                            />
                            <TextInput
                                style={globalStyles.input}
                                placeholder='Rating (1-5)'
                                onChangeText={handleChange('rating')}
                                onBlur={handleBlur('rating')}
                                value={values.rating}
                                keyboardType='numeric'
                            />
                            <Button title='Submit' color='maroon' onPress={handleSubmit} />
                        </View>
                    )
                }

            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({})
