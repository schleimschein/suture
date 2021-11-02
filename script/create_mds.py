
artists = ['BOERCKEL','BOTSCHEN','CHANDLER','DORN','EICKE','GÖKTEN','HAMM','KUNZ','KUSSMANN','PEREZ CONCHA','KRÜGER','TELLES','KADOW','REBASCHUS','SABBAGH','SAVUTSINA','SCHWARZMANN','SINGALOVSKI','SLAGMAN','SPIEGELFELD','STEINHAUSER','STERN','ZDRNJA']

strings = []
for artist in artists:
    first_line = "+++"
    second_line = "title = \"" + artist + "\""
    third_line = ""
    forth_line = "[extra]"

    artist_websafe = artist.replace("ä","ae").replace("Ä","AE").replace("ö","oe").replace("Ö","OE").replace("ü","ue").replace("Ü","UE")
    fifth_line = "img = \"" + artist_websafe.lower() + "-60-72.jpg\""
    sixth_line = "+++"

    string_list = [first_line, second_line, third_line, forth_line, fifth_line, sixth_line]

    joined_string = "\n".join(string_list)
    print(joined_string)

    f = open(artist_websafe.lower() + ".md", "w")
    f.write(joined_string)
    f.close()



