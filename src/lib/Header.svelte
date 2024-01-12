
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let id: string;
    export let name: string;
</script>

<Cell span={12}>
    <LayoutGrid class="table-row">
        <Cell span={6}>
            <div class="table-field row-id">No. {id}</div>
        </Cell>
        <Cell span={6}>
            <div class="table-field row-name">{name}</div>
        </Cell>
    </LayoutGrid>
</Cell>


<style>

    .row-id {
        background-color: transparent;
        color: white;
    }

    .row-name {
        background-color: transparent;
        color: white;
    }

    .table-field {
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>