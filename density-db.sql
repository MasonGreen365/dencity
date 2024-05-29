-- Table for APP_USER_TYPE
CREATE TABLE APP_USER_TYPE (
    AppUserTypeID SERIAL PRIMARY KEY,
    AppUserTypeName VARCHAR(255)
);

-- Table for APP_USER
CREATE TABLE APP_USER (
    AppUserID SERIAL PRIMARY KEY,
    AppUserTypeID INT REFERENCES APP_USER_TYPE(AppUserTypeID),
    AppUserEmail VARCHAR(255),
    AppUserPassword VARCHAR(255),
    AppUserFirstName VARCHAR(255),
    AppUserLastName VARCHAR(255),
    AppUserBirthDate DATE,
    AppUserJoinDate DATE
);

-- Table for PROPERTY_TYPE
CREATE TABLE PROPERTY_TYPE (
    PropertyTypeID SERIAL PRIMARY KEY,
    PropertyTypeName VARCHAR(255),
    PropertyTypeDescr TEXT
);

-- Table for PROPERTY
CREATE TABLE PROPERTY (
    PropertyID SERIAL PRIMARY KEY,
    PropertyTypeID INT REFERENCES PROPERTY_TYPE(PropertyTypeID),
    PropertyAddress VARCHAR(255),
    PropertyLatitude DECIMAL,
    PropertyLongitude DECIMAL,
    PropertySize INT,
    PropertyValuation DECIMAL,
    MiddleHousingEligible BOOLEAN
);

-- Table for PARCEL_TYPE
CREATE TABLE PARCEL_TYPE (
    ParcelTypeID SERIAL PRIMARY KEY,
    ParcelTypeName VARCHAR(255),
    ParcelTypeDescr TEXT
);

-- Table for PARCEL
CREATE TABLE PARCEL (
    ParcelID SERIAL PRIMARY KEY,
    ParcelTypeID INT REFERENCES PARCEL_TYPE(ParcelTypeID),
    ParcelSize DECIMAL,
    ParcelZoning VARCHAR(255)
);

-- Table for PROPERTY_PARCEL
CREATE TABLE PROPERTY_PARCEL (
    PropertyParcelID SERIAL PRIMARY KEY,
    PropertyID INT REFERENCES PROPERTY(PropertyID),
    ParcelID INT REFERENCES PARCEL(ParcelID),
    PropertyParcelUsage VARCHAR(255)
);

-- Table for DEVELOPER_COMPANY
CREATE TABLE DEVELOPER_COMPANY (
    DeveloperCompanyID SERIAL PRIMARY KEY,
    DeveloperCompanyName VARCHAR(255),
    DeveloperCompanyEmail VARCHAR(255)
);

-- Table for DEVELOPER
CREATE TABLE DEVELOPER (
    DeveloperID SERIAL PRIMARY KEY,
    DeveloperCompanyID INT REFERENCES DEVELOPER_COMPANY(DeveloperCompanyID),
    DeveloperLastName VARCHAR(255),
    DeveloperEmail VARCHAR(255)
);

-- Table for DEVELOPMENT
CREATE TABLE DEVELOPMENT (
    DevelopmentID SERIAL PRIMARY KEY,
    PropertyID INT REFERENCES PROPERTY(PropertyID),
    DeveloperID INT REFERENCES DEVELOPER(DeveloperID),
    DevelopmentDescr TEXT,
    DevelopmentStartDate DATE,
    DevelopmentEndDate DATE
);

-- Table for STATUS
CREATE TABLE STATUS (
    StatusID SERIAL PRIMARY KEY,
    StatusName VARCHAR(255),
    StatusDescr VARCHAR(255)
);

-- Table for PROFILE
CREATE TABLE PROFILE (
    ProfileID SERIAL PRIMARY KEY,
    AppUserID INT REFERENCES APP_USER(AppUserID),
    ProfileName VARCHAR(255),
    ProfileDescr TEXT
);

-- Table for DEVELOPMENT_STATUS
CREATE TABLE DEVELOPMENT_STATUS (
    DevelopmentStatusID SERIAL PRIMARY KEY,
    DevelopmentID INT REFERENCES DEVELOPMENT(DevelopmentID),
    ProfileName INT REFERENCES PROFILE(ProfileID),
    DevelopmentStatusDate DATE
);

-- Table for CONTACT
CREATE TABLE CONTACT (
    ContactID SERIAL PRIMARY KEY NOT NULL,
    Name VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Category VARCHAR(255) NOT NULL,
    Subject VARCHAR(255) NOT NULL,
    Message TEXT NOT NULL,
    DateSent TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
)