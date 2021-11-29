import { Navbar } from "@app/components/Navbar/Navbar";
import { Field } from "@components/Forms/FormFields";
import { FormSelection } from "@components/Forms/FormSelection";
import { requiredAgeVal, requiredEmailVal, requiredGenderVal, requiredTextVal } from "@components/Forms/Validation";
import { NavMenu } from "@components/Navbar/NavMenu";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Button, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useFormik } from 'formik';
import React, { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';


export const FormExample: FC<any> = (props) => {

    // Menu 
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClose = () => setAnchorEl(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget)

    const navigate = useNavigate();

    // Form Handling 
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            age: "",
            gender: "",
            time: "",
        },
        validationSchema: Yup.object().shape({
            firstName: requiredTextVal(),
            lastName: requiredTextVal(),
            email: requiredEmailVal(),
            age: requiredAgeVal(),
            gender: requiredGenderVal(),
            time: requiredTextVal(),
        }),
        onSubmit: (values) => {
            console.log(values)
            navigate("/")
        }
    })

    // Our final Form format
    const Form = {
        firstName: Field(formik, 'firstName', 'First Name', 'text'),
        lastName: Field(formik, 'lastName', 'Last Name', 'text'),
        email: Field(formik, 'email', 'Email', 'email'),
        age: Field(formik, 'age', 'Age', 'number'),
        gender: Field(formik, 'gender', 'Gender', 'text'),
        time: Field(formik, 'time', "Time", 'text'),
    }

    return (
        <div className="overflow-y-scroll min-w-full overflow-x-hidden ">
            <Navbar
                title="Form Example"

                icon={
                    <Link to="/" className="mr-2">
                        <IconButton size="medium">
                            <ArrowBackIcon className="text-white" />
                        </IconButton>
                    </Link>
                }
                suffix={
                    <IconButton onClick={handleClick}>
                        <MoreVertIcon className="text-white" />
                    </IconButton>
                }
            />
            <NavMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                values={[
                    {
                        label: "item 1",
                        props: {
                            onClick: () => { handleClose() }
                        }
                    },
                    {
                        label: " item 2 ",
                        props: {
                            onClick: () => { handleClose() }
                        }
                    }
                ]}
            />
            <div className="w-full overflow-x-hidden ">
                < form onSubmit={formik.handleSubmit} className=" flex flex-col justify-center items-center lg:gap-4 gap-3 p-4 " >

                    <h1 style={{ color: "#1976d2" }} className="  font-bold flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap" >
                        Powered By Formik
                    </h1>

                    <div className="flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap ">
                        <TextField {...Form['firstName']} />
                        <TextField {...Form['lastName']} />
                    </div>

                    <div className="flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap">
                        <TextField {...Form['email']} />
                    </div>

                    <div className="flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap ">
                        <TextField {...Form['age']} />
                        <FormSelection
                            label="Gender"
                            selectionProps={Form['gender']}
                            menuItems={GenderSelections()}
                        />
                    </div>

                    <div className="flex flex-row gap-4 w-full flex-wrap lg:flex-nowrap ">
                        <FormSelection
                            label="Time of Day"
                            selectionProps={Form['time']}
                            menuItems={TimeOfDaySelections()}
                        />
                    </div>
                    <div className="flex flex-row gap-4 my-8 w-full flex-wrap lg:flex-nowrap justify-end">
                        <Button variant="contained" color="primary" type="submit"  >
                            Submit
                        </Button>
                    </div>
                </form >
            </div>
        </div >
    )
}






function BasicDatePicker(props) {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Basic example"
                value={props.value}
                onChange={props.formik.handlechange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}

interface MenuSelectionType {
    label: string;
    value: string;
}

function TimeOfDaySelections(): MenuSelectionType[] {
    return [
        {
            label: 'Day',
            value: 'day'
        },
        {
            label: 'Night',
            value: 'night'
        }
    ]
}

function GenderSelections(): MenuSelectionType[] {

    return [
        {
            label: 'Male',
            value: 'Male',
        },
        {
            label: 'Female',
            value: 'Female'
        },
        {
            label: 'Other',
            value: 'Other'
        }
    ]

}