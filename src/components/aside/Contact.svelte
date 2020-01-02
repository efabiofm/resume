<script>
  import Icon from 'fa-svelte';
  import { contactItems } from '../../data.js';
</script>

<section>
  <h2>Contact</h2>
  <hr>
  <table>
    <tbody>
      {#each contactItems as item}
        <tr>
          <td class="icon-row">
            <Icon icon={item.icon}></Icon>
          </td>
          <td>{item.value}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>
  .icon-row {
    padding-right: .5em;
  }
</style>