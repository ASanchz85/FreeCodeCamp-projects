class Category:
  def __init__(self, description):
    self.description = description
    self.ledger = list()
    self.__total = 0.0

  def __repr__(self):
    title = self.description.center(30, '*') + '\n'
    item_list = ''
    for item in self.ledger:
      item_description = '{:<23}'.format(item['description'])
      item_amount = '{:>7.2f}'.format(item['amount'])
      item_list += '{}{}\n'.format(item_description[:23], item_amount[:7])
    total_amount = 'Total: {:.2f}'.format(self.__total)
    return title + item_list + total_amount
  
  def deposit(self, amount, description=''):
    self.ledger.append({'amount':amount, 'description':description})
    self.__total += amount

  def withdraw(self, amount, description=''):
    if self.__total - amount >= 0:
      self.ledger.append({'amount': -1 * amount,'description': description})
      self.__total -= amount
      return True
    else:
      return False

  def get_balance(self):
    return self.__total

  def transfer(self, amount, to_sent):
    if self.withdraw(amount, 'Transfer to {}'.format(to_sent.description)):
      to_sent.deposit(amount, 'Transfer from {}'.format(self.description))
      return True
    else:
      return False

  def check_funds(self, amount):
    if self.__total >= amount:
      return True
    else:
      return False


def create_spend_chart(categories):
  title = 'Percentage spent by category\n'
  list_of_categories = list()

  for category in categories:
    result = 0
    for elem in category.ledger:
      if elem['amount'] < 0:
        result += abs(elem['amount'])
    list_of_categories.append(round(result, 2))

  total = round(sum(list_of_categories), 2)
  percentage = list(map(lambda amount: int((((amount / total) * 10) // 1) * 10), list_of_categories))
  chart = ''

  for figure in reversed(range(0, 101, 10)):
    chart += str(figure).rjust(3) + '|'
    for i in percentage:
      if i >= figure:
        chart += ' o '
      else:
        chart += '   '
    chart += ' \n'

  last_line = '    ' + '-' * ((len(categories) * 3) + 1) + '\n'
  list_of_items = list(map(lambda category: category.description, categories))
  total_length = max(map(lambda description: len(description), list_of_items))
  list_of_items = list(map(lambda description: description.ljust(total_length), list_of_items))
  for i in zip(*list_of_items):
    last_line += '    ' + ''.join(map(lambda x: x.center(3), i)) + ' \n'
  
  return (title + chart + last_line).rstrip('\n')