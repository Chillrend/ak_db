import char from '../../json/character_table.json';
import story from '../../json/handbook_info_table';
import { filter, startCase } from 'lodash';

export default (req, res) => {
  const { char_id, q } = req.query;
  let chars = char;

  if (char_id && char_id in chars) {
    chars = chars[char_id];
    chars.story_description = story.handbookDict[char_id].storyTextAudio[2].stories[0].storyText;
    console.log(chars.story_description);
  } else if (q) {
    chars = filter(chars, o => {
      return o.name.includes(startCase(q));
    });
  } else if (!char_id && !q) {
    //noop
  } else {
    chars = {
      status: 'failed',
      message: 'Operator_id not found'
    };
  }

  res.status(200).json(chars);
};
