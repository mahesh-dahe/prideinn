import Checkbox from 'components/ux/checkbox/Checkbox';

/**
 * VerticalFilters Component
 * Renders a vertical filter UI for filtering hotel results.
 *
 * @param {Object} props - Props for the component.
 * @param {Array} props.filtersData - An array of filters data objects to display.
 * @param {Function} props.onFiltersUpdate - Callback function to handle filter updates.
 * @param {Function} props.onClearFiltersAction - Callback function to handle clearing of filters.
 * @param {boolean} props.isVerticalFiltersOpen - Flag to control the visibility of the vertical filters.
 */
const VerticalFilters = (props) => {
  const {
    filtersData,
    onFiltersUpdate,
    onClearFiltersAction,
    isVerticalFiltersOpen,
  } = props;

  const isActiveFilterSelected = () => {
    for (const filterGroup of filtersData) {
      for (const subfilter of filterGroup.filters) {
        if (subfilter.isSelected) {
          return true;
        }
      }
    }
    return false;
  };

  return <></>;
};

export default VerticalFilters;
