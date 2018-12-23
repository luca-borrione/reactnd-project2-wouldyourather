const descendingByScore = (a, b) => {
  const scoreA = a.get('answers').count() + a.get('questions').count();
  const scoreB = b.get('answers').count() + b.get('questions').count();
  return scoreB - scoreA;
};

export const getUsers = state => (
  state.get('users').toList()
);

export const getUserById = (state, userId) => (
  state.get('users').get(userId)
);

export const getLeaders = state => (
  state.get('users')
    .sort(descendingByScore)
    .toList()
    .map(leader => ({
      answered: leader.get('answers').count(),
      asked: leader.get('questions').count(),
      avatarURL: leader.get('avatarURL'),
      id: leader.get('id'),
      name: leader.get('name'),
    }))
);
