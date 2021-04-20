# Test Cases

## Case 1: Login correctly / incorrectly
    - Test: Logging into our app using our Neurosity login and using inncorrect login information
    - Expected Result with correct data: a succesfully loggin, navigation to dashboard that is connected to our specific account
    - Expected Result with incorrect data: no loggin and no access to dashboard   

## Case 2: Update Data Recordings
    - Test: Create a new recording via emulator or headset while app is running, press update button
    - Expected Result: The new dataset is displayed in the list of datasets correctly and is able to be accessed

## Case 3: Pull Dataset from Firebase
    - Test: Select dataset from dropdown menu, click select 
    - Expected Result: The correct dataset is displayed in the developer console with all relevant information 

## Case 4: Navigating between pages
    - Test: Select settings page, select dashboard page
    - Expected Result: User is able to navigate to and from the different pages on the app. 

## Case 5: Logout functionality
    - Test: Select logout button to logout of account
    - Expected Result: App is redirected to Login page, user is not able to access dashboard or data, user can log back in
    
## Case 6: Display dataset of type Oddball
    - Test: Select recording from dropdown menu that corresponds with the Oddball data type, press select button
    - Expected Result: The app updates the chart and begins to display the data in chronological order  

## Case 7: Display dataset of type Eyes-Open
    - Test: Select recording from dropdown menu that corresponds with the Eyes-Open data type, press select button
    - Expected Result: The app updates the chart and begins to display the data in chronological order 

## Case 8: Display dataset of type Eyes-Closed
    - Test: Select recording from dropdown menu that corresponds with the Eyes-Closed data type, press select button
    - Expected Result: The app updates the chart and begins to display the data in chronological order 

## Case 9: Display dataset of type ERP
    - Test: Select recording from dropdown menu that corresponds with the ERP data type, press select button
    - Expected Result: The app updates the chart and begins to display the data in chronological order 

# Case 10: Display dataset of type Resting
    - Test: Select recording from dropdown menu that corresponds with the Resting data type, press select button
    - Expected Result: The app updates the chart and begins to display the data in chronological order 
