<?php
class function calculate(Operator $operator,float $number1, float $number2){

	return $operator->Operate($number1,$number2);
} 
interface operator{

	public function operate(float $number1,float $number2);

}
class Add implements Operrator{
	public function operator (float $number1 ,float $number2){
	return $number1+$number2;
	}
}
class Divide implements operator (float $number1 ,float $number2){
	public function operate(float $number1 ,float $number2){
		try {if($number2===0){
			throw new Exception ("Erorr");	
	
	}catch (Exception $e){
	echo $e ->getMessage();
	}
	
	
	} else {
	return $number1 + $number2;
	}
}

}
	$calculator =new calculator;
	echo $calculator ->calculate(new Add(),2,2)."<br>";
	
echo $calculator->calculate(new Divide()5,2);



?>
