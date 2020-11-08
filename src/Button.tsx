import React, { FC } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

type ButtonProps = {
  id: string;
  email: string;
};

const Button: FC<ButtonProps> = ({ email, id }) => (
  <Wrapper>
    <p>{email}</p>
    <form action="https://www.paypal.com/donate" method="post" target="_top">
      <input type="hidden" name="hosted_button_id" value={id} />
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif"
        name="submit"
        alt="Donate with PayPal button"
      />
    </form>
  </Wrapper>
);

export default Button;
