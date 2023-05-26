export async function SendEmail({ msg }: { msg: string }) {
  async function addItem() {
    console.log("Sent Email");
  }

  return (
    <form action={addItem}>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
