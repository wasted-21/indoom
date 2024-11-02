"use client";
import { TextField, Typography, Select, FormControl, MenuItem, InputLabel, Button, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTranslations } from 'next-intl';

export default function Emailforgot({ nextStep, formData, updateFormData }) {
  const t = useTranslations('sign'); // Language

  // تحقق من إدخالات المستخدم
  const handleNext = () => {
      nextStep(); // الانتقال إلى الخطوة التالية إذا كانت البيانات مكتملة
  };

  return (
    <Grid container spacing={5} size={12} sx={{ p: 5 }}>
        <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h5" sx={{ color: 'inheart', fontWeight: '700' }}>{t('recovery password')}</Typography>
            <Typography variant="body2" sx={{ color: 'inheart', mt: 2 }}>{t("enter your email")}</Typography>
        </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Grid size={12}>
          <TextField
            fullWidth
            margin="dense"
            type="email"
            label={t("enter your email")}
          />
        </Grid>
        <Grid size={12}>
            <Button
              onClick={handleNext}
              variant="contained"
              sx={{ textTransform: 'none', fontSize: '15px', fontWeight: '600', width: '100%', mt: { xs: 2, md: 0.5 } }}
            >
              {t("next")}
            </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
