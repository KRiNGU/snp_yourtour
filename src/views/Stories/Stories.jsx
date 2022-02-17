import { memo } from 'react';
import Story from '../../components/Story/Story';
import story_1 from '../../assets/story_1.jpg';
import story_2 from '../../assets/story_2.jpg';
import story_3 from '../../assets/story_3.jpg';

const Stories = () => (
  <section>
    <h2>Истории путешествий</h2>
    <p className="pnormal description">
      Идейные соображения высшего порядка, а также рамки и место обучения кадров
    </p>
    <Story
      title="Автостопом в Стамбул"
      bgImage={story_1}
      text="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений"
      links={[{ name: 'instagram' }, { name: 'facebook' }, { name: 'YouTube' }]}
      advantages={[
        { text: 'вкусная еда' },
        { text: 'дешевый транспорт' },
        { text: 'красивый город' },
      ]}
    />
    <Story
      title="Автостопом в Стамбул"
      bgImage={story_2}
      text="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
      links={[{ name: 'instagram' }, { name: 'ВКонтакте' }]}
    />
    <Story
      title="Автостопом в Стамбул"
      bgImage={story_3}
      text="Идейные соображения высшего порядка, а также рамки и место обучения кадров обеспечивает широкому кругу (специалистов) участие в формировании новых предложений."
      links={[
        { name: 'instagram' },
        { name: 'facebook' },
        { name: 'ВКонтакте' },
      ]}
    />
  </section>
);

export default memo(Stories);
