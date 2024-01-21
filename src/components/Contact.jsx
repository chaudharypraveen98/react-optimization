const getRandom = (num) => {
  console.log("inside random value function");

  return Math.random() * 200 * num;
};
export default function Contact() {
  const value = getRandom(78);
  console.log("random value", value);

  console.log("contact page");
  window.addEventListener("load", () => console.log("loaded"));
  return <div>I am a random contact page</div>;
}
