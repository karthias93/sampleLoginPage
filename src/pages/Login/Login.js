import React from 'react'
import componentStyles from './Login.module.scss'
import { Link } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

const Login = () => {
  return (
    <div className={`${componentStyles["Login"]} row m-0`}>
      <div className={`${componentStyles["Login-container"]} col-12`}>
        <div className={`${componentStyles["Login-card"]} card card-block mx-auto`}>
          <img src="/images/BrewLogix_Logo.png"
            srcSet="/images/BrewLogix_Logo@2x.png 2x, /images/BrewLogix_Logo@3x.png 3x"
            className={componentStyles["BrewLogix_Logo"]} alt="BrewLogix" />
          <div className={componentStyles["Login-form-container"]}>
            <Form>
              <FormGroup>
                <Label for="email" className={componentStyles["form-label"]}>Email Address</Label>
                <Input type="email" className="form-control" id="email" />
              </FormGroup>
              <FormGroup className={`${componentStyles["password"]}`}>
                <Label for="pwd" className={componentStyles["form-label"]}>Password<span className={componentStyles["show-password"]}>Show Password</span></Label>
                <Input type="password" className="form-control" id="pwd" />
              </FormGroup>
              <Link to="/forgot-password">Forgot Password?</Link>
              <div>
                <Button type="submit" className="btn btn-default">SIGN IN</Button>
              </div>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Remember me
                </Label>
              </FormGroup>
            </Form>
          </div>
          <div className={`${componentStyles['Login-footer-container']} text-center`}>
            <hr />
            <div className={componentStyles["Footer-text"]}>Need Assistance? 800-257-6898 | support@brewlogix.com</div>
            <div className={componentStyles["Footer-text"]}>©2020 BrewLogix LLC. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
