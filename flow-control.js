function basicTeenager(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  }
}

function teenager(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  }
  else {
    return 'You are not a teenager'
  }
}

function ageChecker(age) {
  if (13 <= age && age <= 19){
    return 'You are a teenager!'
  }

  else if (age < 13) {
    return 'You are a kid'
  }

  else {
    return 'You are a grownup'
  }
}

function ternaryTeenager(age) {
  return 13 <= age && age <= 19 ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
  switch (13 <= age && age <= 19) {
    case (age === 13):
    return "You are a teenager"
    case (age === 14):
    return "You are a teenager"
    case (age === 15):
    return "You are a teenager"
    case (age === 16):
    return "You are a teenager"
    case (age === 17):
    return "You are a teenager"
    case (age === 18):
    return "You are a teenager"
    case (age === 19):
    return "You are a teenager"
    default:
    return "You have an age"
  }
}
