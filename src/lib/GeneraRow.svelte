
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { fade } from 'svelte/transition';

    export let genera: string;
</script>

<Cell span={12} class="genera-row">
    <LayoutGrid class="data-grid-row">
        <Cell span={12}>
            {#if genera.length === 0}
                <div class="table-field" />
            {:else}
                <div class="table-field">
                    <p transition:fade|global={{ delay: 100, duration: 800 }}>{genera}</p>
                </div>
            {/if}
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