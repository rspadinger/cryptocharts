import styled, { css } from 'styled-components';
import React from 'react';

const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButton = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #03ff03;
    `};
`;

const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 130px 130px;
`;

export default function() {
  return (
    <Bar>
      <Logo>Crypto Dashboard</Logo>
      <div />
      {!this.state.firstVisit && (
        <ControlButton style={{marginRight:'0px'}}
          onClick={() => {
            this.setState({ page: 'dashboard' });
          }}
          active={this.displayingDashboard()}
        >
          Favorite Coins 
        </ControlButton>
      )}
      <ControlButton style={{marginRight:'0px'}}
        onClick={() => {
          this.setState({ page: 'settings' });
        }}
        active={this.displayingSettings()}
      >
        Select Coins
      </ControlButton>
    </Bar>
  );
}
