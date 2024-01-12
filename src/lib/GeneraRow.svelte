
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let genera: string;
</script>

<Cell span={12} class="genera-row">
    <LayoutGrid class="data-grid-row">
        <Cell span={12}>
            <div class="table-field">{genera}</div>
        </Cell>
    </LayoutGrid>
</Cell>

<style>
    .table-field {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        background-color: rgb(219, 219, 219);
    }

</style>