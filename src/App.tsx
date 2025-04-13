import FormBuilder from "@vincentbcp/form-builder";

const App = () => {
  const handleSave = (): Promise<boolean> => {
    return Promise.resolve(true);
  };

  return (
    <div>
      <FormBuilder onSave={handleSave} />
    </div>
  );
};

export default App;
