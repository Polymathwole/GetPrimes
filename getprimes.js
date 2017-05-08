module.exports={
getPrimes:(n)=>
{
	let primeNumbers=[];

	if (typeof n!==number)
		return "This is not a number!"
	else
		{
			for(let element=0;element<=n;++element)
				{
					let halfOfElement = Math.floor(element/2);//reduced by half in order to reduce iterations
					let count = 0;

					for(let divider=2;divider<=halfOfElement;++divider)
						{
							if (element%divider===0)
								{
									++count;
									break;
								}
						}

					if (count===0)
						primeNumbers.push(element);
				}	
		}

	return primeNumbers;
}
}