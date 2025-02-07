import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema } from './validations/userSchema.js';
import './App.css';
import background from './assets/background.png';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(userSchema),
  });

  const logSubmit = (data) => {
    console.log('Form submitted with data:', data);
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="info-container">
        <h1 className="main-title">Learn to code by<br />watching others</h1>
        <h3 className="description">
          See how experienced developers solve problems in real-time.<br />
          Watching scripted tutorials is great, but understanding how<br />
          developers think is invaluable.
        </h3>
      </div>

      <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit(logSubmit)}>
  <div className="form-inputs">
    <input
      type="text"
      placeholder="First Name"
      className={errors.firstName ? "input-error" : ""}
      {...register('firstName')}
    />
    {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}

    <input
      type="text"
      placeholder="Last Name"
      className={errors.lastName ? "input-error" : ""}
      {...register('lastName')}
    />
    {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}

    <input
      type="text"
      placeholder="Email Address"
      className={errors.email ? "input-error" : ""}
      {...register('email')}
    />
    {errors.email && <p className="error-message">{errors.email.message}</p>}

    <input
      type="tel"
      placeholder="Phone Number"
      className={errors.mobile ? "input-error" : ""}
      {...register('mobile')}
    />
    {errors.mobile && <p className="error-message">{errors.mobile.message}</p>}

    <button className="submit-button">CLAIM YOUR FREE TRIAL</button>
    <h6 className="terms">
      By clicking the button, you are agreeing to our Terms and Services.
    </h6>
  </div>
</form>

      </div>
    </div>
  );
}

export default App;
