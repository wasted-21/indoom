"use client";
import { useState } from 'react';
import { TextField, Typography, Select, FormControl, MenuItem, InputLabel, Button, Box, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Terms from "./terms"; //Button For Terms
import { useTranslations } from 'next-intl';
import Signin from './signin';

export default function Stepone({ nextStep, formData, updateFormData }) {
  const t = useTranslations('sign'); // Language

  const [error, setError] = useState(false); // حالة للتحقق من الخطأ

  // تحقق من إدخالات المستخدم
  const handleNext = () => {
    // Ensure all fields are filled
    if (!formData.firstName || !formData.lastName || !day || !month || !year || !gender) {
      setError("All fields are required.");
      return;
    }else{

      nextStep(); // الانتقال إلى الخطوة التالية إذا كانت البيانات مكتملة

    }

  };

  return (
    <Grid container spacing={5} size={12} sx={{ p: 5 }}>
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h5" sx={{ color: 'inheart', fontWeight: '700' }}>{t('signup')}</Typography>
        <Typography variant="body2" sx={{ color: 'inheart', mt: 2 }}>{t('signup')}</Typography>

        <Box sx={{display:{xs:'none', md:'block'}}}>
          <Signin/>
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid size={12}>
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            type="text"
            id="firstName"
            error={error}
            label={t("first name")}
            variant="outlined"
            value={formData.firstName}
            onChange={(e) => updateFormData('firstName', e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            margin="dense"
            type="text"
            id='lastName'
            error={error}
            label={t("last name")}
            value={formData.lastName}
            onChange={(e) => updateFormData('lastName', e.target.value)}
          />
        </Grid>
        <Grid container spacing={2}>
        <Grid size={4}>
            <TextField
              fullWidth
              margin="dense"
              type="string"
              id="day"
              error={error}
              label={t("day")}
              variant="outlined"
              value={formData.day} // Update value
              onChange={(e) => updateFormData('day', e.target.value)} // Update formData
            />
          </Grid>
          <Grid size={4}>
            <FormControl fullWidth margin="dense" error={error}>
              <InputLabel id="month">{t("month")}</InputLabel>
              <Select
                labelId="month"
                id="month"
                error={error}
                label={t("month")}
                value={formData.month} // Update value
                onChange={(e) => updateFormData('month', e.target.value)} // Update formData
              >
                <MenuItem value="January">{t('months.January')}</MenuItem>
                <MenuItem value="February">{t('months.February')}</MenuItem>
                <MenuItem value="March">{t('months.March')}</MenuItem>
                <MenuItem value="April">{t('months.April')}</MenuItem>
                <MenuItem value="May">{t('months.May')}</MenuItem>
                <MenuItem value="June">{t('months.June')}</MenuItem>
                <MenuItem value="July">{t('months.July')}</MenuItem>
                <MenuItem value="August">{t('months.August')}</MenuItem>
                <MenuItem value="September">{t('months.September')}</MenuItem>
                <MenuItem value="October">{t('months.October')}</MenuItem>
                <MenuItem value="November">{t('months.November')}</MenuItem>
                <MenuItem value="December">{t('months.December')}</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={4}>
            <TextField
              fullWidth
              margin="dense"
              type="year"
              id="year"
              error={error}
              label={t("year")}
              variant="outlined"
              value={formData.year} // Update value
              onChange={(e) => updateFormData('year', e.target.value)} // Update formData
            />
          </Grid>
        </Grid>
        <Grid size={12}>
          <FormControl fullWidth margin="dense" error={error}>
            <InputLabel id="gender">{t("gender")}</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              label={t("gender")}
              value={formData.gender} // Update value
              onChange={(e) => updateFormData('gender', e.target.value)} // Update formData
            >
              <MenuItem value="male">{t("genders.male")}</MenuItem>
              <MenuItem value="female">{t("genders.female")}</MenuItem>
              <MenuItem value="other">{t("genders.other")}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid container mt={2}>
          <Grid size={{ xs: 12, sm: 8 }}>
            <Terms />
          </Grid>
          <Grid size={{ xs: 12, sm: 4 }}>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{ textTransform: 'none', fontSize: '15px', fontWeight: '800', width: '100%', mt: { xs: 2, md: 0.5 } }}
            >
              {t("next")}
            </Button>
          </Grid>
        </Grid>
        <Box sx={{display:{xs:'block', md:'none'}}}>
          <Signin/>
        </Box>
      </Grid>
    </Grid>
  );
}
