
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    export let description: string;
</script>

<Cell span={12} class="description-row">
    <LayoutGrid class="data-grid-row">
        <Cell span={12}>
            <div class="table-field">{description}</div>
        </Cell>
    </LayoutGrid>
</Cell>

<style>
    .table-field {
        min-height: 120px;
        display: flex;
        justify-content: left;
        padding: 15px;
        color: black;
        background-color: white;
    }

</style>