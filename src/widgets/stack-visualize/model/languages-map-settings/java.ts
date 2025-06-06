import { LANGUAGES, STEPS } from "../constants";

const code = `import java.util.ArrayList;

public class Stack<T> {
    private ArrayList<T> items;
    
    public Stack() {
        this.items = new ArrayList<T>();
    }
    
    public void push(T element) {
        items.add(element);
    }
    
    public T pop() {
        if (isEmpty()) {
            return null;
        }
        return items.remove(items.size() - 1);
    }
    
    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return items.get(items.size() - 1);
    }
    
    public boolean isEmpty() {
        return items.size() == 0;
    }
}`

export const highlightLines: { [key in STEPS]?: number[] } = {
    [STEPS.push]: [10, 11, 12],
    [STEPS.pop]: [14, 15, 16, 17, 18, 19],
    [STEPS.peek]: [21, 22, 23, 24, 25, 26],
};

const model = {
    code,
    highlightLines,
    language: LANGUAGES.java,
}

export default model;