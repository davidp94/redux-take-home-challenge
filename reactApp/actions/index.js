// Action Creators
// Should return a type and other properties (payload)

export function addEvent(slot, name, phone) {
  return {type: 'ADD_EVENT', slot, name, phone};
}
