<script lang="js">
    import { ListGroup, ListGroupItem, Icon } from "sveltestrap";
    import { todos } from "../TodoStore";
    import { removeFromArray } from "../utils";

    const removeTodoItem = (item) => {
        let newArray = removeFromArray($todos, item);
        todos.update(() => {
            return newArray;
        });
    };
</script>

<ListGroup class="rounded">
    {#each $todos as todo}
        <ListGroupItem value={todo} class="d-flex justify-content-between">
            <div>{todo}</div>
            <div id="close-icon" on:click={removeTodoItem(todo)}>
                <Icon name="x"/>
            </div>
        </ListGroupItem>
    {/each}
</ListGroup>

<style lang="css">
    #close-icon:hover{
        cursor: pointer;
    }
</style>
