# Gamezone

A mobile application for Game Ratings. Includes,

- Navigation
- List
- Model
- Form
- Validation
- Slider (Menu and Model)
- Background Images

## Additional

- Global Styles
- Navigation
  - [React Navigation](https://reactnavigation.org/)
  - `npm install @react-navigation/native`
  - `expo install react-native-screens react-native-safe-area-context`

## 1 Setup

- Created pages,
  - Home
    - Some dummy content in state
  - About
  - ReviewDetails

## 2 Stack Navigation

- Added Stack Navigation for,
  - Home
  - Review Details

## 3 Drawer Navigation

- Added Drawer Navigation for,
  - Home
  - About

### 3 Testing:

- Everything works fine.
  - Home, About page displays common header and list to draw
  - Details page header with back button.
  - In details page common header is not displaying (This is right).

## 4 Card

- A card style is added as a template
  - Home list
  - Review Details

## 5 Images

- Ratings are displayed in images
  - Created const in global
  - calling this array on place of image, to display dynamic image.
    - because, '+ item.rating +' , will not work, it throws error.

## 6 Background Image

- Added background Image to header
- Added an Image to Header

## 7 Modal

- Added modal in homepage
  - Toggle State
  - animation slide
  - MaterialIcons - add, close. Which toggle the button state
  - styles to model, buttons
