export default function({ $axios, $auth }) {
  if (!$auth.loggedIn) {
    return;
  }
  $axios
    .$get("/accounts/" + localStorage.getItem("uid"))
    .then(result => {
      $auth.setUser(result);
    })
    .catch(err => {
      localStorage.removeItem("uid");
      $auth.logout();
    });
}
