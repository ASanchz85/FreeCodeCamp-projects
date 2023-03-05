import copy
import random
# Consider using the modules imported above.

class Hat:
  def __init__(self, **kwargs):
    self.contents = list()    
    for key, value in kwargs.items():
      for item in range(value):
        self.contents.append(key)
  
  def draw(self, num):
    drawn_balls = list()
    if (num > len(self.contents)):
      return self.contents
      
    for item in range(num):
      drawn_item = random.sample(self.contents, 1)
      drawn_balls += drawn_item
      for ball in drawn_item:
        if ball in self.contents:
          self.contents.remove(ball)

    return drawn_balls
      
def experiment(hat, expected_balls, num_balls_drawn, num_experiments):
  count = 0
  for item in range(num_experiments):
    hat_copy = copy.deepcopy(hat)
    expected_ball_copy = copy.deepcopy(expected_balls)
    colors_gotten = hat_copy.draw(num_balls_drawn)

    for color in colors_gotten:
      if (color in expected_ball_copy):
        expected_ball_copy[color] -= 1

    if (all(value <= 0 for value in expected_ball_copy.values())):
      count += 1

  return count / num_experiments