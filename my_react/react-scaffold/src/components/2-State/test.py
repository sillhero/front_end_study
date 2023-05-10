from PIL import Image, ImageDraw

# 创建一个空白图片
image = Image.new('RGB', (200, 200), (255, 255, 255))
draw = ImageDraw.Draw(image)

# 绘制猫咪的头部（圆形）
draw.ellipse((50, 50, 150, 150), fill=(255, 192, 203), outline=(0, 0, 0))

# 绘制猫咪的眼睛（圆形）
draw.ellipse((70, 80, 90, 100), fill=(255, 255, 255), outline=(0, 0, 0))
draw.ellipse((110, 80, 130, 100), fill=(255, 255, 255), outline=(0, 0, 0))

# 绘制猫咪的嘴巴（弧线）
draw.arc((70, 100, 130, 140), start=190, end=-10, fill=(0, 0, 0), width=2)

# 保存图片
image.save('cat.png')