"use client";
import { Box, LinearProgress } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from 'react';
import Stepone from './stepone.jsx';
import Steptwo from './steptwo.jsx';
import Stepotp from './stepotp.jsx';

export default function SignupForm() {
  const theme = useTheme(); //theme

  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false); // State to control loading indicator
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    day: '',
    month: '',
    year: '',
    gender: '',
    email: '',
    password: '',
  });

  // لتحديث البيانات المُدخلة من المستخدم
  const updateFormData = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  // للانتقال إلى الخطوة التالية
  const nextStep = () => {
    if (step === 1) {
      setLoading(true); // Show loading before moving to the next step
      setTimeout(() => {
        setLoading(false);
        setStep(step + 1);
      }, 1000); // Adjust the delay as needed
    } else {
      setStep(step + 1);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.colors.box,
        borderRadius: '15px',
        overflow: 'hidden',
        width: { xs: '100%', sm: '1000px' },
        minHeight: '400px',
        //maxHeight: '600px',
      }}
    >
      {loading && <LinearProgress />} {/* Show LinearProgress only when loading is true */}
      {step === 1 && (
        <>        
          <Stepone nextStep={nextStep} formData={formData} updateFormData={updateFormData} />
        </>
      )}
      {step === 2 && (
        <>
          <Steptwo nextStep={nextStep} formData={formData} updateFormData={updateFormData} />
        </>
      )}
      {step === 3 && (
        <>
          <Stepotp formData={formData} />
        </>
      )}
    </Box>
  );
}
