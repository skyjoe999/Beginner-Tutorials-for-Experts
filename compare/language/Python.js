set_side('Python')
add_syntax('num',/[0-9]+(?:.[0-9]+)?/)
add_syntax('str',/["'].*["']/)
add_syntax('const',/True|False/)
add_syntax('flow',/<|>|=|[\+-\/*]=/)
add_syntax('flow',/if|elif|else|for|in/)
add_syntax('func',/range/)


set_concept('var')
begin_snippet()
add_line('%var%integer% = 1')
add_line('%var%float% = 1.5')
add_line('%var%string% = "Hello"')
add_line('%var%bool% = True')
end_snippet()
add_line('Variables are dynamicaly typed.')
add_line('Strings can use either single or double quotes.')

set_concept('if')
begin_snippet()
add_line('if %var%condition 1%:')
add_line('%cb%If Block%',1)
add_line('elif %var%condition 2%:')
add_line('%cb%Else If Block%',1)
add_line('else:')
add_line('%cb%Else Block%',1)
end_snippet()

set_concept('for')
begin_snippet()
add_line('for %var%i% in range(%var%max%):')
add_line('%cb%Code goes here%',1)
end_snippet()
set_concept('adv_for')
begin_snippet()
add_line('for %var%i% in range(%var%min%, %var%max%, %var%increment%):')
add_line('%cb%Code goes here%',1)
end_snippet()

// #while
//
// #function
//
// #class
//
// #print

end_side()
