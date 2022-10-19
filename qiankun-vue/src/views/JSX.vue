<script>
import About from './About';
export default {
  render(h, context) {
    const { click } = this;
    return (
      <div onClick={click}>
        <span>点击</span>
      </div>
    );
  },
  
  components: {
    About
  },
  methods: {
    click() {
      console.log(111);
    }
  }
};
</script>

<style></style>
