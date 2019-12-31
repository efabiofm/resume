<script>
  import Icon from 'fa-svelte';
  import { faUserTie } from '@fortawesome/free-solid-svg-icons';
  import { summaryText } from '../../data.js';
</script>

<section>
  <h2>
    <Icon icon={faUserTie} />
    <span>Summary</span>
  </h2>
  <div>{summaryText}</div>
</section>