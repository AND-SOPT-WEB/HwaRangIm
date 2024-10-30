const Header = () => {
  return (
    <header>
      <div>
        <h1>1 to 50</h1>
        <div>
          <button>게임</button>
          <button>랭킹</button>
        </div>
      </div>
      <div>
        <select>
          <option value="level1">Level1</option>
          <option value="level2">Level2</option>
          <option value="level3">Level3</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
