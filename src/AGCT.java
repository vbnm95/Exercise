import java.util.ArrayList;
import java.util.Arrays;

public class AGCT {
	static final int LEN = 2;
	static ArrayList<String> fragment = new ArrayList<String>();
	static String[] target = new String[] {"A", "G", "C", "T"};
	static String[] result = new String[LEN]; 
	
	static void permutation(int cnt, int end) {
		if(cnt == end) {
			fragment.add(Arrays.toString(result));
			//System.out.println(Arrays.toString(result));
			return;
		}
		
		for(int i=0; i<target.length; i++) {
			result[cnt] = target[i];
			permutation(cnt+1, end);
		}
	}
	
	public static void main(String[] args) {
		
		permutation(0, LEN);
		
		for(String str: fragment) {
			System.out.println(str);
		}
		System.out.println(fragment.size());
	
	}
}
