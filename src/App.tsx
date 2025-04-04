import FormBuilder from "@vincentbcp/form-builder";

const App = () => {
  return (
    <div>
      <FormBuilder
        onSave={(formDef) => {
          const name = prompt("Please enter form name?");

          if (!name) return;

          const dataSrc =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(formDef));
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.style.display = "none";
          a.href = dataSrc;
          a.download = `${name}.json`;
          a.click();
          document.body.removeChild(a);
        }}
      />
    </div>
  );
};

export default App;
