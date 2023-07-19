import java.util.HashSet;

public class RandomSet {
	public static void main(String[] args) {
		HashSet<String> set = new HashSet<String>();
		int count = 0;
		
		while(true) {
			
			int line = (int)(Math.random()*20 + 1);
			int column = (int)(Math.random()*40 + 1);
			
			String coordi = String.format("%02d%02d", line, column);
			set.add(coordi);
			//System.out.println(coordi);
			
			count++;
			
			if(set.size() == 800)
				break;
		}
		
		System.out.println("count =" + count);
		
		
	}
}
