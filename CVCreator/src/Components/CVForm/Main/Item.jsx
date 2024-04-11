import MarkdownIt from 'markdown-it';
import MdEditor   from 'react-markdown-editor-lite';
import { useMainItemsDispatch } from '../../../Contexts/DataModules/MainItemsProvider';

const mdParser = new MarkdownIt();

export default function Item ({ item, section }) {
  const dispatch = useMainItemsDispatch();

  function handleChange (e) {
    dispatch({
      type : 'changed_value',
      value: e.target.value
    });
  }

  return (
    <MdEditor
      renderHTML={ text => mdParser.render(text) }
      onChange={ handleChange }
    />
  );
}