
artists = ['BOERCKEL', \
    'BOTSCHEN', \
    'CHANDLER', \
    'DORN', \
    'EICKE', \
    'GÖKTEN', \
    'HAMM', \
    'KUNZ', \
    'KUSSMANN', \
    'PEREZ CONCHA', \
    'KRÜGER', \
    'TELLES', \
    'KADOW', \
    'REBASCHUS', \
    'SABBAGH', \
    'SAVUTSINA', \
    'SCHWARZMANN', \
    'SINGALOVSKI', \
    'SLAGMAN', \
    'SPIEGELFELD', \
    'STEINHAUSER', \
    'STERN', \
    'ZDRNJA']

# KUSSMANN missing, SINGALOVSKI no insta
links = ['https://www.instagram.com/janoschboerckel/', \
    'https://www.instagram.com/marc_botschen/', \
    'https://www.instagram.com/____christopherjames/', \
    'https://www.instagram.com/dropthedeadcat/', \
    'https://www.instagram.com/maxeicke/', \
    'https://www.instagram.com/arasgoekten/', \
    'https://www.instagram.com/r.k.l.h/', \
    'https://www.instagram.com/lenakunzx/', \
    '#' ,
    'https://www.instagram.com/estebahhh/', \
    'https://www.instagram.com/annsophie.krueger/', \
    'https://www.instagram.com/luisa.telles/', \
    'https://www.instagram.com/alexanderkadow/', \
    'https://www.instagram.com/matthiasrebaschus/', \
    'https://www.instagram.com/raz_sabbagh/', \
    'https://www.instagram.com/styropo/', \
    'https://www.instagram.com/schwrzmnn/', \
    'https://www.elisingalovski.com/', \
    'https://www.instagram.com/slagmans/', \
    'https://www.instagram.com/charliespiegelfeld', \
    'https://www.instagram.com/mandasteinhauser/', \
    'https://www.instagram.com/__d666ncer__/', \
    'https://www.instagram.com/sanja_s_zdrnja/']

strings = []
for artist, link in zip(artists, links):
    first_line = "+++"
    second_line = "title = \"" + artist + "\""
    third_line = ""
    forth_line = "[extra]"

    artist_websafe = artist.replace("ä","ae").replace("Ä","AE").replace("ö","oe").replace("Ö","OE").replace("ü","ue").replace("Ü","UE")
    fifth_line = "img = \"" + artist_websafe.lower() + "-60-72.jpg\""
    sixth_line = "link = \"" + link + "\""
    seventh_line = "+++"

    string_list = [first_line, second_line, third_line, forth_line, fifth_line, sixth_line, seventh_line]

    joined_string = "\n".join(string_list)
    print(joined_string)

    f = open(artist_websafe.lower() + ".md", "w")
    f.write(joined_string)
    f.close()
