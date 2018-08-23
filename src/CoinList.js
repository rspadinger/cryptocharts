import React from 'react';
import styled from 'styled-components';

const CoinGrid = styled.div`
	display: grid; 
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	grid-gap: 15px; 
`

const CoinTile = styled.div`
	border: 1px solid white; 
	padding: 10px; 
	&:hover{
		cursor: pointer; 
		color: blue; 
	}
`

export default function(){
	return <CoinGrid>
		{Object.keys(this.state.coinList).map(coin =>
			<CoinTile>
				{coin}
		</CoinTile>
		)}
	</CoinGrid>
}
