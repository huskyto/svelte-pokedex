
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let name: string;
    export let value: string;
</script>

<Cell span={12}>
    <LayoutGrid class="data-grid-row">
        <Cell span={6}>
            <div class="table-field row-name">{name}</div>
        </Cell>
        <Cell span={6}>
            <div class="table-field row-value">{value}</div>
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
    }

    .row-name {
        background-color: rgb(219, 219, 219);
    }

    .row-value {
        background-color: white;
    }
</style>