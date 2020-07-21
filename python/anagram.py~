import json
import re
from functools import reduce
import random

def fullMatchesRegex(regex, word):
    match = re.search(regex, word)
    return True if match and match.group() == match.string else False


def matchesRegex(regexs, word):
    return reduce((lambda x, y: x or y), map(lambda x: fullMatchesRegex(x, word), regexs))

def findLastConsonant(word):
    i = len(word) - 1
    while "aeiou".find(word[i]) >= 0:
            i-=1
    return word[i]

def getWord():
    word = ""
    word += random.choice(sListClean)
    while findLastConsonant(word) != 'r':
        if findLastConsonant(word) == 's':
            word += " " + random.choice(dListClean)
        elif findLastConsonant(word) == 'd':
            word += " " + random.choice(wListClean)
        elif findLastConsonant(word) == 'w':
            word += " " + random.choice(rListClean)
        else:
            raise Exception("word picker went wrong")
    return word

dictFile = open("../words_dictionary.json")
dict = json.loads(dictFile.read())

sList = [];
dList = [];
wList = [];
rList = [];

sRegexs =  ["[aeiou]*s[aeiou]*d[aeiou]*w[aeiou]*r[aeiou]*",
                  "[aeiou]*s[aeiou]*d[aeiou]*w[aeiou]*",
                    "[aeiou]*s[aeiou]*d[aeiou]*",
                    "[aeiou]*s[aeiou]*"];

dRegexs = ["[aeiou]*d[aeiou]*w[aeiou]*r[aeiou]*",
                    "[aeiou]*d[aeiou]*w[aeiou]*",
                    "[aeiou]*d[aeiou]*"];
wRegexs = ["[aeiou]*w[aeiou]*r[aeiou]*",
                    "[aeiou]*w[aeiou]*"];

rRegexs = ["[aeiou]*r[aeiou]*"];

"""
for key in dict:
    if matchesRegex(sRegexs, key):
        sList.append(key)
    if matchesRegex(dRegexs, key):
        dList.append(key)
    if matchesRegex(wRegexs, key):
        wList.append(key)
    if matchesRegex(rRegexs, key):
        rList.append(key)
print(sList)
print(dList)
print(wList)
print(rList)
"""
sListClean = ['as', 'asia', 'aside', 'ease', 'is', 'sad', 'sadware', 'said', 'saudi', 'sea',
        'see', 'seed','side', 'so', 'sod', 'soda', 'suade', 'sud', 'sue', 'sued', 'suede', 'us',
        'use', 'used'];
dListClean = ['adieu', 'ado', 'aid', 'aide', 'audio', 'dewier', 'die', 'do', 'doe',
        'due', 'duo', 'id', 'idea', 'ode']
wListClean = ['aw', 'aware', 'awe', 'ew', 'ewe', 'ow', 'owe', 'ower', 'ware', 'war', 'we', 'wear', 'weir',
        'were', 'wire', 'woe', 'woo', 'wooer', 'wore']
rListClean = ['aerie', 'aero', 'air', 'are', 'area', 'aria', 'aura', 'ear', 'eerie', 'era', 'ere', 'ire', 
        'oar', 'or', 'ore', 'our', 'roe', 'rue', 'urea']

print(getWord())
