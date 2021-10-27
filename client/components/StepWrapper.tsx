import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material'
interface StepWrapperProps {
  activeStep: number
}
const steps = ['Информация о треке', 'Загрузка обложки', 'Загрузка трэка']
const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, idx) => (
          <Step key={idx} completed={activeStep > idx}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: '70px 0', height: 270 }}
      >
        <Card style={{ width: 595 }}>{children}</Card>
      </Grid>
    </Container>
  )
}

export default StepWrapper
