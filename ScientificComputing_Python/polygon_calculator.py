class Rectangle:
  def __init__(self, width, height):
    self.width = width
    self.height = height

  def __str__(self):
    output_rect = 'Rectangle(width={}, height={})'.format(self.width, self.height)
    return output_rect

  def set_width(self, new_width):
    self.width = new_width

  def set_height(self, new_height):
    self.height = new_height

  def get_area(self):
    return self.width * self.height

  def get_perimeter(self):
    return (self.width + self.height) * 2

  def get_diagonal(self):
    return (self.width ** 2 + self.height ** 2) ** 0.5

  def get_picture(self):
    if self.width > 50 or self.height > 50:
      return 'Too big for picture.'
    else:
      picture = '*' * self.width + '\n'
      picture *= self.height
      return picture

  def get_amount_inside(self, new_shape):
    return self.get_area() // new_shape.get_area()


class Square(Rectangle):
  def __init__(self, side):
    super().__init__(side, side)

  def __str__(self):
    output_square = 'Square(side={})'.format(self.width)
    return output_square
    
  def set_side(self, new_side):
    self.width = new_side
    self.height = new_side