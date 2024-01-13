<script>
    import IconButton, { Icon } from '@smui/icon-button';

	export let open = false

    async function toggle() {
        open = !open;
    }
</script>

<IconButton on:click={toggle} pressed={!open}>
    <Icon class="material-icons" on>menu</Icon>
    <Icon class="material-icons">close</Icon>
</IconButton>

