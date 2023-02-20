#link to exercise -> https://www.freecodecamp.org/learn/scientific-computing-with-python/scientific-computing-with-python-projects/arithmetic-formatter

def arithmetic_arranger(problems, calculate=False):

  line1 = list()
  line2 = list()
  line3 = list()
  line4 = list()

  #error handling
  if len(problems) > 5:
    return 'Error: Too many problems.'

  for problem in problems:
    checking_value = problem.split()
    if '-' in checking_value[1] or '+' in checking_value[1]:
      if '+' in checking_value[1]:
        symbol = True
      else:
        symbol = False
    else:
      return "Error: Operator must be '+' or '-'."

    if not checking_value[0].isdigit() or not checking_value[2].isdigit():
      return 'Error: Numbers must only contain digits.'
      
    if len(checking_value[0]) > 4 or len(checking_value[2]) > 4:
      return 'Error: Numbers cannot be more than four digits.'

  #calculations
    if len(checking_value[0]) < len(checking_value[2]):
      num_dashes = len(checking_value[2]) + 2
    else:
      num_dashes = len(checking_value[0]) + 2

    if symbol:
      result = int(checking_value[0]) + int(checking_value[2])
    else:
      result = int(checking_value[0]) - int(checking_value[2])

  #output
    width_size = max(len(x) for x in checking_value)
    
    line1.append(checking_value[0].rjust(width_size + 2))
    line2.append(checking_value[1] + ' ' + checking_value[2].rjust(width_size))
    line3.append('-' * num_dashes)
    line4.append(str(result).rjust(width_size + 2))

  #formatting output
  line1 = '    '.join(line1)
  line2 = '    '.join(line2)
  line3 = '    '.join(line3)
  line4 = '    '.join(line4)
  
  if calculate:
    total = line1 + '\n' + line2 + '\n' + line3 + '\n' + line4
  else:
    total = line1 + '\n' + line2 + '\n' + line3

  return total