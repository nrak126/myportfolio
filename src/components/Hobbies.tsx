import styled from "styled-components";

const HobbiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  padding-bottom: 100px;
  gap: 80px;
  background-color: #282c34;
  color: white;
`;

const Hobby = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 40%;
  gap: 10px;
`;

const HobbiesList = styled.div`
  display: flex;
  flex-direction: row;
`;

const Text = styled.p`
  text-align: center;
`;

export function Hobbies() {
  return (
    <HobbiesContainer>
      <h1>Hobbies</h1>
      <HobbiesList>
        <Hobby>
          <h2>Programming</h2>
          <Text>小学生の時にBASIC言語をぺちぺちしてた。</Text>
          <Text>
            中学生でC/C++を独学しようとしたけど関数の概念がわからなくて挫折。
          </Text>
          <Text>プログラミング歴だけは長い超初心者。</Text>
          <Text>これからめっちゃ頑張る！</Text>
        </Hobby>
        <Hobby>
          <h2>Gamming</h2>
          <Text>最近はADOFAIとマイクラをやってる。</Text>
          <Text>原神とゼンゼロも少しだけ。</Text>
        </Hobby>
      </HobbiesList>
      <HobbiesList>
        <Hobby>
          <h2>Music</h2>
          <Text>藤井風が好き。</Text>
          <Text>insaneintherainmusic大好き。</Text>
          <Text>
            ADOFAIやってて気に入った曲とか、たまに界隈曲とか聞いてる。
          </Text>
          <Text>
            自分でも曲を作ってみたりするけど難しすぎて毎回挫折してる。
          </Text>
        </Hobby>
        <Hobby>
          <h2>Instrument</h2>
          <Text>高校の吹奏楽部で打楽器やってた。</Text>
          <Text>ドラムセットとマリンバが好き。</Text>
          <Text>エレキギター買ったけど難しすぎて弾いてない。</Text>
          <Text>
            高校２年間ピアノ習ってたけど全然弾けない。弾けるようになりたい。
          </Text>
          <Text>電子ピアノ買おうか迷ってる。</Text>
        </Hobby>
      </HobbiesList>
      <HobbiesList>
        <Hobby>
          <h2>Drawing</h2>
          <Text>お絵描きするために液タブ買った。</Text>
          <Text>お絵描き難しい。</Text>
          <Text>最近は友達と絵しりとりしてる。</Text>
        </Hobby>
        <Hobby></Hobby>
      </HobbiesList>
    </HobbiesContainer>
  );
}
