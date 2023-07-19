
public class RandomArray {
	public static void main(String[] args) {
		int[][] arr = new int[20][40];
		
		int count = 0;
		
		while(true) {
			int k = 0;
			int line = (int)(Math.random()*20 + 1);
			int column = (int)(Math.random()*40 + 1);
			
			arr[line-1][column-1] = 1;
			
			outter: for(int i = 0; i < 20; i++) {
				for(int j = 0; j < 40; j ++) {
					if(arr[i][j] == 0) {
						break outter;
					} else {
						k++;
					}
				}
			}
			
			count++;
			
			if(k == 800)
				break;
		}
		
		System.out.println("count =" + count);
	}
}
