export function getRandomCard() {
  const cards = [
    '2_truths_1_lie',
    'bathroom_break',
    'bathroom_break',
    'bathroom_break',
    'bottoms_up',
    'boys_drinks',
    'category',
    'dare_or_drink_1',
    'dare_or_drink_2',
    'dare_or_drink_3',
    'dare_or_drink_4',
    'drinking_buddies',
    'everyone_drinks',
    'free_pass',
    'group_selfie',
    'kissing_booth',
    'ladies_drinks',
    'make_a_rule',
    'most_likely_to',
    'never_have_i_ever',
    'oldest_drinks',
    'person_to_your_right',
    'rock_paper_scissors',
    'shortest_drinks',
    'shot_time',
    'singles_club',
    'sip_time',
    'switch_name',
    'tallest_player_drinks',
    'treasure_hunt',
    'waterfall',
    'youngest_drinks',
  ];

  const randomCardIndex = Math.floor(Math.random() * cards.length);

  return cards[randomCardIndex];
}
