<script>
    import { Container, Row, Col } from 'sveltestrap';
import TodoForm from '../components/todo-form.svelte';
import TodoList from '../components/todo-list.svelte';
</script>

<Container>
    <Row class="row mt-5">
        <Col class="col">
            <h1 class="mb-5">My to-do list</h1>
            <TodoForm/>
            <div class="mb-4"/>
            <TodoList/>
        </Col>
    </Row>
</Container>
