texto = 'supermercado superação hiperMERCADO mercado'

puts texto.scan(/(?:super)[\wÀ-ù]+/i).join(' ')

# Positive lookbehind
puts texto.scan(/(?<=super)[\wÀ-ù]+/i).join(' ')

#Negative looggehind
puts texto.scan(/(?<!super)mercado/i).join(' ')