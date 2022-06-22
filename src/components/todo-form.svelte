<script>
    import { Button, Form, FormGroup, Label, Input } from 'sveltestrap'
    import { todos } from '../TodoStore';
  
    let todo = '';
    const addTodoItem = (e) => {
      e.preventDefault();
      todos.update((todos) => {
        return [todo, ...todos]
      })
      todo = '';
    };

</script>

<Form>
    <FormGroup>
      <Label for="exampleEmail">New to-do item</Label>
      <Input bind:value={todo} id="inputElement" type="text" plaintext placeholder="New item here" class="border rounded pl-3"/>
    </FormGroup>
    <Button class="rounded" on:click={addTodoItem} disabled={todo===""}>Add item</Button>
</Form>
