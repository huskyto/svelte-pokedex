
<script lang="ts">
    import LayoutGrid, { Cell } from '@smui/layout-grid';
    import { fade } from 'svelte/transition';

    export let id: string;
    export let name: string;
</script>

<Cell span={12}>
    <LayoutGrid class="table-row">
        <Cell span={6}>
            {#if id.length === 0}
                <div class="table-field row-id"></div>
            {:else}
                <div class="table-field row-id">
                    <p transition:fade|global={{ delay: 100, duration: 800 }}>No. {id}</p>
                </div>
            {/if}
        </Cell>
        <Cell span={6}>
            {#if id.length === 0}
                <div class="table-field row-name"></div>
            {:else}
                <div class="table-field row-name">
                    <p transition:fade|global={{ delay: 100, duration: 800 }}>{name}</p>
                </div>
            {/if}
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